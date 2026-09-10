import { cn } from "@/lib/cn";

/** Decorative hand-drawn-ish pizza used as a hero graphic (no photo assets needed). */
export function PizzaArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <radialGradient id="crust" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#f0b878" />
          <stop offset="70%" stopColor="#e79a4d" />
          <stop offset="100%" stopColor="#c9772e" />
        </radialGradient>
        <radialGradient id="cheese" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#ffd98a" />
          <stop offset="100%" stopColor="#f4b64f" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="185" fill="url(#crust)" />
      <circle cx="200" cy="200" r="150" fill="url(#cheese)" />
      {/* sauce blush */}
      <circle cx="200" cy="200" r="150" fill="#d9542b" opacity="0.14" />
      {/* pepperoni */}
      {[
        [150, 130],
        [255, 140],
        [120, 220],
        [230, 250],
        [190, 190],
        [280, 205],
        [160, 285],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="20" fill="#c0392b" />
          <circle cx={cx} cy={cy} r="20" fill="#8e2b20" opacity="0.25" />
          <circle cx={cx - 5} cy={cy - 5} r="4" fill="#e67e5a" opacity="0.6" />
        </g>
      ))}
      {/* basil */}
      {[
        [210, 120],
        [130, 175],
        [270, 285],
        [175, 235],
      ].map(([cx, cy], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="14"
          ry="9"
          fill="#3f7a44"
          transform={`rotate(${i * 40} ${cx} ${cy})`}
        />
      ))}
      {/* slice lines */}
      {[0, 45, 90, 135].map((a) => (
        <line
          key={a}
          x1="200"
          y1="200"
          x2={200 + 150 * Math.cos((a * Math.PI) / 180)}
          y2={200 + 150 * Math.sin((a * Math.PI) / 180)}
          stroke="#c9772e"
          strokeWidth="2"
          opacity="0.35"
        />
      ))}
    </svg>
  );
}
