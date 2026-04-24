import Link from "next/link";
import { HexBarbell } from "./HexBarbell";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md bg-bg/70">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5">
          <HexBarbell size={28} />
          <span className="font-display font-bold tracking-[0.22em] text-sm">
            OVERLOAD
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#features"
            className="text-xs font-semibold tracking-[0.2em] uppercase text-fg-muted hover:text-fg transition-colors"
          >
            Features
          </a>
          <a
            href="/#protocol"
            className="text-xs font-semibold tracking-[0.2em] uppercase text-fg-muted hover:text-fg transition-colors"
          >
            Protocol
          </a>
          <a
            href="/#insights"
            className="text-xs font-semibold tracking-[0.2em] uppercase text-fg-muted hover:text-fg transition-colors"
          >
            Insights
          </a>
        </nav>

        <a
          href="/#download"
          className="press inline-flex items-center gap-2 bg-grad-primary text-ink-900 font-semibold text-[11px] md:text-xs tracking-[0.18em] uppercase px-3 md:px-4 py-2 rounded-sm shadow-glow-sm hover:shadow-glow transition-shadow whitespace-nowrap"
        >
          Download
        </a>
      </div>
    </header>
  );
}
