import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    // Production error monitoring: persist the failure with actionable context.
    try {
      const [{ captureServerError, labelFromRequest }, { getRequest }] = await Promise.all([
        import("@/lib/seo-monitoring.server"),
        import("@tanstack/react-start/server"),
      ]);
      let request: Request | undefined;
      try {
        request = getRequest();
      } catch {
        request = undefined;
      }
      const { route, fnName } = labelFromRequest(request);
      await captureServerError({
        source: "server_fn",
        error,
        route,
        fnName,
        severity: "error",
        context: { method: request?.method ?? null },
      });
    } catch (monitoringError) {
      console.error("[monitoring] capture failed", monitoringError);
    }
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});


// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Captures every server-function failure (they are serialized back to the
// client, so the request middleware never sees them) before rethrowing.
const serverFnMonitoring = createMiddleware({ type: "function" }).server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (!(error != null && typeof error === "object" && "statusCode" in error)) {
      try {
        const [{ captureServerError, labelFromRequest }, { getRequest }] = await Promise.all([
          import("@/lib/seo-monitoring.server"),
          import("@tanstack/react-start/server"),
        ]);
        let request: Request | undefined;
        try {
          request = getRequest();
        } catch {
          request = undefined;
        }
        const { route, fnName } = labelFromRequest(request);
        await captureServerError({
          source: "server_fn",
          error,
          route,
          fnName,
          severity: "error",
          context: { method: request?.method ?? null },
        });
      } catch (monitoringError) {
        console.error("[monitoring] capture failed", monitoringError);
      }
    }
    throw error;
  }
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth, serverFnMonitoring],
  requestMiddleware: [errorMiddleware, csrfMiddleware],
}));
