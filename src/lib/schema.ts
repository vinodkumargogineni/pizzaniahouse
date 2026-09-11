import { site } from "@/data/site";
import { locations, type Location } from "@/data/locations";
import { openingHoursSpec } from "@/lib/hours";

const cuisine = ["Pizza", "American", "Sandwiches", "Italian", "Cheesesteaks"];
const images = [
  `${site.url}/opengraph-image`,
  `${site.url}/img/pizza-hero.jpg`,
  `${site.url}/img/pizza-specialty.jpg`,
  `${site.url}/img/hoagie-club.jpg`,
  `${site.url}/img/interior-tables.jpg`,
];

export function restaurantSchema(loc: Location) {
  const hasStreet = !loc.addressLine1.startsWith("TODO");
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/locations/${loc.slug}#restaurant`,
    name: `${site.name} — ${loc.name}`,
    url: `${site.url}/locations/${loc.slug}`,
    telephone: loc.phoneHref,
    email: site.email,
    servesCuisine: cuisine,
    priceRange: "$$",
    image: images,
    hasMenu: `${site.url}/menu`,
    menu: `${site.url}/menu`,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
    knowsLanguage: "en-US",
    isAcceptingReservations: loc.status === "open",
    areaServed: site.serviceAreas.map((a) => ({
      "@type": "City",
      name: a === "Butler County" ? a : `${a}, PA`,
    })),
    address: {
      "@type": "PostalAddress",
      ...(hasStreet ? { streetAddress: loc.addressLine1 } : {}),
      addressLocality: loc.city,
      addressRegion: loc.region,
      postalCode: loc.postal,
      addressCountry: "US",
    },
    ...(loc.lat && loc.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.lat,
            longitude: loc.lng,
          },
          hasMap: `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`,
        }
      : {}),
    ...(loc.status === "open"
      ? { openingHoursSpecification: openingHoursSpec(loc.hours) }
      : {}),
    ...(loc.facebook || loc.instagram
      ? { sameAs: [loc.facebook, loc.instagram].filter(Boolean) }
      : {}),
    acceptsReservations: "https://wa.me/" + site.whatsapp,
    parentOrganization: { "@id": `${site.url}#org` },
  };
}

export function organizationSchema() {
  const primary = locations[0];
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": `${site.url}#org`,
    name: site.name,
    alternateName: "Pizzania",
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "$$",
    servesCuisine: cuisine,
    image: images,
    logo: `${site.url}/apple-icon`,
    hasMenu: `${site.url}/menu`,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
    foundingDate: "2025-06",
    keywords: site.metaKeywords,
    sameAs: [
      site.social.instagram,
      site.social.facebook,
      ...locations.flatMap((l) => [l.facebook, l.instagram].filter(Boolean)),
      ...site.delivery.filter((d) => d.href.startsWith("http")).map((d) => d.href),
    ].filter((v, i, a) => v && a.indexOf(v) === i),
    areaServed: site.serviceAreas.map((a) => ({
      "@type": "City",
      name: a === "Butler County" ? a : `${a}, PA`,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: primary.addressLine1,
      addressLocality: primary.city,
      addressRegion: primary.region,
      postalCode: primary.postal,
      addressCountry: "US",
    },
    ...(primary.lat && primary.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: primary.lat,
            longitude: primary.lng,
          },
          hasMap: `https://www.google.com/maps/dir/?api=1&destination=${primary.lat},${primary.lng}`,
        }
      : {}),
    openingHoursSpecification: openingHoursSpec(primary.hours),
    department: locations.slice(1).map((l) => ({
      "@type": "Restaurant",
      name: `${site.name} — ${l.name}`,
      url: `${site.url}/locations/${l.slug}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}#org` },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
