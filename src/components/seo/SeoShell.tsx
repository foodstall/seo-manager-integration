import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Calendar,
  Code2,
  FileCode,
  FileText,
  Gauge,
  Globe,
  Layers,
  LayoutDashboard,
  Link2,
  Mail,
  Megaphone,
  MessageSquare,
  MousePointerClick,
  Package,
  Plug,
  Search,
  Share2,
  Shield,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Workflow,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

import { seoQueries } from "@/lib/seo-queries";
import { cn } from "@/lib/utils";

type NavItem = { to: string; label: string; icon: typeof Search };

export const navGroups: Array<{ title: string; items: NavItem[] }> = [
  {
    title: "Optimization",
    items: [
      { to: "/", label: "Overview", icon: LayoutDashboard },
      { to: "/pages", label: "Pages", icon: FileText },
      { to: "/keywords", label: "Keywords", icon: Search },
      { to: "/meta-rules", label: "Meta Rules", icon: Code2 },
      { to: "/indexing", label: "Indexing & Crawl", icon: Globe },
      { to: "/performance", label: "Performance", icon: TrendingUp },
      { to: "/technical", label: "Technical SEO", icon: Gauge },
      { to: "/issues", label: "Issues & Fixes", icon: AlertTriangle },
      { to: "/audit", label: "Audit", icon: Shield },
      { to: "/reports", label: "Reports", icon: BarChart3 },
    ],
  },
  {
    title: "Intelligence",
    items: [
      { to: "/ai-assistant", label: "AI SEO Assistant", icon: Sparkles },
      { to: "/competitors", label: "Competitors", icon: Users },
      { to: "/backlinks", label: "Backlinks", icon: Link2 },
      { to: "/regions", label: "Regional Modes", icon: Globe },
      { to: "/behavior", label: "Heatmap & Behavior", icon: MousePointerClick },
      { to: "/spam-guard", label: "Spam Guard", icon: ShieldAlert },
      { to: "/product-library", label: "Product SEO Library", icon: Package },
    ],
  },
  {
    title: "Growth",
    items: [
      { to: "/content", label: "Content Generator", icon: FileCode },
      { to: "/reels", label: "AI Reels Creator", icon: Video },
      { to: "/leads", label: "Lead Intelligence", icon: Target },
      { to: "/ads", label: "Ads Automation", icon: Megaphone },
      { to: "/email", label: "Email Automation", icon: Mail },
      { to: "/social", label: "Social Auto-Post", icon: Share2 },
      { to: "/inbox", label: "Comments & Inbox", icon: MessageSquare },
      { to: "/flows", label: "Automation Flows", icon: Workflow },
      { to: "/scheduler", label: "Automation Scheduler", icon: Calendar },
    ],
  },
  {
    title: "Control",
    items: [
      { to: "/alerts", label: "Alerts", icon: Zap },
      { to: "/integrations", label: "Settings & Integrations", icon: Plug },
    ],
  },
];

function HealthPill() {
  const { data: issues } = useQuery(seoQueries.issues());
  const open = (issues ?? []).filter((i) => i.status !== "resolved");
  const critical = open.filter((i) => i.severity === "high").length;
  const label = critical > 2 ? "Critical" : critical > 0 ? "Warning" : "Good";
  const tone =
    label === "Critical"
      ? "bg-destructive/15 text-destructive"
      : label === "Warning"
        ? "bg-warning/15 text-warning"
        : "bg-success/15 text-success";

  return (
    <div className={cn("flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium", tone)}>
      <Activity className="h-4 w-4" />
      SEO Health: {label}
    </div>
  );
}

export function SeoShell({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description?: string | undefined;
  actions?: ReactNode | undefined;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-sidebar-foreground">Software Vala</p>
            <p className="text-xs text-muted-foreground">SEO Manager</p>
          </div>
        </div>

        <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-sidebar-accent text-primary"
                          : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                      )}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-sidebar-border px-5 py-3">
          <p className="text-xs text-muted-foreground">
            Connected data · Lovable Cloud
          </p>
        </div>
      </aside>

      <div className="flex min-h-screen w-full flex-col lg:pl-64">
        <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/85 px-6 py-4 backdrop-blur">
          <div>
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>
            {description ? (
              <p className="text-sm text-muted-foreground">{description}</p>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            {actions}
            <HealthPill />
          </div>
        </header>

        <nav className="flex gap-2 overflow-x-auto border-b border-border px-4 py-2 lg:hidden">
          {navGroups.flatMap((g) => g.items).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "whitespace-nowrap rounded-md px-3 py-1.5 text-xs",
                pathname === item.to
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <main className="flex-1 px-6 py-6">
          <div className="animate-in fade-in duration-300">{children}</div>
        </main>
      </div>
    </div>
  );
}
