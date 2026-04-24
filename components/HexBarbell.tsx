type Props = {
  size?: number;
  className?: string;
};

// Two hexagons linked by a diagonal bar — mirrors the app's splash logo.
export function HexBarbell({ size = 140, className = "" }: Props) {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter
          id="hex-glow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#hex-glow)">
        <polygon
          points="39,18 60,30 60,54 39,66 18,54 18,30"
          stroke="#FF9F4A"
          strokeWidth="3"
          fill="none"
        />
        <polygon
          points="101,74 122,86 122,110 101,122 80,110 80,86"
          stroke="#FF9F4A"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="52"
          y1="52"
          x2="88"
          y2="88"
          stroke="#FF9F4A"
          strokeWidth="10"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}
