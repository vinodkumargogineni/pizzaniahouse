"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/data/site";
import { waLink, bookingMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const actions = [
  { label: "Book a table", msg: bookingMessage("table") },
  { label: "Place an order", msg: bookingMessage("order") },
  { label: "Catering quote", msg: bookingMessage("catering") },
];

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-64 overflow-hidden rounded-2xl border border-cream/10 bg-ink-800 shadow-2xl"
          >
            <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3 text-ink">
              <WhatsAppIcon size={22} />
              <div className="leading-tight">
                <p className="text-sm font-bold">Chat with Pizzania House</p>
                <p className="text-[11px] opacity-80">Typically replies in minutes</p>
              </div>
            </div>
            <ul className="p-2">
              {actions.map((a) => (
                <li key={a.label}>
                  <a
                    href={waLink(a.msg)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-cream/85 transition-colors hover:bg-cream/5 hover:text-cream"
                  >
                    {a.label}
                    <span className="text-[#25D366]">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="px-4 pb-3 text-[11px] text-cream/45">
              Opens WhatsApp · {site.whatsappDisplay}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shown && (
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label={open ? "Close WhatsApp menu" : "Open WhatsApp booking"}
            className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-ink shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)]"
          >
            {!open && (
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
            )}
            <span className="relative">
              {open ? <X size={24} /> : <WhatsAppIcon size={28} />}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
