import { HexBarbell } from "./HexBarbell";

export function CTA() {
  return (
    <section
      id="download"
      className="relative py-20 md:py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] halo rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-6 text-center">
        <div className="flex justify-center mb-8 md:mb-10">
          <div style={{ filter: "drop-shadow(0 0 32px rgba(255,159,74,0.55))" }}>
            <HexBarbell size={88} />
          </div>
        </div>

        <span className="eyebrow">Compile Your Program</span>

        <h2 className="mt-4 font-display font-black text-[clamp(40px,9vw,88px)] leading-[0.94] tracking-tight">
          Stop training
          <br />
          <span className="text-orange-400">on average.</span>
        </h2>

        <p className="mt-6 md:mt-8 text-fg-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Two minutes of funnel. Twelve weeks of protocol. A lifetime of
          heavier top sets.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/overload-strength-training/id6772410240"
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center justify-center gap-3 bg-grad-primary text-ink-900 font-semibold tracking-[0.18em] uppercase text-sm px-6 md:px-8 py-4 md:py-5 rounded-sm shadow-glow hover:shadow-glow-strong transition-shadow"
          >
            <AppleIcon />
            Download on iOS
          </a>
        </div>

      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.6 8.3c0-1.6 1.3-2.4 1.4-2.5-0.8-1.1-2-1.3-2.4-1.3-1-0.1-2 0.6-2.5 0.6-0.5 0-1.3-0.6-2.2-0.6-1.1 0-2.2 0.7-2.8 1.7-1.2 2.1-0.3 5.2 0.9 6.9 0.6 0.8 1.3 1.8 2.2 1.7 0.9-0.1 1.2-0.6 2.3-0.6 1 0 1.4 0.6 2.3 0.5 1-0 1.6-0.8 2.2-1.7 0.7-1 1-2 1-2-0.1 0-2-0.7-2-2.7zM10 3.3c0.5-0.6 0.8-1.4 0.7-2.3-0.7 0-1.6 0.5-2.1 1.1-0.4 0.5-0.8 1.4-0.7 2.2 0.8 0.1 1.6-0.4 2.1-1z" />
    </svg>
  );
}
