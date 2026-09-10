import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { CTASection } from "@/components/CTASection";
import { OpenNow } from "@/components/OpenNow";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find Pizzania House in Cranberry Township, PA — with a second location coming soon to Washington.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title={
          <>
            Find your
            <br />
            <span className="text-ember">Pizzania</span>
          </>
        }
        intro="Our kitchen in Cranberry Township, with a second location coming soon to Washington. Same dough, same ovens, same Good Food · Good Mood."
      />

      <section className="py-16">
        <Container className="space-y-8">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i}>
              <article className="card-hover grid overflow-hidden rounded-3xl border border-cream/10 bg-ink-800 lg:grid-cols-2">
                <div className="min-h-64 lg:min-h-full">
                  <Placeholder
                    label={`${loc.city}, ${loc.region}`}
                    hue={i === 0 ? 20 : 205}
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-3xl">{loc.name}</h2>
                    <OpenNow hours={loc.hours} status={loc.status} />
                  </div>
                  <p className="mt-4 text-cream/65">{loc.blurb}</p>

                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex gap-3">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-ember" />
                      <dd className="text-cream/80">
                        {!loc.addressLine1.startsWith("TODO") && (
                          <>
                            {loc.addressLine1}
                            {loc.addressLine2 && <>, {loc.addressLine2}</>}
                            <br />
                          </>
                        )}
                        {loc.city}, {loc.region} {loc.postal}
                      </dd>
                    </div>
                    <div className="flex gap-3">
                      <Phone size={16} className="mt-0.5 shrink-0 text-ember" />
                      <dd>
                        <a
                          href={`tel:${loc.phoneHref}`}
                          className="text-cream/80 hover:text-ember"
                        >
                          {loc.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {loc.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/70"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/locations/${loc.slug}`}
                    className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-ember-bright hover:-translate-y-0.5"
                  >
                    Hours &amp; directions <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
