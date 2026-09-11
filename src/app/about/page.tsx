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
    "Pizzania House — from-scratch pizza, hoagies, and more in Cranberry Township, PA, with a second location coming to Washington.",
};

export default function AboutPage() {
  return (
    <>
      {/* TODO: replace the copy below with the owners' real founding story. */}
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Fresh dough,
            <br />
            <span className="text-ember">bold</span> flavor
          </>
        }
        intro="Pizzania House opened in Cranberry Township in 2025 — a big menu of pizza, hoagies, wings, and breakfast, all made from scratch. A second location is on the way in Washington."
      />

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-cream/10">
              <div className="aspect-[4/5]">
                <Placeholder
                  label="Inside the Cranberry Township kitchen"
                  src="/img/interior-tables.jpg"
                  priority
                  hue={18}
                />
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
                  It started with one kitchen in Cranberry Township and a simple
                  idea: a big menu where everything is actually made in the shop
                  — dough, sauces, and every sandwich built to order.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  Word got around fast. A second location is now on the way in
                  Washington, and the plan is the same there: keep every item on
                  the menu to the same standard.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p>
                  Pizza, cheesesteaks, hoagies, wings, pasta, breakfast, and
                  catering for any crowd — Good Food, Good Mood, wherever you
                  find us.
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
              <Reveal key={i} delay={i} as="li">
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
                  <span className="font-display text-4xl text-ember/70">
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
