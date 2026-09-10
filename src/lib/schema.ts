import { site } from "@/data/site";
import { locations, type Location } from "@/data/locations";
import { openingHoursSpec } from "@/lib/hours";

const cuisine = ["Pizza", "American", "Sandwiches", "Italian"];

export function restaurantSchema(loc: Location) {
  const hasStreet = !loc.addressLine1.startsWith("TODO");
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/locations/${loc.slug}`,
    name: `${site.name} — ${loc.name}`,
    url: `${site.url}/locations/${loc.slug}`,
    telephone: loc.phoneHref,
    email: site.email,
    servesCuisine: cuisine,
    priceRange: "$$",
    image: `${site.url}/opengraph-image`,
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
    acceptsReservations: "https://wa.me/" + site.whatsapp,
  };
}

export function organizationSchema() {
  const primary = locations[0];
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}#org`,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "$$",
    servesCuisine: cuisine,
    image: `${site.url}/opengraph-image`,
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
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
        }
      : {}),
    department: locations.slice(1).map((l) => ({
      "@type": "Restaurant",
      name: `${site.name} — ${l.name}`,
      url: `${site.url}/locations/${l.slug}`,
    })),
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
