import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import {
  deleteRecord,
  generateWithAi,
  insertRecord,
  runAutomation,
  syncSearchConsole,
  syncSemrush,
  updateRecord,
} from "@/lib/seo.functions";

function useInvalidate() {
  const client = useQueryClient();
  return () => client.invalidateQueries({ queryKey: ["seo"] });
}

/** Row-level create/update/delete against the SEO tables. */
export function useRecordActions() {
  const invalidate = useInvalidate();
  const insertFn = useServerFn(insertRecord);
  const updateFn = useServerFn(updateRecord);
  const deleteFn = useServerFn(deleteRecord);

  const insert = useMutation({
    mutationFn: (input: Parameters<typeof insertFn>[0]["data"]) => insertFn({ data: input }),
    onSuccess: () => {
      toast.success("Created");
      void invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const update = useMutation({
    mutationFn: (input: Parameters<typeof updateFn>[0]["data"]) => updateFn({ data: input }),
    onSuccess: () => {
      toast.success("Saved");
      void invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: (input: Parameters<typeof deleteFn>[0]["data"]) => deleteFn({ data: input }),
    onSuccess: () => {
      toast.success("Deleted");
      void invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return { insert, update, remove };
}

export function useRunAutomation() {
  const invalidate = useInvalidate();
  const run = useServerFn(runAutomation);
  return useMutation({
    mutationFn: (id: string) => run({ data: { id } }),
    onSuccess: (result) => {
      toast.success(result.message);
      void invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useAiGeneration() {
  const invalidate = useInvalidate();
  const generate = useServerFn(generateWithAi);
  return useMutation({
    mutationFn: (input: Parameters<typeof generate>[0]["data"]) => generate({ data: input }),
    onSuccess: () => void invalidate(),
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useSearchConsoleSync() {
  const invalidate = useInvalidate();
  const sync = useServerFn(syncSearchConsole);
  return useMutation({
    mutationFn: (input: { siteUrl: string; days: number }) => sync({ data: input }),
    onSuccess: (result) => {
      toast.success(`${result.synced} day(s) synced from Search Console`);
      void invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useSemrushSync() {
  const invalidate = useInvalidate();
  const sync = useServerFn(syncSemrush);
  return useMutation({
    mutationFn: (input: { domain: string; database: string }) => sync({ data: input }),
    onSuccess: (result) => {
      toast.success(`${result.imported} keyword(s) imported from Semrush`);
      void invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });
}
