import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { CTASection } from "@/components/CTASection";
import { timeline, values } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How two friends, one used deck oven, and a family sauce recipe grew into Pizzania House.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Started with one
            <br />
            oven and a <span className="text-ember">recipe</span>
          </>
        }
        intro="Pizzania House began in 2016 as a 12-seat shop in Cranberry Township. The dough recipe hasn't changed. Neither has the reason we do it."
      />

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-cream/10">
              <div className="aspect-[4/5]">
                <Placeholder label="The original Cranberry Township counter" hue={18} />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The short version"
              title={
                <>
                  Good food,
                  <br />
                  good <span className="text-ember">mood</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-cream-dim">
              <Reveal delay={1}>
                <p>
                  Sal and Mike met working the line at a pizzeria that has since
                  closed. They kept saying they&apos;d do it differently — better
                  dough, better meat, a place that felt like the neighborhood
                  owned it.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  In 2016 they scraped together enough for a used deck oven and a
                  narrow storefront. Sal&apos;s grandmother handed over the sauce
                  recipe on one condition: don&apos;t rush it.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p>
                  Ten years later there&apos;s a second kitchen on the way and a
                  catering line that never stops ringing — but the dough still
                  proofs for two days, and someone still answers the phone.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-cream/10 bg-ink-800 py-24">
        <Container>
          <SectionHeading eyebrow="How we got here" title="The timeline" />
          <ol className="mt-14 space-y-0">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i} as="li">
                <div className="grid gap-4 border-t border-cream/10 py-8 md:grid-cols-[140px_1fr]">
                  <span className="font-display text-3xl text-ember">
                    {t.year}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl">{t.title}</h3>
                    <p className="mt-2 max-w-2xl text-cream/65">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand on"
            align="center"
            title="Three rules we don't break"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i}>
                <div className="card-hover h-full rounded-2xl border border-cream/10 bg-ink-800 p-7">
                  <span className="font-display text-4xl text-ember/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
