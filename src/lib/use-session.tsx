import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { getRole, type RoleId, type RoleSpec } from "@/lib/roles";

const STORAGE_KEY = "sv:session";

type StoredSession = {
  email: string;
  role: RoleId;
  verifiedAt: string;
  usedBackupKey: boolean;
};

type SessionContextValue = {
  session: StoredSession | null;
  role: RoleSpec;
  isAuthenticated: boolean;
  signIn: (session: StoredSession) => void;
  signOut: () => void;
  switchRole: (role: RoleId) => void;
};

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<StoredSession | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSession(JSON.parse(raw) as StoredSession);
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback((next: StoredSession | null) => {
    setSession(next);
    try {
      if (next) localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<SessionContextValue>(
    () => ({
      session,
      role: getRole(session?.role),
      isAuthenticated: session !== null,
      signIn: (next) => persist(next),
      signOut: () => persist(null),
      switchRole: (role) => persist(session ? { ...session, role } : null),
    }),
    [session, persist],
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession(): SessionContextValue {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used inside <SessionProvider>");
  return ctx;
}

export type { StoredSession };
