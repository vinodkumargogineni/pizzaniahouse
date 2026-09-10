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
    // TODO: add the street number — replace this line with the full street address.
    addressLine1: "Rochester Road",
    addressLine2: "",
    city: "Cranberry Township",
    region: "Pennsylvania",
    postal: "16066",
    phoneDisplay: "(724) 900-2177",
    phoneHref: "+17249002177",
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
      "Our flagship kitchen at 2620 Rochester Road — opened June 2025 and serving fresh pizza, hoagies, breakfast, and more all day.",
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
    // Live on DoorDash. TODO: confirm exact daily hours + a direct phone.
    status: "open",
    addressLine1: "1222 E Crawford Avenue",
    addressLine2: "",
    city: "Connellsville",
    region: "Pennsylvania",
    postal: "15425",
    phoneDisplay: "(724) 772-6226",
    phoneHref: "+17247726226",
    whatsapp: "17247726226",
    facebook: "https://www.facebook.com/PizzaniaHouseConnellsville/",
    lat: 40.0339249,
    lng: -79.5816698,
    mapQuery: "Pizzania House, 1222 E Crawford Ave, Connellsville, PA 15425",
    mapEmbed:
      "https://www.google.com/maps?q=40.0339249,-79.5816698&z=17&output=embed",
    blurb:
      "Our Connellsville branch at 1222 E Crawford Avenue — fresh pizza, hoagies, and wings for Fayette County, with delivery on the major apps.",
    hours: standardHours,
    features: ["Dine-in", "Takeout", "Delivery", "Catering"],
    orderLinks: [{ label: "Order on DoorDash", href: "#" }],
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
