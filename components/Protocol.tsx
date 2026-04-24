const steps = [
  {
    n: "01",
    title: "Compile",
    body:
      "A 2-minute funnel reads your goals, history, equipment, and schedule. Overload generates a 12-week protocol tuned to the work you can actually do.",
  },
  {
    n: "02",
    title: "Execute",
    body:
      "Each session is a focused, full-screen flow: next-set target, rest timer, RPE capture. Log by tap, not by typing.",
  },
  {
    n: "03",
    title: "Adapt",
    body:
      "Between sessions, Overload reads the signal in your sets — volume, velocity, dropoff — and re-bases the next week's loads.",
  },
  {
    n: "04",
    title: "Accumulate",
    body:
      "Phase I, II, III. Projected strength curve. Real, compounded progress that shows up as more weight on the bar.",
  },
];

export function Protocol() {
  return (
    <section
      id="protocol"
      className="relative py-20 md:py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] halo-soft rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
          {/* Left: copy */}
          <div className="md:sticky md:top-28">
            <span className="eyebrow">The Protocol</span>
            <h2 className="mt-4 font-display font-black text-[clamp(32px,7vw,64px)] leading-[0.98] tracking-tight">
              Twelve weeks.
              <br />
              <span className="text-orange-400">Three phases.</span>
              <br />
              One trajectory.
            </h2>
            <p className="mt-5 md:mt-6 text-fg-muted text-base md:text-lg leading-relaxed max-w-md">
              A structured, progressive program that bends to your week — not
              the other way around.
            </p>

            {/* Projected strength card */}
            <div className="mt-10 bg-surface2 border border-orange-400/15 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[9px]">
                  Projected Strength
                </span>
                <span className="font-display text-[11px] font-bold text-orange-400 tracking-[0.1em]">
                  +23% BY WK 12
                </span>
              </div>
              <ProjectedChart />
              <div className="flex justify-between text-[9px] font-semibold tracking-[0.2em] text-fg-dim mt-2">
                <span>NOW</span>
                <span>WK 4</span>
                <span>WK 8</span>
                <span>WK 12</span>
              </div>
            </div>
          </div>

          {/* Right: steps */}
          <ol className="space-y-3 md:space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative bg-surface2 border border-border rounded-lg p-5 md:p-7 hover:border-orange-400/30 transition-colors"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="font-display font-black text-4xl md:text-5xl text-orange-400/30 tracking-tight leading-none">
                    {s.n}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 md:mt-3 text-sm text-fg-muted leading-relaxed max-w-md">
                      {s.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProjectedChart() {
  return (
    <svg
      viewBox="0 0 320 80"
      className="w-full h-20 mt-3"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="pc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF9F4A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FF9F4A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pc-line" x1="0" x2="1">
          <stop offset="0%" stopColor="#FF9F4A" />
          <stop offset="100%" stopColor="#FFBE7F" />
        </linearGradient>
      </defs>
      {/* baseline */}
      <line
        x1="0"
        x2="320"
        y1="62"
        y2="62"
        stroke="rgba(255,255,255,0.08)"
        strokeDasharray="2 3"
      />
      {/* fill */}
      <path
        d="M0,62 C40,60 70,54 105,48 C150,40 190,22 225,14 C270,8 300,6 320,6 L320,80 L0,80 Z"
        fill="url(#pc-fill)"
      />
      {/* line */}
      <path
        d="M0,62 C40,60 70,54 105,48 C150,40 190,22 225,14 C270,8 300,6 320,6"
        stroke="url(#pc-line)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* endpoint */}
      <circle cx="320" cy="6" r="6" fill="#FF9F4A" fillOpacity="0.3" />
      <circle cx="320" cy="6" r="3" fill="#FF9F4A" />
    </svg>
  );
}
