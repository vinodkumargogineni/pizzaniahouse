import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `${site.name}'s commitment to keeping this website usable for everyone.`,
};

const UPDATED = "February 2026";

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      updated={UPDATED}
      intro={`${site.name} wants everyone to be able to browse our menu, find our locations, and place an order. We are working to make this website usable for people of all abilities.`}
    >
      <section>
        <h2>Standard we aim for</h2>
        <p>
          We aim to conform to the{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/"
            target="_blank"
            rel="noreferrer"
          >
            Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
          </a>
          . These guidelines explain how to make web content more accessible to
          people with visual, hearing, motor, and cognitive disabilities.
        </p>
      </section>

      <section>
        <h2>What we have done</h2>
        <ul>
          <li>Semantic HTML structure and a &ldquo;skip to content&rdquo; link.</li>
          <li>Full keyboard navigation with a visible focus outline on every interactive element.</li>
          <li>Text alternatives for meaningful images and titles for embedded frames.</li>
          <li>Color combinations chosen for readable contrast, in a single consistent theme.</li>
          <li>
            Respect for the operating-system &ldquo;reduce motion&rdquo; setting —
            animations are minimized when you ask your device to reduce motion.
          </li>
          <li>A responsive layout that works from small phones to large screens, and supports browser zoom and larger text.</li>
          <li>Form fields with proper labels.</li>
        </ul>
      </section>

      <section>
        <h2>Known limitations</h2>
        <p>Some parts of the experience rely on third-party services that we do not fully control:</p>
        <ul>
          <li>
            <strong>Google Maps</strong> embeds on the location pages. A text
            address and a plain &ldquo;Get directions&rdquo; link are always
            provided alongside the map.
          </li>
          <li>
            <strong>Online ordering</strong> is handled by an external provider.
            We chose a provider that maintains its own accessibility program, but
            its pages are outside our direct control.
          </li>
        </ul>
        <p>
          We test the parts we control and continue to make improvements. If you
          hit a barrier anywhere, please tell us.
        </p>
      </section>

      <section>
        <h2>Give us feedback</h2>
        <p>
          If you have trouble using any part of this website, or you need
          information from it in another format, contact us and we will help and
          work to fix the problem:
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            Phone: <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          </li>
        </ul>
        <p>
          We aim to respond within a few business days. You can also visit or
          call any of our locations and a team member will assist you with the
          menu, a reservation, or an order.
        </p>
      </section>
    </LegalLayout>
  );
}
