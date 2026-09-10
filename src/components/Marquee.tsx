const items = [
  "Hand-tossed pizza",
  "Dough made in-house",
  "Griddled hoagies",
  "Cooked to order",
  "Good Food · Good Mood",
  "Breakfast from 7 AM",
  "Catering for any crowd",
  "80+ menu items",
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
