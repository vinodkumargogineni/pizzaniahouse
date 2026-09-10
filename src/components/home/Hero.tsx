"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PizzaArt } from "@/components/PizzaArt";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "80+", label: "Menu items" },
  { value: "9am", label: "Open from" },
  { value: "Fresh", label: "Dough daily" },
  { value: "2", label: "PA locations" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-ember/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-basil/20 blur-[130px]" />

      <Container className="relative grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Cranberry Township, PA
          </motion.p>

          <h1 className="mt-6 font-display text-6xl leading-[0.88] sm:text-7xl md:text-8xl">
            {["Good food", "always", "wins."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.12 }}
                className="block"
              >
                {i === 1 ? <span className="text-ember">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-cream-dim"
          >
            Hand-tossed pizzas, loaded hoagies, burgers, pastas and more —
            built to order, made fresh every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/menu">Explore the Menu</Button>
            <Button href="/locations" variant="outline">
              Order &amp; Directions
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl text-cream sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-cream/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="animate-float-slow absolute inset-0 drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]">
            <PizzaArt />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-2 left-0 rounded-2xl border border-cream/10 bg-ink-800/90 px-4 py-3 backdrop-blur-md"
          >
            <p className="font-display text-lg text-ember">The Pizzania</p>
            <p className="text-xs text-cream/60">hot honey · sausage · pepperoni</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="absolute -right-2 top-6 rounded-2xl border border-cream/10 bg-ink-800/90 px-4 py-3 backdrop-blur-md"
          >
            <p className="font-display text-lg text-cream">Fresh daily</p>
            <p className="text-xs text-cream/60">dough &amp; rolls, every morning</p>
          </motion.div>
        </motion.div>
      </Container>

      <Link
        href="/menu"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/40 lg:flex"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-cream/40 to-transparent transition-all group-hover:h-14" />
      </Link>
    </section>
  );
}
