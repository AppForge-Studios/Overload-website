import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { DeleteAccountFlow } from "@/components/DeleteAccountFlow";

export const metadata: Metadata = {
  title: "Delete Your Account — Overload",
  description:
    "Permanently delete your Overload account and all associated training data. Sign in to confirm and remove everything.",
};

export default function DeletePage() {
  return (
    <main className="bg-bg text-fg min-h-screen flex flex-col">
      <Nav />

      <section className="relative flex-1 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] halo-soft rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-2xl px-5 md:px-6">
          <span className="eyebrow">Account &amp; Data Deletion</span>
          <h1 className="mt-4 font-display font-black text-[clamp(34px,7vw,60px)] leading-[0.98] tracking-tight">
            Delete your account.
          </h1>
          <p className="mt-5 md:mt-6 text-fg-muted text-base md:text-lg leading-relaxed">
            Removing your Overload account permanently erases your profile,
            training history, generated program, stats, and progress photos.
            There&apos;s no recovery — so we ask you to sign in first to confirm
            it&apos;s really you.
          </p>

          <div className="mt-8 md:mt-10">
            <DeleteAccountFlow />
          </div>

          <p className="mt-8 text-sm text-fg-dim leading-relaxed">
            Prefer to do this another way? You can also delete your account
            in-app under{" "}
            <strong className="text-fg-muted">Settings → Account → Delete Account</strong>,
            or email{" "}
            <a
              href="mailto:privacy@overload.app"
              className="text-orange-400 underline underline-offset-2 decoration-orange-400/40 hover:decoration-orange-400 transition-colors"
            >
              privacy@overload.app
            </a>{" "}
            and we&apos;ll remove your data within 30 days. See our{" "}
            <a
              href="/privacy"
              className="text-orange-400 underline underline-offset-2 decoration-orange-400/40 hover:decoration-orange-400 transition-colors"
            >
              Privacy Policy
            </a>{" "}
            for retention details.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
