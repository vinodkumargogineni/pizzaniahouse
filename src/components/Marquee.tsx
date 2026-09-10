const items = [
  "Hand-tossed daily",
  "48-hour dough",
  "Shaved ribeye in-house",
  "Fresh subs, cooked to order",
  "Good Food · Good Mood",
  "Two neighborhood kitchens",
  "Catering for any crowd",
];

export function Marquee() {
  return (
    <div className="border-y border-cream/10 bg-ember py-3 text-ink">
      <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-[0.2em] sm:text-base"
          >
            {item}
            <span className="mx-6 text-ink/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
