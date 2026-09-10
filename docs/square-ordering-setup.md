# Setting up Square Online ordering for Pizzania House

A first-party ordering system: customers order and pay on **your** page, orders
come straight to the shop, **no marketplace commission** — you pay only card
processing (2.6% + 10¢) and, for delivery, a flat courier fee (~$8, no
commission).

Work through this in order. Most of it is done once. Budget ~2–3 hours to get to
a working test order, spread over a day or two while approvals clear.

---

## 0. Before you start — gather these

- [ ] **Legal business name + address** (2620 Rochester Rd, Cranberry Township, PA 16066)
- [ ] **EIN** (or SSN if sole proprietor) — for payment account verification
- [ ] **Business bank account** number + routing number — this is where money lands
- [ ] **A phone + email** for the Square account (use a shop address, not personal)
- [ ] **The full menu** — every item, price, and for pizzas: sizes + topping list + topping price
- [ ] **Logo** (the real one, transparent PNG if possible) and **8–15 food photos**
- [ ] **A tablet or spare phone** to keep in the kitchen for incoming orders
- [ ] Optional: a receipt printer (see step 6)

---

## 1. Create the Square account + turn on payments

1. Go to **squareup.com** → **Get Started** (free).
2. Choose business type **Restaurant / Quick service**.
3. Enter the business details from step 0.
4. Open **Dashboard → Settings → Account & Settings → Business information** and
   add the EIN and bank account. Square verifies this in 1–2 business days.
   - Payouts arrive next business day by default (instant transfer available for
     a 1.75% fee — leave it off).
5. In **Settings → Sales taxes**, add **Pennsylvania sales tax (6%)**. Set it to
   apply to prepared food / all items. (Cranberry Township has no extra local
   food tax — 6% is correct. Confirm with the shop's accountant.)

---

## 2. Build the menu in Square

**Dashboard → Items & Orders → Items → Create an item** (or **Import** from a
spreadsheet — faster for a big menu; Square has a template).

Set up **Categories** first (matches the website):
Specialty Pizzas · Classic Pizzas · Make Your Own Pizza · Hoagies · Burgers ·
Appetizers · Spring Rolls · Cheesy Bread Bites · Pastas · Rice / Noodles ·
Salads · Breakfast · Desserts · Drinks · Combos

### Simple items (burgers, apps, drinks, etc.)

One item, one price. Add a photo and a short description.

### Pizzas with sizes — use **Variations**

Create the item "Ultimate Pepperoni Pizza" with variations:
`Medium – $15.99`, `Large – $17.99`, `X-Large – $19.99`.
Repeat for each specialty pizza (all share the same three prices).
Classic pizzas use `$10.99 / $12.99 / $14.99`.

### "Make Your Own Pizza" + toppings — use **Modifiers**

1. **Items & Orders → Modifiers → Create modifier set**:
   - **"Pizza size"** (required, single-select): Medium 12" $10.99, Large 14" $12.99, X-Large 16" $14.99
   - **"Protein toppings"** ($0.99 each, multi-select): Pepperoni, Sausage, Ham, Bacon, Chicken, Steak, Salami, Capicola, Beef
   - **"Veggie toppings"** ($0.99 each, multi-select): Mushrooms, Onions, Green peppers, Black olives, Jalapeños, Banana peppers, Sweet corn, Tomatoes, Spinach
   - **"Cheese"** ($0.99 each): Cheddar, Asiago
   - **"Sauce"** (choose one, first one free): Classic pizza, Garlic parmesan, Alfredo, BBQ, Buffalo, Honey mustard, Ranch, Burger sauce
2. Create item **"Make Your Own Pizza"**, base price $0, attach all four modifier sets.
3. You can also attach "Protein/Veggie toppings" to the specialty + classic pizzas
   as optional add-ons.

### Hoagies — Variations `8" $8.99` / `12" $12.99`

### Combos — one item each, fixed price ($10.99–$21.99), description lists what's included

> Tip: the site menu in `src/data/menu.ts` has every item + price already typed
> out. Use it as your checklist, and keep the two in sync going forward.

---

## 3. Turn on the Square Online ordering site

1. **Dashboard → Online → Overview → Get Started.**
2. Pick a site name. You'll get a free `pizzaniahouse.square.site` address
   (you can attach a custom domain later — see step 8).
3. **Fulfillment methods** → enable **Pickup** and **Delivery**.
4. **Design**: set brand color to the site's orange **#F26722**, background dark,
   upload the logo. Keep it minimal — this is a menu, not a second website.
5. Under **Items**, confirm every category shows and toggle each item **visible
   for online ordering**.

---

## 4. Pickup settings

- **Online → Fulfillment → Pickup**:
  - Prep time: start at **20–25 min** (adjust once you see real timing)
  - Pickup hours: **Mon–Sat 7:00 AM – 7:30 PM** (30 min before close), Sun closed
  - Allow "order for later" (scheduled pickup) — yes
  - Order limit per 15 min slot: start at **5**, raise as the kitchen handles it

---

## 5. Delivery — commission-free courier

**Online → Fulfillment → Delivery → Self-delivery / On-demand delivery.**

Two choices, both **no marketplace commission**:

| | How it works | Cost |
|---|---|---|
| **Square + DoorDash Drive** (recommended) | Square auto-requests a DoorDash courier when you mark the order ready. Customer never leaves your page. | Flat fee ~$7–10 per delivery, charged to the shop — pass it to the customer as a delivery fee |
| **Self-delivery** | Your own driver. You set the radius + fee. | Just your labor/gas |

- Set a **delivery radius** (~4–5 miles) and a **delivery fee** ($3.99–$5.99, or
  the DoorDash Drive cost).
- Set a **delivery minimum** ($15–20).
- Turn on DoorDash Drive under **Delivery → On-demand delivery partners**.

---

## 6. How orders reach the kitchen

Set up **all three** — they back each other up.

### a) Tablet dashboard with sound (do this first, free)

- Install the **Square Point of Sale** app (or **Square for Restaurants**, free
  tier) on the kitchen tablet.
- Sign in → **Settings → Notifications → New online order** → sound **on**,
  volume **max**.
- Keep the app open on the **Orders** screen. New orders ding and appear at the top.
- Confirm each order (this texts/emails the customer their pickup time).

### b) Auto-print a ticket

- Cheapest reliable option: a Square-compatible printer — **Star Micronics
  SP742** (impact, kitchen-safe) or **Epson TM-m30**, ~$200–300, USB or LAN.
- In the Square app: **Settings → Hardware → Printers → Create printer station**
  → assign it "In-person + online orders" → test print.
- Or add **Square Kitchen Display (KDS)** — $20/mo per screen instead of paper.

### c) Email

- **Online → Settings → Notifications** → add the shop email for **new order**
  alerts. Every order also emails there as a backup.

---

## 7. Test it before going live

1. On your phone, open the `square.site` link in a private window.
2. Place a real order — one cheap item, pickup — and pay with a real card.
3. Confirm: the tablet dinged, the ticket printed, the email arrived, the
   customer confirmation text/email arrived.
4. In the Square app, mark it **Ready** → **Completed**.
5. **Refund** the test order from the Square Dashboard.
6. Repeat once for a **delivery** order to check the courier request flow.

---

## 8. Connect it to the website

Pick one and tell me which — I'll wire it up (it's a one-line change):

- **Simplest:** just send me the `pizzaniahouse.square.site` URL. Every "Order"
  button on the site + `pizzaniahouse.com/order` will point to it.
- **Cleaner:** in Square Online → **Settings → Domains**, connect a subdomain
  **`order.pizzaniahouse.com`** (needs the main domain's DNS — same place the
  website domain gets set up). Then the ordering page lives on your own domain.
- The marketing site (home, menu-browsing, locations, catering) stays exactly as
  it is — Square Online only handles the cart + checkout.

---

## 9. Go live

- [ ] Payments account verified (green check in Square Dashboard)
- [ ] Every menu item has a price, photo, and is set visible
- [ ] Taxes on, hours set, prep time set
- [ ] Test pickup order + test delivery order both worked end to end
- [ ] Test orders refunded
- [ ] Tablet is charging in the kitchen, app open, sound on, staff trained to confirm orders
- [ ] Printer loaded with paper
- [ ] Website "Order" buttons pointed at the new URL (tell me the link)
- [ ] Update the Google Business Profile, Instagram, and Facebook "Order" links to the new URL too
- [ ] Consider pausing / removing the DoorDash & Uber Eats marketplace listings, or keep them for reach and just prefer your own link

---

## What it costs

| | |
|---|---|
| Square account + Online ordering | **$0/mo** |
| Card processing (online) | **2.6% + $0.10** per order |
| Kitchen Display (optional) | $20/mo per screen — skip if you print tickets |
| Receipt printer (optional, one-time) | ~$200–300 |
| Delivery courier (DoorDash Drive via Square) | ~$7–10 per delivery, no commission — pass to customer |
| Custom subdomain | $0 (uses your existing domain) |

Compare to DoorDash marketplace: **15–30% of every order.** On $5,000/mo of
online sales that's **$750–1,500/mo** vs. roughly **$140/mo** in Square
processing.

---

## Day-to-day (train the staff)

- **Slammed?** Square app → **Orders → Pause online orders** (or set a longer
  prep time). Un-pause when caught up.
- **Out of an item?** Dashboard or app → toggle the item **Sold out** — it greys
  out online instantly, comes back when you untoggle.
- **Always confirm** each order in the app so the customer gets an accurate time.
- **Refunds** are done from the Square Dashboard → the specific order → Refund.

---

## When to revisit

Once online orders pass roughly **$3,000–5,000/month**, it's worth building a
fully custom ordering system into the website — that removes even the 2.6%
processing spread and gives total control (loyalty, custom promos, catering
checkout). Until then, Square does everything for free.
