import { cn } from "@/lib/cn";

/**
 * Styled image placeholder. Swap these out for <Image> once real photography
 * is available — keep the same aspect ratio wrappers.
 */
export function Placeholder({
  label,
  hue = 20,
  className,
}: {
  label: string;
  hue?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-end overflow-hidden bg-ink-700",
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(120% 120% at 20% 0%, hsl(${hue} 68% 24%) 0%, hsl(${hue + 10} 38% 12%) 55%, #14100e 100%)`,
      }}
    >
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />
      <svg
        className="absolute -right-8 -top-10 h-44 w-44 opacity-25"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="#f26722" strokeWidth="2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#f26722" strokeWidth="1.5" />
      </svg>
      <p className="relative z-10 p-5 text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
        {label}
      </p>
    </div>
  );
}
