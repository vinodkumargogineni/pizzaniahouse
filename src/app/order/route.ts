import { redirect } from "next/navigation";
import { site } from "@/data/site";

// Short, memorable link for printed materials, social bios, and word of mouth:
// pizzaniahouse.com/order  ->  wherever `site.orderOnline` points today.
export function GET() {
  redirect(site.orderOnline);
}
