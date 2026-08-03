import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Globe, Plus } from "lucide-react";

import { SeoShell } from "@/components/seo/SeoShell";
import { DataTable } from "@/components/seo/DataTable";
import {
  KpiCard,
  Panel,
  QueryBoundary,
  StatusPill,
  formatDateTime,
  nf,
} from "@/components/seo/primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { seoQueries, type Row } from "@/lib/seo-queries";
import { seoHead } from "@/lib/seo-head";
import { useRecordActions } from "@/lib/use-seo-actions";

export const Route = createFileRoute("/indexing")({
  head: seoHead(
    "/indexing",
    "Indexing & Crawl",
    "Crawl state, HTTP status and index coverage for every discovered Software Vala URL.",
  ),
  component: IndexingScreen,
});

function IndexingScreen() {
  const records = useQuery(seoQueries.indexing());
  const { insert, update } = useRecordActions();
  const [url, setUrl] = useState("");

  const all = records.data ?? [];
  const indexed = all.filter((r) => r.index_state === "indexed").length;
  const excluded = all.filter((r) => r.index_state !== "indexed").length;
  const errors = all.filter((r) => r.http_status >= 400).length;

  const bySource = useMemo(() => {
    const map = new Map<string, number>();
    for (const r of all) map.set(r.source, (map.get(r.source) ?? 0) + 1);
    return [...map.entries()];
  }, [all]);

  return (
    <SeoShell
      title="Indexing & Crawl"
      description="Submit URLs, review crawl status and track index coverage."
      actions={
        <div className="flex items-center gap-2">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="/new-page"
            className="w-56"
          />
          <Button
            size="sm"
            disabled={!url.trim() || insert.isPending}
            onClick={() =>
              insert.mutate(
                {
                  table: "seo_indexing_records",
                  values: {
                    url: url.trim(),
                    source: "manual",
                    crawl_status: "queued",
                    index_state: "discovered",
                    http_status: 200,
                  },
                },
                { onSuccess: () => setUrl("") },
              )
            }
          >
            <Plus className="h-4 w-4" /> Submit URL
          </Button>
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="URLs discovered" value={nf.format(all.length)} icon={Globe} />
        <KpiCard label="Indexed" value={nf.format(indexed)} />
        <KpiCard label="Not indexed" value={nf.format(excluded)} />
        <KpiCard label="HTTP errors" value={nf.format(errors)} />
      </div>

      <Panel className="mt-4" title="Discovery sources">
        <div className="flex flex-wrap gap-2">
          {bySource.map(([source, count]) => (
            <span
              key={source}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {source.replace(/_/g, " ")} · {count}
            </span>
          ))}
        </div>
      </Panel>

      <Panel className="mt-4" title="Crawl log">
        <QueryBoundary query={records} empty="No URLs discovered yet.">
          {() => (
            <DataTable<Row<"seo_indexing_records">>
              rows={all}
              columns={[
                {
                  key: "url",
                  header: "URL",
                  render: (r) => (
                    <span className="block max-w-[300px] truncate font-medium text-foreground">{r.url}</span>
                  ),
                },
                { key: "source", header: "Source", render: (r) => <StatusPill value={r.source} tone="neutral" /> },
                { key: "crawl", header: "Crawl", render: (r) => <StatusPill value={r.crawl_status} /> },
                { key: "state", header: "Index state", render: (r) => <StatusPill value={r.index_state} /> },
                {
                  key: "http",
                  header: "HTTP",
                  render: (r) => (
                    <span className={r.http_status >= 400 ? "numeric text-destructive" : "numeric"}>
                      {r.http_status}
                    </span>
                  ),
                },
                {
                  key: "crawled",
                  header: "Last crawled",
                  render: (r) => (
                    <span className="text-xs text-muted-foreground">{formatDateTime(r.last_crawled_at)}</span>
                  ),
                },
                {
                  key: "notes",
                  header: "Notes",
                  render: (r) => (
                    <span className="block max-w-[220px] truncate text-xs text-muted-foreground">
                      {r.notes ?? "—"}
                    </span>
                  ),
                },
                {
                  key: "actions",
                  header: "",
                  render: (r) => (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        update.mutate({
                          table: "seo_indexing_records",
                          id: r.id,
                          values: { crawl_status: "queued" },
                        })
                      }
                    >
                      Recrawl
                    </Button>
                  ),
                },
              ]}
            />
          )}
        </QueryBoundary>
      </Panel>
    </SeoShell>
  );
}
