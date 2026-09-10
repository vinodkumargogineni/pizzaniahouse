"use client";

import { useEffect, useState } from "react";
import type { Hours } from "@/data/locations";
import { nowEastern } from "@/lib/hours";
import { cn } from "@/lib/cn";

export function HoursList({
  hours,
  status,
}: {
  hours: Hours[];
  status: "open" | "coming-soon";
}) {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "open") return;
    // Wall-clock is an external source; resolve it after mount to avoid SSR skew.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(nowEastern().weekday);
  }, [status]);

  return (
    <ul className="mt-3 divide-y divide-cream/10 text-sm">
      {hours.map((h) => (
        <li
          key={h.day}
          className={cn(
            "flex justify-between py-2",
            h.day === today ? "font-semibold text-ember" : "text-cream/70",
          )}
        >
          <span>{h.day}</span>
          <span>{h.open}</span>
        </li>
      ))}
    </ul>
  );
}
