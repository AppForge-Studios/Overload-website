import { PhoneMock } from "./PhoneMock";

export function Insights() {
  return (
    <section
      id="insights"
      className="relative py-20 md:py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] halo rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-6 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-center">
        {/* Left: phone */}
        <div className="relative flex justify-center order-last md:order-first">
          <PhoneMock />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <span className="eyebrow eyebrow-muted">Home · Week 3 · Day 4</span>
          </div>
        </div>

        {/* Right: copy */}
        <div>
          <div className="flex items-center gap-2 mb-5 md:mb-6">
            <SparkIcon />
            <span className="eyebrow">Insights</span>
          </div>

          <h2 className="font-display font-black text-[clamp(32px,7vw,64px)] leading-[0.98] tracking-tight">
            A signal
            <br />
            in every set.
          </h2>

          <p className="mt-5 md:mt-6 text-fg-muted text-base md:text-lg leading-relaxed max-w-md">
            Overload listens to the tiny signals in your training — bar speed
            dropoff, hit reps at RPE, rest-adherence — and turns them into
            concrete next moves.
          </p>

          {/* Quote card */}
          <div className="mt-8 md:mt-10 p-5 md:p-6 bg-gradient-to-b from-surface3 to-surface2 border border-orange-400/10 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <SparkIcon />
              <span className="eyebrow text-orange-400 text-[11px]">
                Daily Insight
              </span>
            </div>
            <p className="font-display text-lg md:text-xl leading-[1.35] tracking-tight text-fg">
              &ldquo;Chest strength increased by 5% over the last 14 days.
              Suggesting incline press weight increase.&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-border-strong flex items-center justify-between text-[10px] tracking-[0.2em] font-semibold uppercase text-fg-dim">
              <span>Calculated 2h ago</span>
              <span className="text-orange-400">Apply →</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <Stat n="+12%" label="Volume / Week" />
            <Stat n="95%" label="Consistency" />
            <Stat n="+23%" label="Proj. Strength" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-l-2 border-orange-400/60 pl-4">
      <div className="font-display font-black text-2xl text-orange-400 tracking-tight">
        {n}
      </div>
      <div className="mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-fg-dim">
        {label}
      </div>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1l1.5 4L12 6l-3.5 1L7 11 5.5 7 2 6l3.5-1L7 1z"
        fill="#FF9F4A"
      />
    </svg>
  );
}
