import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { combos } from "@/data/menu";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Pizzas, specialty pizzas, hoagies, burgers, pastas, rice & noodles, breakfast, appetizers, and combo deals at Pizzania House.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The menu"
        title={
          <>
            Everything&apos;s made
            <br />
            from <span className="text-ember">scratch</span>
          </>
        }
        intro="Prices are subject to change and may vary slightly by location. Ask the counter about daily specials."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={site.orderOnline}>Order online</Button>
          <Button href="#menu-top" variant="outline">
            Browse the menu
          </Button>
          <Button href="#combos" variant="outline">
            Combo offers
          </Button>
        </div>
      </PageHero>

      <MenuExplorer />

      <section id="combos" className="scroll-mt-24 border-t border-cream/10 bg-ink-800 py-24">
        <Container>
          <SectionHeading
            eyebrow="Combo offers"
            title="Bundle it, save on it"
            intro="Every combo comes with a drink. Mix and match to feed one or feed the table."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {combos.map((c, i) => (
              <Reveal key={c.name} delay={i % 3}>
                <div className="card-hover flex h-full flex-col rounded-2xl border border-cream/10 bg-ink p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <span className="shrink-0 rounded-full bg-ember px-3 py-1 text-sm font-bold text-ink">
                      {c.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {c.includes}
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
