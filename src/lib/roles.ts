import {
  BarChart3,
  Crown,
  FileCode,
  Gauge,
  Megaphone,
  Search,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

export type RoleId =
  | "super_admin"
  | "seo_manager"
  | "content_manager"
  | "growth_manager"
  | "analyst"
  | "technical_admin"
  | "compliance_officer";

export type RoleSpec = {
  id: RoleId;
  label: string;
  description: string;
  icon: LucideIcon;
  /** Landing dashboard for the role. */
  home: string;
  /** Routes this role may open. `"*"` means every route. */
  routes: string[] | "*";
};

export const ROLES: RoleSpec[] = [
  {
    id: "super_admin",
    label: "Super Admin",
    description: "Full access to every dashboard and control",
    icon: Crown,
    home: "/",
    routes: "*",
  },
  {
    id: "seo_manager",
    label: "SEO Manager",
    description: "Pages, keywords, meta rules and reporting",
    icon: Search,
    home: "/keywords",
    routes: [
      "/",
      "/pages",
      "/keywords",
      "/meta-rules",
      "/indexing",
      "/performance",
      "/issues",
      "/reports",
      "/alerts",
    ],
  },
  {
    id: "content_manager",
    label: "Content Manager",
    description: "Content, reels, social and inbox workflows",
    icon: FileCode,
    home: "/content",
    routes: [
      "/",
      "/content",
      "/reels",
      "/social",
      "/inbox",
      "/product-library",
      "/meta-rules",
      "/scheduler",
    ],
  },
  {
    id: "growth_manager",
    label: "Growth Manager",
    description: "Leads, ads, email and automation flows",
    icon: Megaphone,
    home: "/leads",
    routes: ["/", "/leads", "/ads", "/email", "/social", "/flows", "/scheduler", "/reports"],
  },
  {
    id: "analyst",
    label: "Analyst",
    description: "Performance, competitors and behaviour insights",
    icon: BarChart3,
    home: "/performance",
    routes: [
      "/",
      "/performance",
      "/keywords",
      "/competitors",
      "/backlinks",
      "/behavior",
      "/regions",
      "/reports",
      "/ai-assistant",
    ],
  },
  {
    id: "technical_admin",
    label: "Technical Admin",
    description: "Technical SEO, crawling, diagnostics and integrations",
    icon: Gauge,
    home: "/technical",
    routes: [
      "/",
      "/technical",
      "/indexing",
      "/issues",
      "/audit",
      "/diagnostics",
      "/integrations",
      "/alerts",
    ],
  },
  {
    id: "compliance_officer",
    label: "Compliance Officer",
    description: "Audit trail, spam guard and alerting",
    icon: ShieldAlert,
    home: "/audit",
    routes: ["/", "/audit", "/spam-guard", "/alerts", "/issues", "/reports"],
  },
];

export function getRole(id: RoleId | null | undefined): RoleSpec {
  return ROLES.find((r) => r.id === id) ?? ROLES[0]!;
}

export function canAccess(role: RoleSpec, pathname: string): boolean {
  if (role.routes === "*") return true;
  return role.routes.some((r) => (r === "/" ? pathname === "/" : pathname.startsWith(r)));
}
