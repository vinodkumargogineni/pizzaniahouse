import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Media tile. Pass `src` for a real photo (stock images for now — swap for the
 * shop's own photography later, keeping the same aspect-ratio wrappers).
 * Without `src` it falls back to a styled gradient block.
 */
export function Placeholder({
  label,
  src,
  hue = 20,
  priority = false,
  className,
}: {
  label: string;
  src?: string;
  hue?: number;
  priority?: boolean;
  className?: string;
}) {
  if (src) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden bg-ink-700", className)}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
        <p className="absolute bottom-0 left-0 z-10 p-5 text-xs font-medium uppercase tracking-[0.2em] text-cream/85">
          {label}
        </p>
      </div>
    );
  }

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
