export const site = {
  name: "Pizzania House",
  tagline: "Good Food · Good Mood",
  description:
    "Hand-tossed pizzas, loaded hoagies, and fresh food made from scratch every day. Pizzania House in Cranberry Township, PA — with a second location coming soon to Washington.",
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
  // Delivery-partner storefronts (Cranberry Township).
  delivery: [
    {
      label: "Uber Eats",
      href: "https://www.ubereats.com/store/pizzania-house-rochester-rd/ESbVpCnUWPSr8_Hq1ehFNw",
    },
    {
      label: "DoorDash",
      href: "https://www.doordash.com/store/pizzania-house-cranberry-township-42456832/",
    },
    // TODO: add the Grubhub storefront link if they have one.
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
