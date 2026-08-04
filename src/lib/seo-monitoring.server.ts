/**
 * Production error monitoring for the SEO Manager module.
 * Server-only: persists every server-function / route failure with actionable
 * context and raises an alert so it surfaces in the app.
 */
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type CapturedErrorInput = {
  source: "server_fn" | "route" | "ssr" | "client";
  error: unknown;
  route?: string | null;
  fnName?: string | null;
  severity?: "warning" | "error" | "critical";
  context?: Record<string, unknown>;
};

function describe(error: unknown): { name: string; message: string; stack?: string } {
  if (error instanceof Error) {
    return {
      name: error.name || "Error",
      message: error.message || String(error),
      ...(error.stack ? { stack: error.stack.slice(0, 6000) } : {}),
    };
  }
  if (error instanceof Response) {
    return {
      name: "ResponseError",
      message: `HTTP ${error.status}${error.url ? ` at ${error.url}` : ""}`,
    };
  }
  return { name: "UnknownError", message: String(error).slice(0, 2000) };
}

/** Never throws — monitoring must not break the request it is observing. */
export async function captureServerError(input: CapturedErrorInput): Promise<void> {
  try {
    const { name, message, stack } = describe(input.error);
    const severity = input.severity ?? "error";
    const route = input.route ?? null;
    const fnName = input.fnName ?? null;
    const now = new Date().toISOString();

    const { data: existing } = await supabaseAdmin
      .from("seo_error_events")
      .select("id,occurrences")
      .eq("message", message)
      .eq("source", input.source)
      .eq("resolved", false)
      .limit(1)
      .maybeSingle();

    if (existing) {
      await supabaseAdmin
        .from("seo_error_events")
        .update({ occurrences: existing.occurrences + 1, last_seen_at: now })
        .eq("id", existing.id);
      return;
    }

    await supabaseAdmin.from("seo_error_events").insert({
      source: input.source,
      name,
      message,
      stack: stack ?? null,
      route,
      fn_name: fnName,
      severity,
      context: (input.context ?? {}) as never,
      first_seen_at: now,
      last_seen_at: now,
    });

    if (severity !== "warning") {
      await supabaseAdmin.from("seo_alerts").insert({
        title: `${name} in ${fnName ?? route ?? input.source}`,
        message: message.slice(0, 500),
        category: "system",
        severity: severity === "critical" ? "critical" : "high",
        acknowledged: false,
      });
    }
  } catch (monitoringError) {
    console.error("[monitoring] failed to record error", monitoringError);
  }
}

/** Extracts a readable route/function label from an incoming request URL. */
export function labelFromRequest(request: Request | undefined): {
  route: string | null;
  fnName: string | null;
} {
  if (!request) return { route: null, fnName: null };
  try {
    const url = new URL(request.url);
    const fnName = url.searchParams.get("_serverFnId")
      ? (url.searchParams.get("createServerFn") ?? url.searchParams.get("_serverFnId"))
      : null;
    return { route: url.pathname + url.search.slice(0, 200), fnName };
  } catch {
    return { route: null, fnName: null };
  }
}
