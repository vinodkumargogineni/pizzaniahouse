export const site = {
  name: "Pizzania House",
  tagline: "Good Food · Good Mood",
  description:
    "Hand-tossed pizzas, loaded hoagies, and fresh food made from scratch every day. Pizzania House — Cranberry Township, with branches in Connellsville and Washington, PA.",
  url: "https://pizzaniahouse.com",
  email: "pizzaniahousepa@gmail.com",
  phoneDisplay: "(724) 772-6226",
  phoneHref: "+17247726226",
  // WhatsApp business number in full international format, digits only (no +, spaces, or dashes).
  whatsapp: "17247726226",
  whatsappDisplay: "+1 (724) 772-6226",
  social: {
    // Per-branch pages also live on each location object.
    instagram: "https://www.instagram.com/pizzania_house_cranberry/",
    facebook: "https://www.facebook.com/pizzaniahousecranberry/",
  },
  // Delivery-partner storefronts — replace "#" with the real store URLs.
  delivery: [
    { label: "Grubhub", href: "#" },
    { label: "Uber Eats", href: "#" },
    { label: "DoorDash", href: "#" },
  ],
  nav: [
    { label: "Menu", href: "/menu" },
    { label: "Locations", href: "/locations" },
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Catering", href: "/catering" },
    { label: "Contact", href: "/contact" },
  ],
};

export type NavItem = (typeof site.nav)[number];
