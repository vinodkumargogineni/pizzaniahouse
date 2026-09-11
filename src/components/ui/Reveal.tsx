import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tag = "div" | "li" | "span" | "section";

/**
 * Entrance animation wrapper. Deliberately animates transform only — never
 * opacity — so content is always visible to no-JS, search crawlers, and
 * accessibility scanners. Pure CSS; degrades to no animation on old browsers
 * and honours prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const Tag = as as "div";
  return (
    <Tag
      className={cn("reveal", className)}
      style={
        delay
          ? ({ "--reveal-delay": `${delay * 70}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
