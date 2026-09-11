import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "80+", label: "Menu items" },
  { value: "7am", label: "Open from" },
  { value: "Fresh", label: "Dough daily" },
  { value: "2", label: "PA locations" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-ember/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-basil/15 blur-[130px]" />

      <Container className="relative grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-ink-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              Cranberry Township, PA
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-6 font-display text-6xl leading-[0.88] sm:text-7xl md:text-8xl">
              <span className="block">Good food</span>
              <span className="block text-ember">always</span>
              <span className="block">wins.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-dim">
              Hand-tossed pizzas, loaded hoagies, burgers, pastas and more —
              built to order, made fresh every day.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/menu">Explore the Menu</Button>
              <Button href="/locations" variant="outline">
                Order &amp; Directions
              </Button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl text-cream sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-cream/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={2} className="relative mx-auto aspect-square w-full max-w-md">
          <div className="animate-float-slow absolute inset-0 overflow-hidden rounded-full border-4 border-ink-700 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
            <Image
              src="/img/pizza-hero.jpg"
              alt="Pepperoni pizza fresh from the oven"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-0 rounded-2xl border border-cream/10 bg-ink-800/95 px-4 py-3 backdrop-blur-md">
            <p className="font-display text-lg text-ember-bright">The Pizzania</p>
            <p className="text-xs text-cream/70">hot honey · sausage · pepperoni</p>
          </div>
          <div className="absolute -right-2 top-6 rounded-2xl border border-cream/10 bg-ink-800/95 px-4 py-3 backdrop-blur-md">
            <p className="font-display text-lg text-cream">Fresh daily</p>
            <p className="text-xs text-cream/70">dough &amp; rolls, every morning</p>
          </div>
        </Reveal>
      </Container>

      <Link
        href="/menu"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/55 lg:flex"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-cream/40 to-transparent transition-all group-hover:h-14" />
      </Link>
    </section>
  );
}
