import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * STOPGAP logo — cropped from the shop's printed menu (low-res JPEG on a cream
 * background). Shown inside a cream chip, matching how the flyer frames it.
 * Replace `public/logo.png` with the real transparent PNG / SVG when available
 * and this component can drop the chip wrapper.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg bg-cream px-2 py-1.5 shadow-sm",
        className,
      )}
    >
      <Image
        src="/logo.png"
        alt="Pizzania House — Good Food, Good Mood"
        width={452}
        height={150}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </span>
  );
}
