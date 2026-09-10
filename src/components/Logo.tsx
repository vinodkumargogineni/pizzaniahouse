import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-ember text-ink">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
          <path
            d="M12 2 3 6c0 8 4 14 9 16 5-2 9-8 9-16l-9-4Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M4.5 7 12 4l7.5 3c-.3 6.4-3.3 11.4-7.5 13.4C7.8 18.4 4.8 13.4 4.5 7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="9.5" cy="9.5" r="1.1" fill="currentColor" />
          <circle cx="13.5" cy="12" r="1.1" fill="currentColor" />
          <circle cx="10" cy="14.5" r="1.1" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg tracking-wide text-cream">
          Pizzania
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-ember">
          House
        </span>
      </span>
    </span>
  );
}
