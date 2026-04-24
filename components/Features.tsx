const features = [
  {
    eyebrow: "Adaptive Weight Targets",
    title: "Auto-progressed,\nevery set.",
    body:
      "Overload reads how each set actually went — reps, RPE, rest — and recomputes the next target. No spreadsheets, no static templates.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 17l4-4 3 3 7-7m0 0v5m0-5h-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    eyebrow: "AI Coach",
    title: "A coach that\nactually listens.",
    body:
      "Voice cues for tempo, breathing, and form mid-set. Between sessions, Overload surfaces specific adjustments — incline press is ready for +5kg.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2v6M7 5v10M15 5v10M3 9v2M19 9v2M11 14v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    eyebrow: "Overload Score",
    title: "One number.\nYour trajectory.",
    body:
      "Volume, consistency, intensity, recovery — folded into a single score from 0–100. See whether you're building or stalling, not just sweating.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M11 6v5l3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    eyebrow: "PR Tracking",
    title: "Estimated 1RMs,\nalways live.",
    body:
      "Brzycki and Epley formulas run on every top set. Deadlift, squat, bench — your estimated maxes update in real time without needing a test day.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 18l4-4 4 4 6-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path d="M14 6h4v4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    eyebrow: "Progress Photos",
    title: "Receipts, not\nbefore-and-after.",
    body:
      "Private, time-stamped gallery with AI physique scanning. Catch changes the mirror misses — weekly, monthly, phase-over-phase.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="6"
          width="16"
          height="12"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="11" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M8 6l2-2h2l2 2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    eyebrow: "Session Flow",
    title: "Train, don't\nfiddle.",
    body:
      "Full-screen active-session UI. Rest timer, next-set target, haptic set completion. Your phone stays out of your way.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M7 5l10 6-10 6V5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="eyebrow">What it does</span>
          <h2 className="mt-4 font-display font-black text-[clamp(32px,7vw,64px)] leading-[0.98] tracking-tight">
            Built to make the
            <br />
            <span className="text-orange-400">next set</span> heavier.
          </h2>
          <p className="mt-5 md:mt-6 text-fg-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Every feature in Overload serves one goal: add load, week after
            week, without blowing out form or recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f) => (
            <article
              key={f.eyebrow}
              className="group relative bg-surface2 border border-border rounded-lg p-6 md:p-7 hover:border-orange-400/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-md bg-orange-400/10 border border-orange-400/30 flex items-center justify-center text-orange-400 mb-6">
                {f.icon}
              </div>
              <span className="eyebrow text-[10px]">{f.eyebrow}</span>
              <h3 className="mt-3 font-display font-bold text-2xl leading-[1.1] tracking-tight whitespace-pre-line">
                {f.title}
              </h3>
              <p className="mt-4 text-sm text-fg-muted leading-relaxed">
                {f.body}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400/0 to-transparent group-hover:via-orange-400/40 transition-colors" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
