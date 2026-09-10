"use client";

import { useEffect, useState } from "react";
import type { Hours } from "@/data/locations";
import { openStatus, type OpenStatus } from "@/lib/hours";
import { cn } from "@/lib/cn";

/** Live "Open now / Closed" badge. Renders on the client so the status reflects
 * the real current time, not build time. */
export function OpenNow({
  hours,
  status,
  className,
  compact = false,
}: {
  hours: Hours[];
  status: "open" | "coming-soon";
  className?: string;
  compact?: boolean;
}) {
  const [s, setS] = useState<OpenStatus | null>(null);

  useEffect(() => {
    if (status !== "open") return;
    const tick = () => setS(openStatus(hours));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [hours, status]);

  if (status === "coming-soon") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full bg-ember/15 px-3 py-1 text-xs font-semibold text-ember",
          className,
        )}
      >
        Coming soon
      </span>
    );
  }

  if (!s) {
    return (
      <span
        className={cn(
          "inline-flex h-6 w-24 animate-pulse rounded-full bg-cream/10",
          className,
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        s.open ? "bg-basil/20 text-basil" : "bg-cream/10 text-cream/70",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          s.open ? "bg-basil" : "bg-cream/50",
        )}
      />
      {compact ? (s.open ? "Open now" : "Closed") : s.label}
    </span>
  );
}
