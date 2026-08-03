import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Play, Shield } from "lucide-react";

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
import { Progress } from "@/components/ui/progress";
import { seoQueries, type Row } from "@/lib/seo-queries";
import { seoHead } from "@/lib/seo-head";
import { useRecordActions } from "@/lib/use-seo-actions";

export const Route = createFileRoute("/audit")({
  head: seoHead(
    "/audit",
    "Site Audit",
    "Full-site crawls scoring on-page, technical, content and off-page health for Software Vala.",
  ),
  component: AuditScreen,
});

type Breakdown = Record<string, number>;

function AuditScreen() {
  const audits = useQuery(seoQueries.audits());
  const { insert } = useRecordActions();

  const all = audits.data ?? [];
  const latest = all[0];
  const breakdown = (latest?.breakdown ?? {}) as Breakdown;

  return (
    <SeoShell
      title="Site Audit"
      description="Scheduled and on-demand crawls with category-level scoring."
      actions={
        <Button
          size="sm"
          disabled={insert.isPending}
          onClick={() =>
            insert.mutate({
              table: "seo_audits",
              values: {
                name: `Manual audit · ${new Date().toLocaleDateString("en-US")}`,
                status: "running",
                score: 0,
                pages_crawled: 0,
                issues_found: 0,
                started_at: new Date().toISOString(),
              },
            })
          }
        >
          <Play className="h-4 w-4" /> Run audit
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Latest score" value={latest?.score ?? 0} icon={Shield} hint="0–100" />
        <KpiCard label="Pages crawled" value={nf.format(latest?.pages_crawled ?? 0)} />
        <KpiCard label="Issues found" value={nf.format(latest?.issues_found ?? 0)} />
        <KpiCard label="Audits run" value={all.length} />
      </div>

      <Panel className="mt-4" title="Latest audit breakdown" description={latest?.name}>
        {Object.keys(breakdown).length === 0 ? (
          <p className="text-sm text-muted-foreground">Run an audit to see a category breakdown.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(breakdown).map(([key, value]) => (
              <div key={key}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="capitalize text-muted-foreground">{key.replace(/[_-]/g, " ")}</span>
                  <span className="numeric font-medium text-foreground">{value}</span>
                </div>
                <Progress value={Number(value)} />
              </div>
            ))}
          </div>
        )}
      </Panel>

      <Panel className="mt-4" title="Audit history">
        <QueryBoundary query={audits} empty="No audits run yet.">
          {() => (
            <DataTable<Row<"seo_audits">>
              rows={all}
              columns={[
                { key: "name", header: "Audit", render: (a) => <span className="font-medium">{a.name}</span> },
                { key: "status", header: "Status", render: (a) => <StatusPill value={a.status} /> },
                { key: "score", header: "Score", render: (a) => a.score },
                { key: "pages", header: "Pages", render: (a) => nf.format(a.pages_crawled) },
                { key: "issues", header: "Issues", render: (a) => nf.format(a.issues_found) },
                {
                  key: "started",
                  header: "Started",
                  render: (a) => <span className="text-xs text-muted-foreground">{formatDateTime(a.started_at)}</span>,
                },
                {
                  key: "completed",
                  header: "Completed",
                  render: (a) => (
                    <span className="text-xs text-muted-foreground">{formatDateTime(a.completed_at)}</span>
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
