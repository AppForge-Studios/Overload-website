import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support — Overload",
  description:
    "Need help with Overload? Reach out to our team at team@overloadfit.app and we'll get you sorted.",
};

export default function SupportPage() {
  return (
    <main className="bg-bg text-fg min-h-screen flex flex-col">
      <Nav />

      <section className="relative flex-1 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] halo-soft rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-2xl px-5 md:px-6">
          <span className="eyebrow">Support</span>
          <h1 className="mt-4 font-display font-black text-[clamp(34px,7vw,60px)] leading-[0.98] tracking-tight">
            We&apos;re here to help.
          </h1>
          <p className="mt-5 md:mt-6 text-fg-muted text-base md:text-lg leading-relaxed">
            Have a question, hit a snag, or want to share feedback? Reach out to
            our team and we&apos;ll get back to you as soon as we can.
          </p>

          <div className="mt-8 md:mt-10">
            <a
              href="mailto:team@overloadfit.app"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-bg transition-colors hover:bg-orange-400"
            >
              Email team@overloadfit.app
            </a>
          </div>

          <p className="mt-8 text-sm text-fg-dim leading-relaxed">
            You can also email us directly at{" "}
            <a
              href="mailto:team@overloadfit.app"
              className="text-orange-400 underline underline-offset-2 decoration-orange-400/40 hover:decoration-orange-400 transition-colors"
            >
              team@overloadfit.app
            </a>
            . We read every message.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
