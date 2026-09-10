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
  lat?: number;
  lng?: number;
  mapQuery: string;
  mapEmbed: string;
  blurb: string;
  hours: Hours[];
  features: string[];
  orderLinks: { label: string; href: string }[];
};

const standardHours: Hours[] = [
  { day: "Monday", open: "11:00 AM – 10:00 PM" },
  { day: "Tuesday", open: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", open: "11:00 AM – 10:00 PM" },
  { day: "Thursday", open: "11:00 AM – 10:00 PM" },
  { day: "Friday", open: "11:00 AM – 12:00 AM" },
  { day: "Saturday", open: "11:00 AM – 12:00 AM" },
  { day: "Sunday", open: "12:00 PM – 9:00 PM" },
];

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
    // TODO: add the street number — replace this line with the full street address.
    addressLine1: "Rochester Road",
    addressLine2: "",
    city: "Cranberry Township",
    region: "Pennsylvania",
    postal: "16066",
    phoneDisplay: "(724) 772-6226",
    phoneHref: "+17247726226",
    whatsapp: "17247726226",
    // Exact pin from the Google Maps listing for Pizzania House.
    lat: 40.6985847,
    lng: -80.1208054,
    mapQuery: "Pizzania House, 2620 Rochester Rd, Cranberry Township, PA 16066",
    mapEmbed:
      "https://www.google.com/maps?q=40.6985847,-80.1208054&z=17&output=embed",
    blurb:
      "Our main kitchen at 2620 Rochester Road — the ovens, the recipes, and the counter that's been feeding the neighborhood since day one.",
    hours: standardHours,
    features: ["Dine-in", "Takeout", "Curbside pickup", "Delivery", "Catering"],
    orderLinks: [
      { label: "Order Pickup", href: "#" },
      { label: "Order Delivery", href: "#" },
    ],
  },
  {
    slug: "connellsville-pa",
    name: "Connellsville",
    status: "coming-soon",
    // TODO: add the Connellsville street address, ZIP, phone, hours, and map coordinates.
    addressLine1: "TODO — Connellsville street address",
    addressLine2: "",
    city: "Connellsville",
    region: "Pennsylvania",
    postal: "15425",
    phoneDisplay: "(724) 772-6226",
    phoneHref: "+17247726226",
    whatsapp: "17247726226",
    mapQuery: "Connellsville, PA",
    mapEmbed: "https://www.google.com/maps?q=Connellsville,+PA&z=13&output=embed",
    blurb:
      "A Pizzania House branch in Connellsville. Address, hours, and map are placeholders — swap in the real details in src/data/locations.ts.",
    hours: comingSoonHours,
    features: ["Dine-in", "Takeout", "Delivery", "Catering"],
    orderLinks: [],
  },
  {
    slug: "washington-pa",
    name: "Washington Road",
    status: "coming-soon",
    addressLine1: "502 Washington Road",
    addressLine2: "",
    city: "Washington",
    region: "Pennsylvania",
    postal: "15301",
    phoneDisplay: "(724) 772-6226",
    phoneHref: "+17247726226",
    whatsapp: "17247726226",
    lat: 40.1904918,
    lng: -80.2125217,
    mapQuery: "502 Washington Road, Washington, PA 15301",
    mapEmbed:
      "https://www.google.com/maps?q=40.1904918,-80.2125217&z=17&output=embed",
    blurb:
      "Our Washington Road branch at 502 Washington Road. Confirm the phone and hours below, then flip status to \"open\" in src/data/locations.ts.",
    hours: comingSoonHours,
    features: ["Dine-in", "Takeout", "Delivery", "Catering"],
    orderLinks: [],
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
