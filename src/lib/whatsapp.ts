import { site } from "@/data/site";

/**
 * Build a WhatsApp click-to-chat link with a pre-filled message.
 * `number` overrides the default business number (digits only, intl format).
 */
export function waLink(message: string, number: string = site.whatsapp) {
  const clean = number.replace(/[^\d]/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

type BookingKind = "table" | "order" | "catering";

/** Compose a structured booking/enquiry message for WhatsApp. */
export function bookingMessage(
  kind: BookingKind,
  fields: Record<string, string | undefined> = {},
) {
  const heads: Record<BookingKind, string> = {
    table: `Hi ${site.name}! I'd like to book a table.`,
    order: `Hi ${site.name}! I'd like to place an order.`,
    catering: `Hi ${site.name}! I'd like a catering quote.`,
  };
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `• ${k}: ${v}`);
  return [heads[kind], ...lines].join("\n");
}
