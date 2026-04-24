import { Nav } from "./Nav";
import { Footer } from "./Footer";

type Section = {
  id: string;
  heading: string;
  body: React.ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: Section[];
};

export function LegalLayout({
  eyebrow,
  title,
  lede,
  updated,
  sections,
}: Props) {
  return (
    <main className="bg-bg text-fg min-h-screen">
      <Nav />

      {/* Header */}
      <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 border-b border-border overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] halo-soft rounded-full pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-6">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 font-display font-black text-[clamp(36px,8vw,72px)] leading-[0.98] tracking-tight">
            {title}
          </h1>
          <p className="mt-5 md:mt-6 text-fg-muted text-base md:text-lg leading-relaxed max-w-2xl">
            {lede}
          </p>
          <div className="mt-6 md:mt-8 inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase text-fg-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Last updated · {updated}
          </div>
        </div>
      </section>

      {/* Mobile summary jump list */}
      <section className="md:hidden border-b border-border bg-surface1/40">
        <details className="mx-auto max-w-4xl px-5 py-4">
          <summary className="flex items-center justify-between cursor-pointer list-none text-[10px] font-semibold tracking-[0.22em] uppercase text-orange-400">
            Jump to section
            <span className="text-fg-dim">▾</span>
          </summary>
          <nav className="mt-4 grid grid-cols-1 gap-2 pl-3 border-l border-border-strong">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-xs text-fg-muted py-1"
              >
                <span className="text-fg-dim mr-2 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </a>
            ))}
          </nav>
        </details>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-6 grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
          {/* TOC — desktop only */}
          <aside className="hidden md:block md:sticky md:top-28 md:self-start">
            <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange-400 mb-4">
              Contents
            </div>
            <nav className="space-y-2 border-l border-border-strong pl-4">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-xs text-fg-muted hover:text-orange-400 transition-colors"
                >
                  <span className="text-fg-dim mr-2 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Sections */}
          <div className="space-y-12 md:space-y-16 min-w-0">
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-24 border-t border-border pt-8 md:pt-10 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-3 md:gap-4 mb-5 md:mb-6">
                  <span className="font-display font-black text-orange-400/40 text-xl md:text-2xl tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight">
                    {s.heading}
                  </h2>
                </div>
                <div className="prose-legal space-y-4 text-fg-muted leading-relaxed">
                  {s.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
