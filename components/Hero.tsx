import { HexBarbell } from "./HexBarbell";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Ambient halos */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] halo rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] halo-soft rounded-full pointer-events-none" />

      {/* Pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[0, 0.7, 1.4].map((delay, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[520px] md:h-[520px] rounded-full border border-orange-400/25 animate-ring-out"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-6 w-full grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-12 items-center py-16 md:py-24">
        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse-dot" />
            <span className="eyebrow">Train Heavy · Progress Daily</span>
          </div>

          <h1 className="font-display font-black tracking-tight text-[clamp(44px,10vw,96px)] leading-[0.92] text-fg">
            Overload.
            <br />
            <span className="text-orange-400">Every</span> session.
          </h1>

          <p className="mt-6 md:mt-8 max-w-[520px] text-fg-muted text-base md:text-lg leading-relaxed">
            A 12-week hypertrophy protocol that compiles itself to you.
            Every set is auto-progressed from how you actually perform —
            no guesswork, no plateaus.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#download"
              className="press inline-flex items-center justify-center gap-3 bg-grad-primary text-ink-900 font-semibold tracking-[0.18em] uppercase text-sm px-6 md:px-7 py-4 rounded-sm shadow-glow hover:shadow-glow-strong transition-shadow"
            >
              Start Training
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8m0 0L7 3m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </a>
            <a
              href="#protocol"
              className="press inline-flex items-center justify-center gap-3 border border-border-strong text-fg font-semibold tracking-[0.18em] uppercase text-sm px-6 md:px-7 py-4 rounded-sm hover:border-orange-400/60 hover:text-orange-400 transition-colors"
            >
              See the Protocol
            </a>
          </div>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-5 md:gap-x-8 gap-y-2 text-[10px] font-medium tracking-[0.2em] uppercase text-fg-dim">
            <span>V 2.4.0</span>
            <span className="w-px h-3 bg-border-strong" />
            <span>iOS · iPadOS</span>
            <span className="w-px h-3 bg-border-strong" />
            <span>No Ads · No Spam</span>
          </div>
        </div>

        {/* Right: glowing hex barbell */}
        <div className="relative flex items-center justify-center py-8 md:py-0">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 halo rounded-full" />
          <div
            className="relative"
            style={{ filter: "drop-shadow(0 0 24px rgba(255,159,74,0.5))" }}
          >
            <HexBarbell size={220} />
          </div>
          <div className="absolute -bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 text-center">
            <div className="h-px w-12 md:w-16 bg-orange-400 mx-auto mb-3 md:mb-4 shadow-glow-sm" />
            <p className="eyebrow eyebrow-muted text-[10px]">Compiled · Adaptive · Yours</p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-grad-fade pointer-events-none" />
    </section>
  );
}
