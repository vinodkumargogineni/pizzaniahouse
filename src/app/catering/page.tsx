import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { JsonLd } from "@/components/JsonLd";
import { waLink, bookingMessage } from "@/lib/whatsapp";
import { faqSchema } from "@/lib/schema";
import { cateringPackages, faqs } from "@/data/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Pizza Catering in Cranberry Township, PA",
  description:
    "Pizza and hoagie catering in Cranberry Township, PA for 10 to 400 people — office lunches, game days, parties and full buffets. Pickup or delivery from Pizzania House.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Catering"
        title={
          <>
            Feed the whole
            <br />
            <span className="text-ember">room</span>
          </>
        }
        intro="Drop-off trays or full on-site service. Give us a headcount and a date — we'll handle the rest."
      >
        <Button href="#quote">Request a quote</Button>
      </PageHero>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Packages" title="Pick a starting point" />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {cateringPackages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i}>
                <div
                  className={cn(
                    "card-hover flex h-full flex-col rounded-2xl border p-7",
                    pkg.featured
                      ? "border-ember/50 bg-ember/[0.06]"
                      : "border-cream/10 bg-ink-800",
                  )}
                >
                  {pkg.featured && (
                    <span className="mb-3 w-fit rounded-full bg-ember px-3 py-1 text-xs font-bold text-ink">
                      Most booked
                    </span>
                  )}
                  <h3 className="font-display text-2xl">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-cream/55">{pkg.serves}</p>
                  <p className="mt-4 font-display text-3xl text-ember">
                    {pkg.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex gap-2.5 text-cream/75">
                        <Check size={16} className="mt-0.5 shrink-0 text-ember" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#quote"
                    variant={pkg.featured ? "primary" : "outline"}
                    className="mt-7"
                  >
                    Start here
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="quote" className="scroll-mt-24 border-y border-cream/10 bg-ink-800 py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Request a quote"
            title={
              <>
                Tell us about
                <br />
                the <span className="text-ember">event</span>
              </>
            }
            intro="We reply within one business day. For anything inside 48 hours, message us on WhatsApp or call the shop directly."
          >
            <a
              href={waLink(bookingMessage("catering"))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-ink transition-all hover:brightness-105 hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={18} /> Book via WhatsApp
            </a>
          </SectionHeading>
          <Reveal delay={1}>
            <ContactForm variant="catering" />
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Good to know" title="Catering FAQ" />
          <div className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-cream">
                    {f.q}
                    <span className="text-ember transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
