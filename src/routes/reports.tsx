import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BarChart3, FileDown } from "lucide-react";

import { SeoShell } from "@/components/seo/SeoShell";
import { DataTable } from "@/components/seo/DataTable";
import { KpiCard, Panel, QueryBoundary, StatusPill, formatDate } from "@/components/seo/primitives";
import { Button } from "@/components/ui/button";
import { seoQueries, type Row } from "@/lib/seo-queries";
import { seoHead } from "@/lib/seo-head";
import { useGenerateReport } from "@/lib/use-seo-actions";

export const Route = createFileRoute("/reports")({
  head: seoHead(
    "/reports",
    "Reports",
    "Weekly, monthly and campaign SEO reports with export-ready summaries.",
  ),
  component: ReportsScreen,
});

function download(report: Row<"seo_reports">) {
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${report.name.replace(/\s+/g, "-").toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function ReportsScreen() {
  const reports = useQuery(seoQueries.reports());
  const generate = useGenerateReport();
  const all = reports.data ?? [];

  return (
    <SeoShell
      title="Reports"
      description="Scheduled reporting for stakeholders, exportable at any time."
      actions={
        <Button
          size="sm"
          disabled={generate.isPending}
          onClick={() => generate.mutate()}
        >
          <BarChart3 className="h-4 w-4" /> Generate report
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Reports" value={all.length} />
        <KpiCard label="Ready" value={all.filter((r) => r.status === "ready").length} />
        <KpiCard label="Generating" value={all.filter((r) => r.status === "generating").length} />
        <KpiCard label="Types" value={new Set(all.map((r) => r.report_type)).size} />
      </div>

      <Panel className="mt-4" title="Report library">
        <QueryBoundary query={reports} empty="No reports generated yet.">
          {() => (
            <DataTable<Row<"seo_reports">>
              rows={all}
              columns={[
                { key: "name", header: "Report", render: (r) => <span className="font-medium">{r.name}</span> },
                { key: "type", header: "Type", render: (r) => <StatusPill value={r.report_type} tone="neutral" /> },
                {
                  key: "period",
                  header: "Period",
                  render: (r) => (
                    <span className="text-xs text-muted-foreground">
                      {formatDate(r.period_start)} – {formatDate(r.period_end)}
                    </span>
                  ),
                },
                { key: "status", header: "Status", render: (r) => <StatusPill value={r.status} /> },
                {
                  key: "actions",
                  header: "",
                  render: (r) => (
                    <Button size="sm" variant="outline" onClick={() => download(r)}>
                      <FileDown className="h-4 w-4" /> Export
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
