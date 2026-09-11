"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menu, tagLabels } from "@/data/menu";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const filters = [
  { id: "all", label: "Everything" },
  { id: "popular", label: "Fan favorites" },
  { id: "veg", label: "Vegetarian" },
  { id: "spicy", label: "Spicy" },
  { id: "new", label: "New" },
];

const tagStyle: Record<string, string> = {
  veg: "bg-basil/20 text-basil",
  spicy: "bg-ember/20 text-ember",
  new: "bg-cream/15 text-cream",
  popular: "bg-ember/15 text-ember-soft",
};

export function MenuExplorer() {
  const [active, setActive] = useState("all");

  const categories = useMemo(() => {
    if (active === "all") return menu;
    return menu
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => it.tags?.includes(active as never)),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [active]);

  return (
    <section id="menu-top" className="scroll-mt-24 py-16">
      <Container>
        <div className="sticky top-16 z-30 -mx-5 mb-12 border-y border-cream/10 bg-ink/85 px-5 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-full sm:border sm:px-3">
          <div
            className="flex gap-2 overflow-x-auto"
            role="group"
            aria-label="Filter the menu"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                aria-pressed={active === f.id}
                className={cn(
                  "relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === f.id
                    ? "text-ink"
                    : "text-cream/70 hover:text-cream",
                )}
              >
                {active === f.id && (
                  <motion.span
                    layoutId="menu-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-ember"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-20"
            >
              {categories.map((cat) => (
                <div key={cat.slug} id={cat.slug} className="scroll-mt-40">
                  <div className="flex flex-col gap-2 border-b border-cream/10 pb-5">
                    <div className="flex items-center gap-4">
                      {cat.image && (
                        <span className="relative hidden h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-cream/10 sm:block">
                          <Image
                            src={cat.image}
                            alt=""
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </span>
                      )}
                      <h2 className="font-display text-3xl sm:text-4xl">
                        {cat.title}
                      </h2>
                    </div>
                    {cat.blurb && (
                      <p className="max-w-xl text-sm text-cream/60">
                        {cat.blurb}
                      </p>
                    )}
                    {cat.priceTiers && (
                      <div className="mt-1 flex flex-wrap gap-2">
                        {cat.priceTiers.map((t) => (
                          <span
                            key={t.label}
                            className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/75"
                          >
                            {t.label}{" "}
                            <span className="font-semibold text-ember">
                              {t.price}
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                    {cat.note && (
                      <p className="text-xs text-cream/60">{cat.note}</p>
                    )}
                  </div>

                  <ul className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item.name} className="group">
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-semibold text-cream">
                            {item.name}
                          </h3>
                          {item.price && (
                            <>
                              <span className="h-px flex-1 translate-y-[-2px] bg-cream/15" />
                              <span className="font-display text-lg text-ember">
                                {item.price}
                                {item.priceAlt && (
                                  <span className="ml-1 text-sm text-cream/60">
                                    / {item.priceAlt}
                                  </span>
                                )}
                              </span>
                            </>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1.5 text-sm leading-relaxed text-cream/55">
                            {item.description}
                          </p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className={cn(
                                  "rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                                  tagStyle[tag],
                                )}
                              >
                                {tagLabels[tag]}
                              </span>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
