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
  // Online ordering link. Every "Order" button on the site + the /order redirect
  // use this one value.
  //   NOW:   order.online (DoorDash storefront) — no marketplace commission on
  //          direct-link orders, but still a 3rd-party checkout.
  //   NEXT:  paste the Square Online store URL here (e.g.
  //          https://pizzaniahouse.square.site or order.pizzaniahouse.com)
  //          once the Square Online site is published. See docs/square-ordering-setup.md
  orderOnline: "https://order.online/store/-42456832/",
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
    {
      label: "Postmates",
      href: "https://postmates.com/store/pizzania-house-rochester-rd/ESbVpCnUWPSr8_Hq1ehFNw",
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
  // Local-SEO: neighborhoods and towns near the Cranberry Township kitchen.
  serviceAreas: [
    "Cranberry Township",
    "Seven Fields",
    "Mars",
    "Warrendale",
    "Wexford",
    "Zelienople",
    "Evans City",
    "Callery",
    "Gibsonia",
    "Butler County",
  ],
  cuisines: ["Pizza", "Cheesesteaks", "Hoagies", "Wings", "Pasta", "Breakfast"],
  metaKeywords: [
    "pizza Cranberry Township",
    "pizza near me",
    "best pizza Cranberry Twp PA",
    "pizza delivery Cranberry Township",
    "Philly cheesesteak Cranberry Township",
    "hoagies Cranberry PA",
    "wings Cranberry Township",
    "pizza catering Cranberry Township",
    "Pizzania House",
    "pizza Seven Fields",
    "pizza Mars PA",
    "pizza Wexford",
  ],
};

export type NavItem = (typeof site.nav)[number];
