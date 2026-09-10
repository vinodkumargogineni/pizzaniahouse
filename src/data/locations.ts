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

const cranberryHours: Hours[] = [
  { day: "Monday", open: "7:00 AM – 8:00 PM" },
  { day: "Tuesday", open: "7:00 AM – 8:00 PM" },
  { day: "Wednesday", open: "7:00 AM – 8:00 PM" },
  { day: "Thursday", open: "7:00 AM – 8:00 PM" },
  { day: "Friday", open: "7:00 AM – 8:00 PM" },
  { day: "Saturday", open: "7:00 AM – 8:00 PM" },
  { day: "Sunday", open: "Closed" },
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
    addressLine1: "2620 Rochester Road",
    addressLine2: "",
    city: "Cranberry Township",
    region: "Pennsylvania",
    postal: "16066",
    phoneDisplay: "(724) 772-6226",
    phoneHref: "+17247726226",
    whatsapp: "17247726226",
    facebook: "https://www.facebook.com/pizzaniahousecranberry/",
    instagram: "https://www.instagram.com/pizzania_house_cranberry/",
    // Exact pin from the Google Maps listing for Pizzania House.
    lat: 40.6985847,
    lng: -80.1208054,
    mapQuery: "Pizzania House, 2620 Rochester Rd, Cranberry Township, PA 16066",
    // Official Google Maps place embed (shows the Pizzania House pin + label).
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.882530527094!2d-80.1208054!3d40.6985847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88347dd5cd0b74fb%3A0x5735deead0812184!2sPizzania%20House!5e0!3m2!1sen!2sus!4v1789077982059!5m2!1sen!2sus",
    blurb:
      "Our kitchen at 2620 Rochester Road — opened June 2025, serving fresh pizza, hoagies, breakfast, and more from 7 AM.",
    hours: cranberryHours,
    features: ["Dine-in", "Takeout", "Curbside pickup", "Delivery", "Catering"],
    orderLinks: [
      { label: "Order online", href: "https://order.online/store/-42456832/" },
      {
        label: "Uber Eats",
        href: "https://www.ubereats.com/store/pizzania-house-rochester-rd/ESbVpCnUWPSr8_Hq1ehFNw",
      },
      {
        label: "DoorDash",
        href: "https://www.doordash.com/store/pizzania-house-cranberry-township-42456832/",
      },
      {
        label: "Postmates",
        href: "https://postmates.com/store/pizzania-house-rochester-rd/ESbVpCnUWPSr8_Hq1ehFNw",
      },
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
