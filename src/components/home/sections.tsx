import Link from "next/link";
import { ArrowUpRight, MapPin, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { OpenNow } from "@/components/OpenNow";
import { Button } from "@/components/ui/Button";
import { menu } from "@/data/menu";
import { locations } from "@/data/locations";
import { values, testimonials } from "@/data/content";

/* ---------------- The spread ---------------- */

export function TheSpread() {
  const featured = menu.slice(0, 4);
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The spread"
            title={
              <>
                Four corners of the
                <br />
                <span className="text-ember">Pizzania</span> menu
              </>
            }
          />
          <Reveal>
            <Button href="/menu" variant="outline">
              Full menu <ArrowUpRight size={16} />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cat, i) => (
            <Reveal key={cat.slug} delay={i}>
              <Link
                href={`/menu#${cat.slug}`}
                className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-ink-800"
              >
                <div className="aspect-[4/3]">
                  <Placeholder label={cat.title} src={cat.image} hue={12 + i * 8} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl text-cream group-hover:text-ember">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {cat.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-ember">
                    View items <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Signature build ---------------- */

const builds = [
  {
    name: "Philly Steak Hoagie",
    copy: "Philly steak, grilled onions, mushrooms, green peppers and provolone on a fresh roll. 8\" $8.99 · 12\" $12.99.",
    src: "/img/hoagie-club.jpg",
  },
  {
    name: "Specialty Pizzas",
    copy: "Fourteen loaded pies — Meat Lovers, Buffalo Chicken, Honey Mustard Magic and more. Medium from $15.99.",
    src: "/img/pizza-slice-hand.jpg",
  },
  {
    name: "Chicken Wings & Sides",
    copy: "Wings, loaded fries, mozzarella-style bites, breaded shrimp — everything you want alongside a pie.",
    src: "/img/wings.jpg",
  },
];

export function SignatureBuild() {
  return (
    <section className="relative overflow-hidden border-y border-cream/10 bg-ink-800 py-24">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" />
      <Container className="relative">
        <SectionHeading
          eyebrow="House favorites"
          align="center"
          title={
            <>
              What people
              <br />
              come <span className="text-ember">back for</span>
            </>
          }
          intro="Cooked to order — griddled hoagies, deck-oven pizzas, and sides worth the trip."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {builds.map((b, i) => (
            <Reveal key={b.name} delay={i}>
              <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-ink">
                <div className="aspect-[3/2]">
                  <Placeholder label={b.name} src={b.src} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/65">
                    {b.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Values ---------------- */

export function Values() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Why it tastes better"
            title={
              <>
                We didn&apos;t cut
                <br />
                the <span className="text-ember">corners</span>
              </>
            }
            intro="Every shortcut a busy kitchen could take, we decided not to. It costs us time. It's the whole point."
          />
          <div className="grid gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i}>
                <div className="card-hover flex gap-5 rounded-2xl border border-cream/10 bg-ink-800 p-6">
                  <span className="font-display text-3xl text-ember/40">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Locations preview ---------------- */

export function LocationsPreview() {
  return (
    <section className="border-y border-cream/10 bg-ink-800 py-24">
      <Container>
        <SectionHeading
          eyebrow="Come see us"
          title={
            <>
              Come see
              <br />
              us in <span className="text-ember">Cranberry</span>
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i}>
              <Link
                href={`/locations/${loc.slug}`}
                className="card-hover group block overflow-hidden rounded-2xl border border-cream/10 bg-ink"
              >
                <div className="aspect-[16/9]">
                  <Placeholder
                    label={`${loc.city}, ${loc.region}`}
                    src={loc.image}
                    hue={[20, 150, 265][i] ?? 20}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-2xl group-hover:text-ember">
                      {loc.name}
                    </h3>
                    <OpenNow
                      hours={loc.hours}
                      status={loc.status}
                      compact
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-cream/65">
                    <li className="flex items-center gap-2">
                      <MapPin size={14} className="text-ember" />
                      {loc.addressLine1.startsWith("TODO")
                        ? `${loc.city}, ${loc.region}`
                        : `${loc.addressLine1}, ${loc.city}`}
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck size={14} className="text-ember" />
                      {loc.features.includes("Delivery")
                        ? "Pickup & delivery"
                        : "Pickup"}
                    </li>
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Word of mouth"
          align="center"
          title={
            <>
              The neighborhood
              <br />
              <span className="text-ember">talks</span>
            </>
          }
        />
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-2 [&>*]:mb-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 2}>
              <figure className="card-hover break-inside-avoid rounded-2xl border border-cream/10 bg-ink-800 p-7">
                <div className="font-display text-4xl leading-none text-ember">
                  &ldquo;
                </div>
                <blockquote className="mt-2 text-lg leading-relaxed text-cream/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-cream">{t.name}</span>
                  <span className="text-cream/50"> — {t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
