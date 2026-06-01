"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  signOut,
  type User,
} from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { auth, functions } from "@/lib/firebase";

type Step = "signin" | "confirm" | "deleting" | "done";

// Map Firebase error codes to plain-language copy.
function friendlyError(err: unknown): string {
  const code =
    typeof err === "object" && err !== null && "code" in err
      ? String((err as { code: unknown }).code)
      : "";
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "That email and password don't match an Overload account.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Wait a few minutes and try again.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    case "auth/account-exists-with-different-credential":
      return "This email is registered with a different sign-in method. Use the matching button above.";
    case "auth/operation-not-allowed":
      return "This sign-in method isn't enabled. Try another, or email privacy@overloadfit.app.";
    case "functions/unauthenticated":
      return "Your session expired. Sign in again to continue.";
    default:
      return err instanceof Error
        ? err.message
        : "Something went wrong. Try again, or email privacy@overloadfit.app.";
  }
}

export function DeleteAccountFlow() {
  const [step, setStep] = useState<Step>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  function onSignedIn(u: User) {
    setUser(u);
    setError(null);
    setPassword("");
    setStep("confirm");
  }

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      onSignedIn(cred.user);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleProviderSignIn(kind: "google" | "apple") {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const provider =
        kind === "google"
          ? new GoogleAuthProvider()
          : new OAuthProvider("apple.com");
      const cred = await signInWithPopup(auth, provider);
      onSignedIn(cred.user);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    if (busy || !acknowledged) return;
    setBusy(true);
    setError(null);
    setStep("deleting");
    try {
      const deleteAccount = httpsCallable(functions, "deleteAccount");
      await deleteAccount({});
      // Account is gone server-side; drop the stale local session.
      await signOut(auth).catch(() => {});
      setStep("done");
    } catch (err) {
      setError(friendlyError(err));
      setStep("confirm");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-lg border border-border-strong bg-surface1/60 backdrop-blur-sm p-6 md:p-8">
      {step === "signin" && (
        <>
          <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange-400 mb-3">
            Step 1 · Verify it&apos;s you
          </div>
          <p className="text-sm text-fg-muted leading-relaxed mb-6">
            Deletion is permanent and tied to your account, so we need you to
            sign in first — the same way you do in the app. We never delete an
            account from an email alone.
          </p>

          <form onSubmit={handleEmailSignIn} className="space-y-3">
            <label className="block">
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-fg-dim">
                Email
              </span>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-sm bg-bg border border-border-strong px-3.5 py-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-orange-400/60 transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-fg-dim">
                Password
              </span>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-sm bg-bg border border-border-strong px-3.5 py-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-orange-400/60 transition-colors"
              />
            </label>
            <button
              type="submit"
              disabled={busy}
              className="press w-full inline-flex items-center justify-center gap-2 bg-grad-primary text-ink-900 font-semibold tracking-[0.18em] uppercase text-xs px-4 py-3.5 rounded-sm shadow-glow-sm hover:shadow-glow transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {busy ? "Signing in…" : "Sign in with email"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase text-fg-dim">
            <span className="h-px flex-1 bg-border-strong" />
            or
            <span className="h-px flex-1 bg-border-strong" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleProviderSignIn("google")}
              disabled={busy}
              className="press w-full inline-flex items-center justify-center gap-3 border border-border-strong text-fg font-semibold tracking-[0.18em] uppercase text-xs px-4 py-3.5 rounded-sm hover:border-orange-400/60 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <GoogleIcon />
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => handleProviderSignIn("apple")}
              disabled={busy}
              className="press w-full inline-flex items-center justify-center gap-3 border border-border-strong text-fg font-semibold tracking-[0.18em] uppercase text-xs px-4 py-3.5 rounded-sm hover:border-orange-400/60 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <AppleIcon />
              Continue with Apple
            </button>
          </div>
        </>
      )}

      {step === "confirm" && (
        <>
          <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange-400 mb-3">
            Step 2 · Confirm deletion
          </div>
          <p className="text-sm text-fg-muted leading-relaxed">
            Signed in as{" "}
            <strong className="text-fg">{user?.email ?? "your account"}</strong>.
            Deleting your account permanently removes:
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
            {[
              "Your profile and onboarding answers",
              "Every logged session, set, and PR",
              "Your generated program and progress stats",
              "Progress photos and AI physique renders",
            ].map((item) => (
              <li key={item} className="relative pl-5">
                <span className="absolute left-0 top-2.5 h-px w-3 bg-orange-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-fg-muted leading-relaxed">
            This cannot be undone. Active subscriptions are billed by Apple or
            Google — cancel those in your App Store or Play Store settings.
          </p>

          <label className="mt-6 flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-orange-500"
            />
            <span className="text-sm text-fg-muted leading-relaxed">
              I understand this permanently deletes my Overload account and all
              of my data.
            </span>
          </label>

          <button
            type="button"
            onClick={handleDelete}
            disabled={busy || !acknowledged}
            className="press mt-5 w-full inline-flex items-center justify-center gap-2 bg-coral text-ink-900 font-semibold tracking-[0.18em] uppercase text-xs px-4 py-3.5 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Permanently delete my account
          </button>
          <button
            type="button"
            onClick={async () => {
              await signOut(auth).catch(() => {});
              setUser(null);
              setAcknowledged(false);
              setError(null);
              setStep("signin");
            }}
            disabled={busy}
            className="mt-3 w-full text-center text-[11px] font-semibold tracking-[0.18em] uppercase text-fg-dim hover:text-fg transition-colors disabled:opacity-60"
          >
            Cancel
          </button>
        </>
      )}

      {step === "deleting" && (
        <div className="py-10 text-center">
          <div className="mx-auto mb-5 h-2 w-2 rounded-full bg-orange-400 animate-pulse-dot" />
          <p className="text-sm text-fg-muted">
            Deleting your account and all associated data…
          </p>
        </div>
      )}

      {step === "done" && (
        <div className="py-6 text-center">
          <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange-400 mb-3">
            Done
          </div>
          <h3 className="font-display font-bold text-xl text-fg">
            Your account has been deleted.
          </h3>
          <p className="mt-3 text-sm text-fg-muted leading-relaxed max-w-sm mx-auto">
            Your profile, training history, photos, and program have been
            permanently removed. You can re-download Overload and start fresh
            any time.
          </p>
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="mt-5 rounded-sm border border-coral/40 bg-coral/10 px-3.5 py-3 text-sm text-coral"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.49h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.63z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.05l3.01-2.33z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M11.6 8.3c0-1.6 1.3-2.4 1.4-2.5-0.8-1.1-2-1.3-2.4-1.3-1-0.1-2 0.6-2.5 0.6-0.5 0-1.3-0.6-2.2-0.6-1.1 0-2.2 0.7-2.8 1.7-1.2 2.1-0.3 5.2 0.9 6.9 0.6 0.8 1.3 1.8 2.2 1.7 0.9-0.1 1.2-0.6 2.3-0.6 1 0 1.4 0.6 2.3 0.5 1-0 1.6-0.8 2.2-1.7 0.7-1 1-2 1-2-0.1 0-2-0.7-2-2.7zM10 3.3c0.5-0.6 0.8-1.4 0.7-2.3-0.7 0-1.6 0.5-2.1 1.1-0.4 0.5-0.8 1.4-0.7 2.2 0.8 0.1 1.6-0.4 2.1-1z" />
    </svg>
  );
}
