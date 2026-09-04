import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Check, KeyRound, LogOut, ShieldCheck, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROLES } from "@/lib/roles";
import { verifySuperAdmin } from "@/lib/session.functions";
import { useSession } from "@/lib/use-session";
import { cn } from "@/lib/utils";

export function RoleSwitcher() {
  const { session, role, isAuthenticated, signIn, signOut, switchRole } = useSession();
  const navigate = useNavigate();
  const verify = useServerFn(verifySuperAdmin);

  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [licenseKey, setLicenseKey] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    try {
      const result = await verify({ data: { email, password, licenseKey } });
      if (!result.ok) {
        toast.error(result.reason);
        return;
      }
      signIn({
        email: result.email,
        role: "super_admin",
        verifiedAt: result.verifiedAt,
        usedBackupKey: result.usedBackupKey,
      });
      toast.success(
        result.usedBackupKey ? "Signed in with backup key" : "Super Admin verified",
      );
      setOpen(false);
      setPassword("");
      setLicenseKey("");
      void navigate({ to: "/" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Verification failed");
    } finally {
      setPending(false);
    }
  }

  if (!isAuthenticated) {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <UserCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
          Sign in
        </button>
        <LoginDialog
          open={open}
          onOpenChange={setOpen}
          pending={pending}
          email={email}
          password={password}
          licenseKey={licenseKey}
          setEmail={setEmail}
          setPassword={setPassword}
          setLicenseKey={setLicenseKey}
          onSubmit={onSubmit}
        />
      </>
    );
  }

  const ActiveIcon = role.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/10"
          aria-label="Switch role dashboard"
        >
          <ActiveIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          <span className="max-w-[130px] truncate">{role.label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="space-y-0.5">
          <span className="flex items-center gap-1.5 text-xs font-semibold">
            <ShieldCheck className="h-3.5 w-3.5 text-success" aria-hidden="true" />
            Super Admin verified
          </span>
          <span className="block truncate text-[11px] font-normal text-muted-foreground">
            {session?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
          Switch dashboard
        </DropdownMenuLabel>
        {ROLES.map((item) => {
          const Icon = item.icon;
          const active = item.id === role.id;
          return (
            <DropdownMenuItem
              key={item.id}
              onSelect={() => {
                switchRole(item.id);
                void navigate({ to: item.home });
                toast.success(`Switched to ${item.label}`);
              }}
              className="gap-2"
            >
              <Icon className={cn("h-4 w-4", active && "text-primary")} aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm">{item.label}</span>
                <span className="block truncate text-[11px] text-muted-foreground">
                  {item.description}
                </span>
              </span>
              {active && <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2"
          onSelect={() => {
            signOut();
            toast.success("Signed out");
            void navigate({ to: "/" });
          }}
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LoginDialog({
  open,
  onOpenChange,
  pending,
  email,
  password,
  licenseKey,
  setEmail,
  setPassword,
  setLicenseKey,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  pending: boolean;
  email: string;
  password: string;
  licenseKey: string;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  setLicenseKey: (v: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <KeyRound className="h-4 w-4 text-primary" aria-hidden="true" />
            Super Admin access
          </DialogTitle>
          <DialogDescription>
            Verify with your credentials and the 12-digit license key (backup key also accepted).
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="sv-email">Username</Label>
            <Input
              id="sv-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="sv-password">Password</Label>
            <Input
              id="sv-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="sv-license">License / backup key</Label>
            <Input
              id="sv-license"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              placeholder="0000-0000-0000"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Verifying…" : "Verify & sign in"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
