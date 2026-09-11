import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { waLink, bookingMessage } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(242,103,34,0.1),transparent)]" />
      <Container className="relative">
        <div className="card-hover relative overflow-hidden rounded-[2rem] border border-cream/10 bg-ink-800 p-10 text-center sm:p-16">
          <div className="bg-grain pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" />
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember-bright">
              Hungry yet?
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-[0.95] sm:text-6xl">
              Good food <span className="text-ember">always</span> wins.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-lg text-cream-dim">
              Order ahead for pickup, get it delivered, or bring the whole crew
              in. We&apos;ll have the oven hot.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink(bookingMessage("table"))}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-ink transition-all hover:brightness-105 hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={18} /> Book on WhatsApp
              </a>
              <Button href="/menu#menu-top" variant="outline">
                See the Menu
              </Button>
              <Button href="/locations" variant="outline">
                Find a Location
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
