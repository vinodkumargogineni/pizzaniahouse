# Ranking for "pizza near me" in Cranberry Township — action plan

**The honest split:** ranking #1 for local "pizza" searches is **~20% the website, ~80% off the website.** The website is now built correctly (see "Done on the site" below). The rest is Google Business Profile, reviews, and citations — and that part only the owner can do. It also takes **3–6 months of consistent effort**, not days. A shop that opened in June 2025 with few reviews will not outrank 20-year-old competitors overnight, no matter how good the site is.

---

## FIRST — unblock the domain (this is stopping everything)

`pizzaniahouse.com` is registered but points nowhere, so Google has nothing to rank. Until this is fixed, do not submit anything to Google.

The domain's DNS is on **AWS Route 53**. Add these records (AWS console → Route 53 → Hosted zones → pizzaniahouse.com → Create record):

| Type | Name | Value | TTL |
|---|---|---|---|
| `A` | `pizzaniahouse.com` (leave "Record name" blank / `@`) | `76.76.21.21` | 300 |
| `CNAME` | `www` | `cname.vercel-dns.com` | 300 |

The domain is already attached to the Vercel project. Within ~1 hour of adding the records, Vercel issues the SSL certificate and `https://pizzaniahouse.com` goes live. Then tell me and I flip the site's canonical URL from the temporary `.vercel.app` address to `pizzaniahouse.com` (one line).

---

## SECOND — Google Business Profile (the single biggest ranking factor)

Go to **business.google.com** and claim the listing for **2620 Rochester Rd, Cranberry Township, PA 16066**.

- The listing may still carry the old tenant's name ("Cranberry Halal Pizza & Grill" / "Subway" nearby). Claim it and correct everything, or request a new listing if there isn't one.
- **Verify it** (postcard, phone, or video — Google chooses).

Then complete 100% of it:

- [ ] **Name:** Pizzania House (exactly — no extra words)
- [ ] **Primary category:** Pizza restaurant
- [ ] **Additional categories:** Cheesesteak restaurant, Sandwich shop, Breakfast restaurant, Chicken wings restaurant, Takeout restaurant, Delivery restaurant, Caterer
- [ ] **Address, phone `(724) 772-6226`, website `https://pizzaniahouse.com`** — must be **identical** to the site, character for character
- [ ] **Hours:** Mon–Sat 7 AM–8 PM, closed Sunday. Add holiday hours as they come.
- [ ] **Opening date:** June 2025
- [ ] **Description** (~750 chars): what you serve, that everything's made from scratch, the neighborhoods you serve, dine-in / pickup / delivery / catering.
- [ ] **Attributes:** dine-in, takeout, delivery, catering, wheelchair accessible, free parking, good for groups/kids, casual, etc.
- [ ] **Services / menu:** add the menu (link to `pizzaniahouse.com/menu` and/or enter items)
- [ ] **Photos — this matters a lot.** Upload 20+ now, add a few every week: storefront/sign, interior, the counter, every popular dish, the team, the oven. Real photos, well-lit. Businesses with 100+ photos get far more calls and direction requests.
- [ ] Turn on **messaging** and monitor it.
- [ ] Seed the **Q&A** yourself with 5–6 real questions and answer them (hours, delivery area, parking, allergens, catering, reservations).

Then **keep it active** — this is ongoing, not one-time:

- **Google Posts** weekly — a new special, a menu item, a holiday note, a photo. Takes 2 minutes, keeps the listing "fresh."
- **Respond to every review** within a day or two — thank the good ones, address the bad ones calmly.

---

## THIRD — reviews (the second biggest factor)

Target: **40+ reviews at 4.3★ or higher within 3 months**, then a steady trickle forever.

- **Ask every happy customer**, in person and on the receipt: "If you enjoyed it, a quick Google review really helps a small shop."
- Put a **short link / QR code** to the Google review form on the counter, on receipts, on the pizza boxes, in the order-confirmation text.
- The flyer's "leave a review, get $5 off" works, but keep it soft — Google discourages *paid* reviews. "Show us your review for $5 off your next visit" is the safe framing; don't make it feel bought.
- **Get reviews on other platforms too:** Yelp, Facebook, TripAdvisor. Diversity of review sources is a ranking signal.
- **Never buy fake reviews.** Google detects and penalizes it, and it can get the listing suspended.

---

## FOURTH — citations (get listed everywhere, identically)

Your Name / Address / Phone ("NAP") must be **byte-for-byte identical** everywhere. Inconsistent listings (Rd vs Road, Twp vs Township, old phone) actively hurt local ranking.

Claim / create / correct:

- [ ] Bing Places for Business
- [ ] Apple Maps (Apple Business Connect)
- [ ] Yelp for Business
- [ ] TripAdvisor
- [ ] Facebook Page (make sure address/hours/category match)
- [ ] Instagram bio (link to `pizzaniahouse.com`)
- [ ] Yellow Pages, Foursquare, Nextdoor Business
- [ ] DoorDash / Uber Eats / Postmates / Grubhub — confirm the address + hours match
- [ ] Cranberry Township / Butler County chamber of commerce, local business directories
- [ ] Data aggregators: Data Axle, Localeze — or use a service like **Yext / BrightLocal / Moz Local** (~$100–200/yr) to push consistent listings everywhere at once and keep them fixed.

---

## FIFTH — local links & mentions (slower, ongoing)

- **Cranberry Patch** already ran a "cheap eats" piece — email the reporter, invite them in, ask to be included next time.
- Sponsor a local youth team / school event — usually gets you a link from their site.
- Get on the Cranberry Township community calendar / "new businesses" lists.
- Partner with nearby non-competing businesses (breweries, the ice rink, offices) — "order lunch from Pizzania" links.
- Local food bloggers / Instagram food accounts in the Pittsburgh–Butler area — invite them for a tasting.

---

## Done on the site (my side — live now)

- Every page titled and described for local pizza search ("Pizza in Cranberry Township, PA", "Pizza & Cheesesteak Menu — Cranberry Twp", per-location pages, etc.), with canonical URLs and geo meta tags.
- **Structured data** Google reads: `Restaurant` + `LocalBusiness` with your address, phone, hours, geo, menu link, payment methods, price range, 10 nearby towns as "area served", and links to your socials + delivery apps. Plus `FAQPage` markup on the Cranberry page and catering page (can show as expandable Q&A in search results), `WebSite`, and breadcrumbs.
- The **Cranberry Township location page** now has a real "Pizza in Cranberry Township" content section and a 6-question local FAQ — the page Google will rank for "pizza near me" when someone's near the shop.
- Clean `sitemap.xml` (with priorities) and `robots.txt`, fast Next.js image optimization, mobile-friendly, HTTPS, accessible (helps rankings), Open Graph / social cards.

## After the domain is live — do these once

1. **Google Search Console** (search.google.com/search-console) — add `pizzaniahouse.com`, verify (DNS TXT record or the HTML method), submit `pizzaniahouse.com/sitemap.xml`. This is how you see what you rank for and catch problems.
2. **Bing Webmaster Tools** — same, quick.
3. Link the Search Console property to a **Google Analytics 4** property if you want traffic data (tell me and I'll add the tag — it's a small, privacy-conscious addition).
4. In **Google Business Profile**, make sure the website link is the new `pizzaniahouse.com`.

---

## Realistic timeline

| When | What to expect |
|---|---|
| Week 1 | Domain live, GBP claimed & filled out, Search Console set up |
| Weeks 2–6 | Citations built, first 15–25 reviews, GBP posts weekly. Start appearing in the local map pack for less-competitive terms ("pizza Seven Fields", "breakfast Cranberry Township"). |
| Months 2–4 | 40+ reviews, consistent NAP everywhere, a few local links. Competing in the map pack for "pizza Cranberry Township" for searchers near the shop. |
| Months 4–6+ | If reviews and activity stay consistent, top-3 map results for core terms within your immediate area. "Pizza near me" is proximity-weighted — you'll rank best for people physically close, which is exactly who you want. |

Being **#1 for everyone in the whole township on day one is not realistic** — but top-3 in the map pack for nearby searchers within a few months absolutely is, and that's where the orders come from.
