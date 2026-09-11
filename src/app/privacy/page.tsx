import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

const UPDATED = "February 2026";

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={UPDATED}
      intro={`This policy explains what information ${site.name} ("we," "us") collects when you use our website and services, how we use it, and the choices you have. It is written in plain language and is not legal advice.`}
    >
      <section>
        <h2>Information we collect</h2>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Contact &amp; catering forms:</strong> your name, email
            address, phone number, and the contents of your message.
          </li>
          <li>
            <strong>Table reservations:</strong> your name, party size, requested
            date and time, and any notes. Reservation requests are sent to us
            through WhatsApp; your use of WhatsApp is also governed by
            WhatsApp&apos;s own privacy policy.
          </li>
          <li>
            <strong>Online orders:</strong> when you place an order, you do so
            through our ordering provider. They collect your name, contact
            details, order contents, pickup or delivery address, and payment
            information, and share order details with us so we can prepare and
            fulfill your order.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            Basic technical data that our hosting provider records for security
            and reliability, such as your IP address, browser type, pages
            requested, and timestamps.
          </li>
          <li>
            This site does not currently use advertising cookies or third-party
            analytics trackers. If that changes, we will update this policy and,
            where required, ask for your consent.
          </li>
        </ul>
        <h3>Information from third parties</h3>
        <ul>
          <li>
            Our payment processor and delivery partners provide us with order,
            transaction, and delivery-status information.
          </li>
          <li>
            If you interact with our pages on Facebook or Instagram, those
            platforms may share aggregate information with us.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use your information</h2>
        <ul>
          <li>To prepare, fulfill, and follow up on your orders and reservations.</li>
          <li>To respond to your questions, feedback, and catering requests.</li>
          <li>To process payments and prevent fraud (through our payment processor).</li>
          <li>To operate, secure, and improve our website.</li>
          <li>To send you information you have asked for, and — only if you opt in — occasional updates or offers.</li>
          <li>To comply with law and enforce our terms.</li>
        </ul>
      </section>

      <section>
        <h2>How we share your information</h2>
        <p>We do not sell your personal information. We share it only as needed:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who work on our behalf — our
            payment processor, online-ordering provider, delivery couriers,
            website host, and email provider — under agreements that limit their
            use of your data.
          </li>
          <li>
            <strong>Delivery partners</strong> receive the information needed to
            deliver your order (name, address, phone, order contents).
          </li>
          <li>
            <strong>Legal reasons</strong> — to comply with a law, subpoena, or
            government request, or to protect the rights, safety, or property of
            our customers, staff, or business.
          </li>
          <li>
            <strong>Business transfer</strong> — if the business is sold or
            reorganized, customer information may transfer as part of that
            transaction.
          </li>
        </ul>
      </section>

      <section>
        <h2>Payments</h2>
        <p>
          Card payments are processed by our payment provider. We do not receive
          or store your full card number. The provider handles card data in line
          with the PCI Data Security Standard and its own privacy policy.
        </p>
      </section>

      <section>
        <h2>Cookies and similar technologies</h2>
        <p>
          The website uses a small amount of browser storage strictly to make the
          site work (for example, remembering an interface preference). It does
          not set advertising or cross-site tracking cookies. Third-party content
          we embed — such as Google Maps or the online-ordering page — may set
          their own cookies when you interact with them, governed by those
          providers&apos; policies.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          We keep order and reservation records for as long as needed to run the
          business, resolve disputes, and meet tax and accounting obligations,
          then delete or anonymize them. Contact-form messages are kept only as
          long as needed to handle your request.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We use reasonable administrative and technical measures to protect your
          information. No method of transmission or storage is completely secure,
          so we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Our website and services are intended for adults and are not directed
          to children under 13. We do not knowingly collect personal information
          from children. If you believe a child has provided us information,
          contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <ul>
          <li>
            <strong>Access, correction, or deletion:</strong> email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond
            to reasonable requests.
          </li>
          <li>
            <strong>Marketing:</strong> if we ever send marketing email or text,
            every message will include an unsubscribe or STOP option.
          </li>
          <li>
            <strong>Do Not Track:</strong> because we do not track you across
            other websites, we do not respond to browser Do-Not-Track signals.
          </li>
          <li>
            Depending on where you live, you may have additional rights under
            your local law. Contact us and we will honor rights that apply to you.
          </li>
        </ul>
      </section>

      <section>
        <h2>Third-party links</h2>
        <p>
          Our site links to and embeds services we do not control, including
          Google Maps, our online-ordering page, and our social media pages.
          Their use of your information is governed by their own privacy
          policies.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &ldquo;last
          updated&rdquo; date above reflects the latest version. Significant
          changes will be noted on this page.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions about this policy or your information:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
