import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { OpenNow } from "@/components/OpenNow";
import { HoursList } from "@/components/HoursList";
import { JsonLd } from "@/components/JsonLd";
import { locations, getLocation } from "@/data/locations";
import { waLink, bookingMessage } from "@/lib/whatsapp";
import { restaurantSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return { title: "Location not found" };
  return {
    title: `${loc.name} — ${loc.city}, ${loc.region}`,
    description: loc.blurb,
  };
}

export default async function LocationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  return (
    <>
      <JsonLd
        data={[
          restaurantSchema(loc),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: loc.name, path: `/locations/${loc.slug}` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden border-b border-cream/10 pb-12 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ember/12 blur-[120px]" />
        <Container className="relative">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-ember"
          >
            <ArrowLeft size={15} /> All locations
          </Link>
          <Reveal>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h1 className="font-display text-5xl leading-[0.95] sm:text-7xl">
                {loc.name}
              </h1>
              <OpenNow hours={loc.hours} status={loc.status} />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 max-w-2xl text-lg text-cream-dim">{loc.blurb}</p>
          </Reveal>
          {loc.orderLinks.length > 0 && (
            <Reveal delay={2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {loc.orderLinks.map((o, i) => (
                  <Button
                    key={o.label}
                    href={o.href}
                    variant={i === 0 ? "primary" : "outline"}
                  >
                    {o.label}
                  </Button>
                ))}
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-cream/10 bg-ink-800 p-6">
                <h2 className="flex items-center gap-2 font-display text-xl">
                  <MapPin size={18} className="text-ember" /> Address
                </h2>
                <p className="mt-3 text-cream/80">
                  {loc.addressLine1.startsWith("TODO") ? (
                    <span className="text-cream/50">
                      Full address coming soon.
                    </span>
                  ) : (
                    <>
                      {loc.addressLine1}
                      {loc.addressLine2 && (
                        <>
                          <br />
                          {loc.addressLine2}
                        </>
                      )}
                    </>
                  )}
                  <br />
                  {loc.city}, {loc.region} {loc.postal}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    loc.lat && loc.lng ? `${loc.lat},${loc.lng}` : loc.mapQuery,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ember hover:underline"
                >
                  <Navigation size={14} /> Get directions
                </a>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="rounded-2xl border border-cream/10 bg-ink-800 p-6">
                <h2 className="flex items-center gap-2 font-display text-xl">
                  <Phone size={18} className="text-ember" /> Contact
                </h2>
                <a
                  href={`tel:${loc.phoneHref}`}
                  className="mt-3 block text-cream/80 hover:text-ember"
                >
                  {loc.phoneDisplay}
                </a>
                {(loc.facebook || loc.instagram) && (
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {loc.facebook && (
                      <a
                        href={loc.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cream/60 hover:text-ember"
                      >
                        Facebook →
                      </a>
                    )}
                    {loc.instagram && (
                      <a
                        href={loc.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cream/60 hover:text-ember"
                      >
                        Instagram →
                      </a>
                    )}
                  </div>
                )}
                {loc.status === "open" && (
                  <a
                    href={waLink(
                      bookingMessage("table", { Location: loc.name }),
                      loc.whatsapp,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-ink transition-all hover:brightness-105 hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon size={16} /> Book a table on WhatsApp
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="rounded-2xl border border-cream/10 bg-ink-800 p-6">
                <h2 className="flex items-center gap-2 font-display text-xl">
                  <Clock size={18} className="text-ember" /> Hours
                </h2>
                <HoursList hours={loc.hours} status={loc.status} />
                <div className="mt-3 flex flex-wrap gap-2 pt-3">
                  {loc.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="h-full min-h-96 overflow-hidden rounded-2xl border border-cream/10">
              <iframe
                title={`Map to ${loc.name}`}
                src={loc.mapEmbed}
                className="h-full min-h-96 w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
