import type { ReactNode } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-cream/10 pb-16 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ember/12 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-basil/12 blur-[120px]" />
      <Container className="relative">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ember-bright">
            <span className="h-px w-10 bg-ember" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.92] sm:text-7xl md:text-8xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-dim">
              {intro}
            </p>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
