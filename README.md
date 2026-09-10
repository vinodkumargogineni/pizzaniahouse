# Pizzania House

Marketing site for Pizzania House — _Good Food · Good Mood_.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **TypeScript**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, menu preview, story, locations, testimonials |
| `/menu` | Full menu with a client-side filter (favorites / veg / spicy / new) |
| `/about` | Origin story + timeline |
| `/locations` | Location index |
| `/locations/[slug]` | Per-location hours, map, directions, ordering |
| `/gallery` | Photo grid (placeholder tiles for now) |
| `/catering` | Packages + quote request form + FAQ |
| `/contact` | Contact details + form |

`/sitemap.xml` and `/robots.txt` are generated automatically.

## Where the content lives (edit these, not the components)

All copy and structured data is in [`src/data/`](src/data/):

- **`site.ts`** — name, tagline, phone, email, socials, nav items
- **`locations.ts`** — every location (address, hours, features, map embed, order links).
  Add a location by pushing one object here; it automatically gets a page, a
  sitemap entry, footer/contact listings, and a home-page card.
- **`menu.ts`** — menu categories and items
- **`content.ts`** — testimonials, values, timeline, catering packages, gallery, FAQ

### Location data to finish

In `src/data/locations.ts` (three branches — Cranberry, Connellsville, Washington):

- **`cranberry-township-pa`** (primary, open) — 2620 Rochester Rd, Cranberry
  Township, PA 16066 · (724) 772-6226. Confirm hours; map pin uses the exact
  Google-listing coordinates.
- **`connellsville-pa`** (`coming-soon`) — address, ZIP, phone, hours, and map
  coords are all `TODO`. Fill in, then set `status: "open"`.
- **`washington-pa`** (`coming-soon`) — 502 Washington Road. Confirm phone/hours,
  then set `status: "open"`.

Menu content is in `src/data/menu.ts` (`menu` = categories, `combos` = the combo
deals). Prices, sizes, and toppings are transcribed from the printed menu.

## Images

Photography is stubbed with the styled `<Placeholder>` component. Drop real
images into `public/`, then swap `<Placeholder>` for `next/image` inside the same
aspect-ratio wrappers (Home sections, `/gallery`, `/locations`, `/about`).

## Forms

`ContactForm` is front-end only — it shows a success state but sends nothing.
Wire the `onSubmit` handler to your email service, form API, or CRM.

## WhatsApp booking

Click-to-chat, no backend needed. Set the number in [`src/data/site.ts`](src/data/site.ts):
`whatsapp` (full international format, digits only — e.g. `17245550142`) and
`whatsappDisplay`. Entry points:

- **Floating button** ([`WhatsAppFab`](src/components/WhatsAppFab.tsx)) on every page — table / order / catering shortcuts.
- **Booking widget** ([`BookingWidget`](src/components/BookingWidget.tsx)) on `/contact` — builds a pre-filled reservation message.
- Per-location "Book a table" button on `/locations/[slug]`.
- WhatsApp buttons on `/catering` and the site-wide CTA.

Message templates live in [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts) (`bookingMessage`).
Each location can override the number with a `whatsapp` field on its object.

## SEO & technical

- **Structured data (JSON-LD)** — `Restaurant` schema per location (address, geo,
  opening hours, cuisine) + site-wide `Restaurant`/Organization on the home page.
  Built in `src/lib/schema.ts`, rendered via `<JsonLd>`.
- **Favicon / icons** — generated at build from `src/app/icon.tsx` &
  `apple-icon.tsx` (edit those to restyle).
- **Social share image** — `src/app/opengraph-image.tsx` (also reused for Twitter).
- **`manifest.webmanifest`**, `theme-color`, `colorScheme` set.
- **Live "Open now / Closed"** — `<OpenNow>` + `src/lib/hours.ts` parse the
  `hours` strings and show status in the visitor's time (America/New_York).
  Keep the `"h:mm AM – h:mm PM"` format so parsing works.
- **Accessibility** — skip-to-content link, visible focus rings,
  `prefers-reduced-motion` honoured globally (CSS + Framer `MotionConfig`).
- Custom `not-found.tsx` and `error.tsx`.

## Scaling notes

- Content is data-driven, so a CMS (Sanity, Contentful, Payload) can replace the
  files in `src/data/` without touching components.
- Add online ordering by giving each location real `orderLinks`, or build a
  `/order` route.
- The design system lives in `src/app/globals.css` (`@theme` tokens) and
  `src/components/ui/`.

## Deploy

Zero-config on **Vercel**. Set `site.url` in `src/data/site.ts` to the production
domain so metadata, sitemap, and Open Graph tags are correct.
