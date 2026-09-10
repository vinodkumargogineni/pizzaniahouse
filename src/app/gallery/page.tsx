import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { CTASection } from "@/components/CTASection";
import { galleryItems } from "@/data/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look inside the Pizzania House kitchen — dough, griddle, and everything off the oven.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Straight off
            <br />
            the <span className="text-ember">oven</span>
          </>
        }
        intro="A taste of what's coming out of the kitchen. These are placeholders for now — the shop's own photos drop straight into this grid."
      />

      <section className="py-16">
        <Container>
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] md:grid-cols-4">
            {galleryItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i % 4}
                className={`overflow-hidden rounded-2xl border border-cream/10 ${item.span}`}
              >
                <Placeholder
                  label={item.title}
                  src={item.src}
                  hue={item.hue}
                  priority={i < 2}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
