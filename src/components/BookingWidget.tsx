"use client";

import { useState } from "react";
import { locations } from "@/data/locations";
import { waLink, bookingMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { cn } from "@/lib/cn";

const field =
  "w-full rounded-xl border border-cream/15 bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-ember focus:outline-none";

const openLocations = locations.filter((l) => l.status === "open");

export function BookingWidget({
  defaultLocation,
}: {
  defaultLocation?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    guests: "2",
    date: "",
    time: "",
    location: defaultLocation ?? openLocations[0]?.name ?? "",
    notes: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const message = bookingMessage("table", {
    Name: form.name,
    Guests: form.guests,
    Date: form.date,
    Time: form.time,
    Location: form.location,
    Notes: form.notes,
  });

  return (
    <div className="rounded-2xl border border-cream/10 bg-ink p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-ink">
          <WhatsAppIcon size={18} />
        </span>
        <div>
          <h3 className="font-display text-xl">Book a table on WhatsApp</h3>
          <p className="text-xs text-cream/50">
            Fill this in — we&apos;ll open a ready-to-send message.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
            className={field}
          />
          <select value={form.guests} onChange={set("guests")} className={cn(field, "text-cream/80")}>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
              <option key={n} value={n}>
                {n} {n === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input type="date" value={form.date} onChange={set("date")} className={cn(field, "text-cream/80")} />
          <input type="time" value={form.time} onChange={set("time")} className={cn(field, "text-cream/80")} />
        </div>
        {openLocations.length > 1 && (
          <select value={form.location} onChange={set("location")} className={cn(field, "text-cream/80")}>
            {openLocations.map((l) => (
              <option key={l.slug}>{l.name}</option>
            ))}
          </select>
        )}
        <textarea
          rows={2}
          placeholder="High chair, big group, allergy… (optional)"
          value={form.notes}
          onChange={set("notes")}
          className={field}
        />
        <a
          href={waLink(message)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-ink transition-all hover:brightness-105 hover:-translate-y-0.5"
        >
          <WhatsAppIcon size={18} /> Continue on WhatsApp
        </a>
        <p className="text-center text-[11px] text-cream/40">
          No app? It opens WhatsApp Web instead. Table held once we confirm.
        </p>
      </div>
    </div>
  );
}
