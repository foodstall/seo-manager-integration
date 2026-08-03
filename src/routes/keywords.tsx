import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Plus, RefreshCw, Search as SearchIcon, Trash2 } from "lucide-react";

import { SeoShell } from "@/components/seo/SeoShell";
import { DataTable } from "@/components/seo/DataTable";
import { KpiCard, Panel, QueryBoundary, StatusPill, nf } from "@/components/seo/primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { seoQueries, type Row } from "@/lib/seo-queries";
import { seoHead } from "@/lib/seo-head";
import { useRecordActions, useSemrushSync } from "@/lib/use-seo-actions";

export const Route = createFileRoute("/keywords")({
  head: seoHead(
    "/keywords",
    "Keyword Manager",
    "Track ranking positions, search volume, difficulty and intent across every Software Vala target keyword.",
  ),
  component: KeywordsScreen,
});

function AddKeyword() {
  const { insert } = useRecordActions();
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [url, setUrl] = useState("");
  const [volume, setVolume] = useState("0");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="h-4 w-4" /> Add keyword
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Track a new keyword</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="kw">Keyword</Label>
            <Input id="kw" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="kw-url">Target URL</Label>
            <Input id="kw-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="/pos-software" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="kw-vol">Monthly search volume</Label>
            <Input id="kw-vol" type="number" value={volume} onChange={(e) => setVolume(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={!keyword.trim() || insert.isPending}
            onClick={() =>
              insert.mutate(
                {
                  table: "seo_keywords",
                  values: {
                    keyword: keyword.trim(),
                    target_url: url.trim() || null,
                    search_volume: Number(volume) || 0,
                    difficulty: 0,
                    cpc: 0,
                    intent: "informational",
                    region: "global",
                    status: "tracking",
                  },
                },
                { onSuccess: () => setOpen(false) },
              )
            }
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function KeywordsScreen() {
  const keywords = useQuery(seoQueries.keywords());
  const { remove } = useRecordActions();
  const semrush = useSemrushSync();
  const [term, setTerm] = useState("");

  const all = keywords.data ?? [];
  const rows = useMemo(() => {
    if (!term.trim()) return all;
    const q = term.toLowerCase();
    return all.filter((k) => k.keyword.toLowerCase().includes(q));
  }, [all, term]);

  const top10 = all.filter((k) => (k.position ?? 999) <= 10).length;
  const improved = all.filter(
    (k) => k.position != null && k.previous_position != null && k.position < k.previous_position,
  ).length;
  const totalVolume = all.reduce((a, k) => a + (k.search_volume ?? 0), 0);

  return (
    <SeoShell
      title="Keyword Manager"
      description="Positions, movement, difficulty and intent for every tracked term."
      actions={
        <Button
          size="sm"
          variant="outline"
          disabled={semrush.isPending}
          onClick={() => semrush.mutate({ domain: "softwarevala.com", database: "us" })}
        >
          <RefreshCw className={semrush.isPending ? "h-4 w-4 animate-spin" : "h-4 w-4"} /> Sync Semrush
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Keywords tracked" value={nf.format(all.length)} />
        <KpiCard label="Top 10 rankings" value={top10} />
        <KpiCard label="Improved" value={improved} hint="vs previous check" />
        <KpiCard label="Total search volume" value={nf.format(totalVolume)} hint="monthly" />
      </div>

      <Panel
        className="mt-4"
        title="Tracked keywords"
        actions={
          <div className="flex items-center gap-2">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Filter keywords"
                className="w-52 pl-8"
              />
            </div>
            <AddKeyword />
          </div>
        }
      >
        <QueryBoundary query={keywords} empty="No keywords tracked yet.">
          {() => (
            <DataTable<Row<"seo_keywords">>
              rows={rows}
              columns={[
                {
                  key: "keyword",
                  header: "Keyword",
                  render: (k) => (
                    <div className="min-w-0 max-w-[260px]">
                      <p className="truncate font-medium text-foreground">{k.keyword}</p>
                      <p className="truncate text-xs text-muted-foreground">{k.target_url ?? "—"}</p>
                    </div>
                  ),
                },
                { key: "position", header: "Pos", render: (k) => k.position ?? "—" },
                {
                  key: "change",
                  header: "Change",
                  render: (k) => {
                    if (k.position == null || k.previous_position == null) return "—";
                    const change = k.previous_position - k.position;
                    return (
                      <span className={change >= 0 ? "numeric text-success" : "numeric text-destructive"}>
                        {change >= 0 ? "+" : ""}
                        {change}
                      </span>
                    );
                  },
                },
                { key: "volume", header: "Volume", render: (k) => nf.format(k.search_volume) },
                { key: "difficulty", header: "KD", render: (k) => k.difficulty },
                { key: "cpc", header: "CPC", render: (k) => `$${Number(k.cpc).toFixed(2)}` },
                { key: "intent", header: "Intent", render: (k) => <StatusPill value={k.intent} tone="info" /> },
                { key: "region", header: "Region", render: (k) => k.region },
                { key: "status", header: "Status", render: (k) => <StatusPill value={k.status} /> },
                {
                  key: "actions",
                  header: "",
                  render: (k) => (
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Remove ${k.keyword}`}
                      onClick={() => remove.mutate({ table: "seo_keywords", id: k.id })}
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
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
