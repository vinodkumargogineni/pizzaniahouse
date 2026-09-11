import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} website and order from us.`,
};

const UPDATED = "February 2026";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated={UPDATED}
      intro={`These terms govern your use of the ${site.name} website and any orders or reservations you make through it. By using the site you agree to them. This page is not legal advice.`}
    >
      <section>
        <h2>Using the website</h2>
        <p>
          You may use this site for personal, non-commercial purposes to learn
          about us, view our menu, contact us, and place orders. You agree not to
          misuse the site, interfere with its operation, attempt to gain
          unauthorized access, or use it to break the law.
        </p>
        <p>
          Menu items, prices, hours, and availability shown on the site are for
          general information, may change without notice, and may differ from
          what is shown on our online-ordering page, which is the authoritative
          source for current items and prices.
        </p>
      </section>

      <section>
        <h2>Orders</h2>
        <ul>
          <li>
            Online orders are placed and paid for through our third-party
            ordering provider. Your order is an offer to buy; it is accepted only
            when we confirm it.
          </li>
          <li>
            If an item is unavailable, mispriced, or incorrectly described, we
            may cancel or adjust the affected part of the order and refund you
            for it. We are not obligated to honor an obvious pricing error.
          </li>
          <li>
            You are responsible for the accuracy of the information you provide,
            including pickup time and delivery address.
          </li>
          <li>
            Quoted preparation and delivery times are estimates, not guarantees.
          </li>
        </ul>
      </section>

      <section>
        <h2>Pickup and delivery</h2>
        <ul>
          <li>
            <strong>Pickup:</strong> please collect your order at the selected
            time. We hold prepared food for a reasonable period only.
          </li>
          <li>
            <strong>Delivery:</strong> delivery, where offered, is carried out by
            third-party couriers within a limited area. Once an order leaves our
            kitchen with the courier, delivery timing and handling are the
            courier&apos;s responsibility. Provide accurate address and access
            details; re-delivery for an incorrect address may not be possible.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cancellations and refunds</h2>
        <ul>
          <li>
            To change or cancel an order, contact the shop as soon as possible at{" "}
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>. We can
            usually accommodate changes before preparation begins.
          </li>
          <li>
            Once food has been prepared, we generally cannot refund it unless
            there is a problem with the order.
          </li>
          <li>
            If your order is wrong, missing items, or has a genuine quality
            problem, contact us the same day and we will make it right with a
            replacement or a refund for the affected items.
          </li>
          <li>
            Approved refunds are issued to your original payment method through
            our ordering provider and may take several business days to appear.
          </li>
        </ul>
      </section>

      <section>
        <h2>Allergens and dietary information</h2>
        <p>
          Our food is prepared in a kitchen that also handles wheat, gluten,
          dairy, eggs, soy, tree nuts, peanuts, fish, and shellfish. We take
          care, but we <strong>cannot guarantee</strong> that any item is free of
          a particular allergen or of cross-contact. &ldquo;Vegetarian&rdquo; and
          similar labels describe the recipe as intended, not a certification. If
          you have a food allergy or dietary restriction, tell us before ordering
          and decide what is right for you. We are not liable for reactions where
          you did not inform us of an allergy.
        </p>
      </section>

      <section>
        <h2>Reservations</h2>
        <p>
          A table request submitted through the site is a request, not a
          confirmed booking, until we reply to confirm it. We may not be able to
          hold a table indefinitely past the reserved time.
        </p>
      </section>

      <section>
        <h2>Gift cards</h2>
        <p>
          If we sell gift cards, they are redeemable for food and drink at our
          locations, are not reloadable unless stated, cannot be redeemed for
          cash except where required by law, and are subject to the terms
          provided at purchase. Treat gift cards like cash; we are not
          responsible for lost or stolen cards.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The {site.name} name, logo, menu descriptions, site design, text, and
          images are owned by us or used with permission and are protected by
          law. You may not copy, reproduce, or use them without our written
          permission, except for normal personal use of the site.
        </p>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          The site links to and relies on services we do not control, including
          our online-ordering provider, payment processor, delivery couriers,
          mapping, and social media. We are not responsible for those services,
          and your use of them is subject to their terms.
        </p>
      </section>

      <section>
        <h2>Disclaimers</h2>
        <p>
          The website is provided &ldquo;as is&rdquo; and &ldquo;as
          available.&rdquo; We do not warrant that it will be uninterrupted,
          error-free, or that information on it is always current or accurate.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {site.name} and its owners and
          staff will not be liable for indirect, incidental, special, or
          consequential damages arising from your use of the website or our
          services. Our total liability for any claim relating to an order will
          not exceed the amount you paid for that order. Nothing in these terms
          limits liability that cannot be limited under law.
        </p>
      </section>

      <section>
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify {site.name} against claims and costs arising
          from your misuse of the site or violation of these terms.
        </p>
      </section>

      <section>
        <h2>Governing law and disputes</h2>
        <p>
          These terms are governed by the laws of the Commonwealth of
          Pennsylvania, without regard to conflict-of-laws rules. Before filing
          any claim, you agree to contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> and try in good faith
          to resolve it. Any dispute that cannot be resolved will be brought in
          the state or federal courts located in or serving Butler County,
          Pennsylvania.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update these terms. Continued use of the site after an update
          means you accept the revised terms. The date above shows the current
          version.
        </p>
      </section>

      <section>
        <h2>Severability and contact</h2>
        <p>
          If any part of these terms is found unenforceable, the rest stays in
          effect. Questions:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
