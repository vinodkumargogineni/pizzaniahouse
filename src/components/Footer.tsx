import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { locations } from "@/data/locations";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4V10H7.5v3H10v8h3.5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink-800">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-dim">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-ember hover:text-ember"
              >
                <IgIcon />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-ember hover:text-ember"
              >
                <FbIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
              Locations
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="font-medium text-cream transition-colors hover:text-ember"
                  >
                    {loc.name}
                  </Link>
                  <p className="mt-1 text-cream/60">
                    {!loc.addressLine1.startsWith("TODO") && (
                      <>
                        {loc.addressLine1}
                        <br />
                      </>
                    )}
                    {loc.city}, {loc.region} {loc.postal}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2 text-cream/70 hover:text-cream"
                >
                  <Phone size={15} /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-cream/70 hover:text-cream"
                >
                  <Mail size={15} /> {site.email}
                </a>
              </li>
            </ul>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-ember">
              Order online
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {site.delivery.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="rounded-full border border-cream/15 px-3 py-1 text-cream/70 transition-colors hover:border-ember hover:text-ember"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-cream/10 pt-8 text-xs leading-relaxed text-cream/60">
          Pizza, cheesesteaks, hoagies, wings and breakfast in Cranberry
          Township, PA — serving {site.serviceAreas.join(", ")}. Dine in, pickup,
          or delivery from 2620 Rochester Road.
        </p>

        <div className="mt-6 flex flex-col gap-4 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-ember">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ember">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-ember">
              Accessibility
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
