export type Hours = { day: string; open: string };

export type Location = {
  slug: string;
  name: string;
  status: "open" | "coming-soon";
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  postal: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  lat?: number;
  lng?: number;
  mapQuery: string;
  mapEmbed: string;
  blurb: string;
  hours: Hours[];
  features: string[];
  orderLinks: { label: string; href: string }[];
};

// TODO: confirm exact hours per branch. Estimated from public listings.
const standardHours: Hours[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((day) => ({ day, open: "9:00 AM – 10:00 PM" }));

const comingSoonHours: Hours[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((day) => ({ day, open: "Opening soon" }));

export const locations: Location[] = [
  {
    slug: "cranberry-township-pa",
    name: "Cranberry Township",
    status: "open",
    addressLine1: "2620 Rochester Road",
    addressLine2: "",
    city: "Cranberry Township",
    region: "Pennsylvania",
    postal: "16066",
    // NOTE: printed menu shows (724) 772-6226; a DoorDash listing shows
    // (724) 900-2177. Confirm which is the storefront line.
    phoneDisplay: "(724) 772-6226",
    phoneHref: "+17247726226",
    whatsapp: "17247726226",
    facebook: "https://www.facebook.com/pizzaniahousecranberry/",
    instagram: "https://www.instagram.com/pizzania_house_cranberry/",
    // Exact pin from the Google Maps listing for Pizzania House.
    lat: 40.6985847,
    lng: -80.1208054,
    mapQuery: "Pizzania House, 2620 Rochester Rd, Cranberry Township, PA 16066",
    mapEmbed:
      "https://www.google.com/maps?q=40.6985847,-80.1208054&z=17&output=embed",
    blurb:
      "Our kitchen at 2620 Rochester Road — opened June 2025, serving fresh pizza, hoagies, breakfast, and more all day.",
    hours: standardHours,
    features: ["Dine-in", "Takeout", "Curbside pickup", "Delivery", "Catering"],
    orderLinks: [
      { label: "Order Pickup", href: "#" },
      { label: "Order Delivery", href: "#" },
    ],
  },
  {
    slug: "washington-pa",
    name: "Washington",
    status: "coming-soon",
    addressLine1: "502 Washington Road",
    addressLine2: "",
    city: "Washington",
    region: "Pennsylvania",
    postal: "15301",
    phoneDisplay: "(724) 772-6226",
    phoneHref: "+17247726226",
    whatsapp: "17247726226",
    facebook: "https://www.facebook.com/pizzaniahousewashington/",
    lat: 40.1904918,
    lng: -80.2125217,
    mapQuery: "502 Washington Road, Washington, PA 15301",
    mapEmbed:
      "https://www.google.com/maps?q=40.1904918,-80.2125217&z=17&output=embed",
    blurb:
      "Opening soon at 502 Washington Road (the former Subway in South Strabane) — same dough, same ovens, same Good Food · Good Mood. Confirm the phone and hours, then flip status to \"open\" in src/data/locations.ts.",
    hours: comingSoonHours,
    features: ["Dine-in", "Takeout", "Delivery", "Catering"],
    orderLinks: [],
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
