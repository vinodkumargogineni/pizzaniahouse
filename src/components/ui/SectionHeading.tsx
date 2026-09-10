import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-ember">
            <span className="h-px w-8 bg-ember" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p className="mt-5 text-base leading-relaxed text-cream-dim sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
      {children && (
        <Reveal delay={3}>
          <div className="mt-6">{children}</div>
        </Reveal>
      )}
    </div>
  );
}
