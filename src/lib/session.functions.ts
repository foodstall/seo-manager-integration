import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const normalizeKey = (value: string) => value.replace(/[\s-]/g, "").toUpperCase();

/**
 * Verifies the Super Admin credentials plus the 12-digit license key.
 * The backup key is accepted as an alternative to the license key.
 */
export const verifySuperAdmin = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        email: z.string().trim().min(1).max(255),
        password: z.string().min(1).max(255),
        licenseKey: z.string().trim().min(1).max(64),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const email = process.env["SV_SUPER_ADMIN_EMAIL"];
    const password = process.env["SV_SUPER_ADMIN_PASSWORD"];
    const license = process.env["SV_LICENSE_KEY"];
    const backup = process.env["SV_BACKUP_KEY"];

    if (!email || !password || !license || !backup) {
      return { ok: false as const, reason: "Super Admin access is not configured." };
    }

    const emailOk = timingSafeEqual(data.email.trim().toLowerCase(), email.trim().toLowerCase());
    const passwordOk = timingSafeEqual(data.password, password);
    if (!emailOk || !passwordOk) {
      return { ok: false as const, reason: "Invalid username or password." };
    }

    const supplied = normalizeKey(data.licenseKey);
    const usedBackup = timingSafeEqual(supplied, normalizeKey(backup));
    const licenseOk = timingSafeEqual(supplied, normalizeKey(license)) || usedBackup;
    if (!licenseOk) {
      return { ok: false as const, reason: "Invalid license or backup key." };
    }

    return {
      ok: true as const,
      email: email.trim(),
      usedBackupKey: usedBackup,
      verifiedAt: new Date().toISOString(),
    };
  });
