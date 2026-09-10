import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { BookingWidget } from "@/components/BookingWidget";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions, feedback, press, or a big order — reach the Pizzania House team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say <span className="text-ember">hello</span>
          </>
        }
        intro="Feedback, a lost-and-found jacket, a press question, or a giant order — this reaches the whole team."
      />

      <section className="border-b border-cream/10 py-16">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Reservations"
            title={
              <>
                Book in
                <br />
                <span className="text-ember">seconds</span>
              </>
            }
            intro="Reserve a table straight through WhatsApp — no account, no wait. We confirm by reply."
          />
          <Reveal delay={1}>
            <BookingWidget />
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-cream/10 bg-ink-800 p-6">
                <h2 className="font-display text-xl">Direct lines</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="inline-flex items-center gap-2.5 text-cream/80 hover:text-ember"
                    >
                      <Phone size={15} className="text-ember" />
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2.5 text-cream/80 hover:text-ember"
                    >
                      <Mail size={15} className="text-ember" />
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i + 1}>
                <div className="rounded-2xl border border-cream/10 bg-ink-800 p-6">
                  <h2 className="font-display text-xl">{loc.name}</h2>
                  <ul className="mt-4 space-y-3 text-sm text-cream/75">
                    <li className="flex gap-2.5">
                      <MapPin size={15} className="mt-0.5 shrink-0 text-ember" />
                      {loc.addressLine1}, {loc.city}, {loc.region} {loc.postal}
                    </li>
                    <li className="flex gap-2.5">
                      <Clock size={15} className="mt-0.5 shrink-0 text-ember" />
                      {loc.status === "open"
                        ? "Mon–Thu 11a–10p · Fri–Sat 11a–12a · Sun 12–9p"
                        : "Opening 2026"}
                    </li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1}>
            <ContactForm variant="contact" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
