"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { locations } from "@/data/locations";

const field =
  "w-full rounded-xl border border-cream/15 bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-ember focus:outline-none";

export function ContactForm({
  variant = "contact",
}: {
  variant?: "contact" | "catering";
}) {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-2xl border border-cream/10 bg-ink p-6 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <CheckCircle2 className="text-ember" size={40} />
            <h3 className="mt-4 font-display text-2xl">Got it — thank you</h3>
            <p className="mt-2 max-w-sm text-sm text-cream/60">
              This demo form doesn&apos;t send anywhere yet. Wire it to your
              email service or CRM and it&apos;s ready to go.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-semibold text-ember hover:underline"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Name" aria-label="Your name" className={field} />
              <input
                required
                type="email"
                placeholder="Email"
                aria-label="Your email address"
                className={field}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Phone" aria-label="Your phone number" className={field} />
              {variant === "catering" ? (
                <input
                  type="date"
                  aria-label="Event date"
                  className={cn(field, "text-cream/70")}
                />
              ) : (
                <select
                  aria-label="Which location or topic"
                  className={cn(field, "text-cream/70")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Which location?
                  </option>
                  {locations.map((l) => (
                    <option key={l.slug}>
                      {l.name}
                      {l.status === "coming-soon" ? " (coming soon)" : ""}
                    </option>
                  ))}
                  <option>General question</option>
                </select>
              )}
            </div>
            {variant === "catering" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Headcount" aria-label="Approximate headcount" className={field} />
                <input
                  placeholder="Event type (office, party…)"
                  aria-label="Event type"
                  className={field}
                />
              </div>
            )}
            <textarea
              required
              rows={4}
              aria-label={variant === "catering" ? "Details about your event" : "Your message"}
              placeholder={
                variant === "catering"
                  ? "Tell us what you're thinking — menu, budget, delivery vs. on-site…"
                  : "Your message"
              }
              className={field}
            />
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-ember-bright hover:-translate-y-0.5"
            >
              {variant === "catering" ? "Request quote" : "Send message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
