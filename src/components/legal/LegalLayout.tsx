import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/** Shared shell + prose styling for the policy pages. */
export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[0.95] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-cream/60">Last updated: {updated}</p>
        {intro && (
          <p className="mt-6 text-lg leading-relaxed text-cream-dim">{intro}</p>
        )}

        <div
          className={[
            "legal mt-10 space-y-8 text-[15px] leading-relaxed text-cream/80",
            "[&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-cream",
            "[&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-cream",
            "[&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6",
            "[&_a]:font-medium [&_a]:text-ember [&_a]:underline [&_a]:underline-offset-2",
            "[&_strong]:text-cream",
          ].join(" ")}
        >
          {children}
        </div>
      </Container>
    </article>
  );
}
