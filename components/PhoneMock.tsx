import { HexBarbell } from "./HexBarbell";

// Rough reproduction of the Home screen's top cards — enough to read as the
// real app without being a pixel-perfect copy.
export function PhoneMock() {
  return (
    <div className="relative mx-auto w-[min(280px,calc(100vw-3rem))] aspect-[280/580] rounded-[40px] sm:w-[300px] sm:aspect-[300/620] sm:rounded-[44px] bg-black border-[8px] sm:border-[10px] border-neutral-800 shadow-[0_40px_100px_-20px_rgba(255,159,74,0.35),0_20px_60px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
      {/* Screen */}
      <div className="absolute inset-0 bg-bg overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-20" />

        {/* Top halo */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[360px] h-[320px] halo-soft rounded-full" />

        <div className="relative z-10 pt-12 px-4">
          {/* Member header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <HexBarbell size={22} />
              <span className="font-display font-bold text-xs tracking-[0.2em]">
                OVERLOAD
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-surface3 border border-border" />
              <div className="w-7 h-7 rounded-full bg-surface3 border border-border flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-fg-muted" />
              </div>
            </div>
          </div>

          {/* Week strip card */}
          <div className="mt-4 bg-surface2 border border-border rounded-md p-3">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-display font-black text-[10px] tracking-[0.22em]">
                YOUR WEEK
              </span>
              <span className="text-[8px] font-semibold tracking-[0.2em] text-orange-400">
                OCT 21 — 27
              </span>
            </div>
            <div className="flex justify-between">
              {[
                ["M", 21, false],
                ["T", 22, false],
                ["W", 23, true],
                ["T", 24, false],
                ["F", 25, false],
                ["S", 26, false],
                ["S", 27, false],
              ].map(([d, n, active], i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span
                    className={`text-[8px] ${
                      active ? "text-orange-400" : "text-fg-muted"
                    }`}
                  >
                    {d as string}
                  </span>
                  <div
                    className={`w-7 h-8 rounded-sm flex items-center justify-center text-[11px] font-semibold ${
                      active
                        ? "bg-grad-primary text-ink-900 shadow-glow-sm"
                        : "bg-surface3 border border-border-strong text-fg"
                    }`}
                  >
                    {n as number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero leg day card */}
          <div className="mt-3 rounded-md overflow-hidden border border-border relative">
            <div className="h-28 bg-gradient-to-b from-[#2d1f17] to-surface2 flex items-center justify-center">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect x="4" y="26" width="52" height="8" rx="1" stroke="#ffffff40" strokeWidth="1.5" />
                <rect x="0" y="22" width="4" height="16" rx="1" fill="#ffffff30" />
                <rect x="56" y="22" width="4" height="16" rx="1" fill="#ffffff30" />
              </svg>
              <span className="absolute top-3 left-3 px-2 py-1 text-[8px] tracking-[0.2em] font-bold text-orange-400 bg-black/60 border border-orange-400/80 rounded-sm">
                WEEK 3 · DAY 4
              </span>
            </div>
            <div className="bg-surface2 px-4 pt-3 pb-4">
              <span className="eyebrow text-[9px]">Next Evolution</span>
              <h3 className="font-display font-black text-3xl tracking-[-0.04em] mt-1">
                LEG DAY
              </h3>

              <div className="mt-3 p-3 rounded-md bg-gradient-to-b from-orange-400/15 to-orange-500/25 border border-orange-400 shadow-[0_8px_30px_-10px_rgba(253,139,0,0.6)]">
                <div className="flex gap-2 mb-2">
                  <Tile label="DURATION" value="75" unit="MIN" />
                  <Tile label="VOLUME" value="12.4K" unit="KG" />
                </div>
                <div className="h-8 bg-grad-primary rounded-sm flex items-center justify-center gap-2 text-ink-900 text-[10px] tracking-[0.2em] font-bold">
                  <span>▶</span>
                  START SESSION
                </div>
              </div>
            </div>
          </div>

          {/* Overload Score */}
          <div className="mt-3 bg-surface2 border border-border rounded-md p-3">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-[9px]">Overload Score</span>
              <span className="text-orange-400 text-xs">↗</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-display font-black text-3xl text-orange-400 tracking-[-0.03em]">
                88
              </span>
              <span className="text-fg-muted text-xs">/100</span>
            </div>
            <div className="mt-2 h-[3px] rounded-full bg-surface3 overflow-hidden">
              <div className="h-full w-[88%] bg-grad-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tile({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="flex-1 bg-black/30 border border-border-strong rounded-sm p-2">
      <div className="text-[8px] font-semibold tracking-[0.2em] text-fg-muted">
        {label}
      </div>
      <div className="flex items-baseline gap-0.5 mt-0.5">
        <span className="font-display font-black text-lg text-fg">
          {value}
        </span>
        <span className="text-[8px] font-semibold text-fg-muted">{unit}</span>
      </div>
    </div>
  );
}
