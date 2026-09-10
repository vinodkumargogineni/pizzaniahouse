import type { Hours } from "@/data/locations";

/** Parse "11:00 AM – 10:00 PM" into minutes-from-midnight. `close` may exceed
 * 1440 when the range runs past midnight. Returns null for non-time strings
 * like "Opening soon". */
export function parseRange(s: string): { open: number; close: number } | null {
  const m = s.match(
    /(\d{1,2}):(\d{2})\s*(AM|PM)\s*[–—-]\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i,
  );
  if (!m) return null;
  const to24 = (h: string, mm: string, ap: string) => {
    let hr = Number(h) % 12;
    if (/pm/i.test(ap)) hr += 12;
    return hr * 60 + Number(mm);
  };
  const open = to24(m[1], m[2], m[3]);
  let close = to24(m[4], m[5], m[6]);
  if (close <= open) close += 1440;
  return { open, close };
}

export function formatMinutes(mins: number): string {
  const m = ((mins % 1440) + 1440) % 1440;
  let h = Math.floor(m / 60);
  const mm = m % 60;
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(mm).padStart(2, "0")} ${ap}`;
}

/** Current weekday + minutes-from-midnight in America/New_York. */
export function nowEastern(): { weekday: string; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0") % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return { weekday, minutes: hour * 60 + minute };
}

export type OpenStatus = { open: boolean; label: string };

/** Live open/closed status for a Monday-first hours list, evaluated in ET. */
export function openStatus(hours: Hours[]): OpenStatus {
  const { weekday, minutes } = nowEastern();
  const todayIdx = hours.findIndex((h) => h.day === weekday);
  if (todayIdx === -1) return { open: false, label: "Hours vary" };

  // Yesterday's range that spilled past midnight into now.
  const yest = parseRange(hours[(todayIdx + 6) % 7].open);
  if (yest && yest.close > 1440 && minutes < yest.close - 1440) {
    return { open: true, label: `Open · closes ${formatMinutes(yest.close)}` };
  }

  const today = parseRange(hours[todayIdx].open);
  if (today) {
    if (minutes < today.open) {
      return { open: false, label: `Closed · opens ${formatMinutes(today.open)}` };
    }
    if (minutes < today.close) {
      return { open: true, label: `Open · closes ${formatMinutes(today.close)}` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = hours[(todayIdx + i) % 7];
    const r = parseRange(next.open);
    if (r) {
      return {
        open: false,
        label:
          i === 1
            ? `Closed · opens ${formatMinutes(r.open)} tomorrow`
            : `Closed · opens ${next.day}`,
      };
    }
  }
  return { open: false, label: "Closed" };
}

const hhmm = (mins: number) => {
  const m = ((mins % 1440) + 1440) % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
};

const ABBR: Record<string, string> = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

const compactTime = (s: string) =>
  s
    .replace(/:00/g, "")
    .replace(/\s*–\s*/, "–")
    .replace(/\s(AM|PM)/g, (_, ap) => ap.toLowerCase());

/** One-line hours summary, grouping consecutive days with the same hours:
 *  "Mon–Sat 7am–8pm · Sun closed". */
export function hoursSummary(hours: Hours[]): string {
  const groups: { start: string; end: string; open: string }[] = [];
  for (const h of hours) {
    const last = groups[groups.length - 1];
    if (last && last.open === h.open) last.end = h.day;
    else groups.push({ start: h.day, end: h.day, open: h.open });
  }
  return groups
    .map((g) => {
      const days =
        g.start === g.end
          ? ABBR[g.start]
          : `${ABBR[g.start]}–${ABBR[g.end]}`;
      const val = /[0-9]/.test(g.open) ? compactTime(g.open) : g.open.toLowerCase();
      return `${days} ${val}`;
    })
    .join(" · ");
}

/** Schema.org openingHoursSpecification from a Monday-first hours list. */
export function openingHoursSpec(hours: Hours[]) {
  return hours.flatMap((h) => {
    const r = parseRange(h.open);
    if (!r) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${h.day}`,
        opens: hhmm(r.open),
        closes: hhmm(r.close),
      },
    ];
  });
}
