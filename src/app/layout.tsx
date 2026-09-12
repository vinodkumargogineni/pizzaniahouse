import type { Metadata, Viewport } from "next";
import { Poppins, Anton } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pizza in Cranberry Township, PA | Pizzania House",
    template: `%s | ${site.name}`,
  },
  description:
    "Pizzania House serves hand-tossed pizza, Philly cheesesteaks, hoagies, wings, pasta and breakfast at 2620 Rochester Rd, Cranberry Township, PA. Dine in, pickup, or delivery — order online.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "pizza Cranberry Township",
    "pizza near me",
    "best pizza Cranberry Twp PA",
    "pizza delivery Cranberry Township",
    "Philly cheesesteak Cranberry Township",
    "hoagies Cranberry PA",
    "wings Cranberry Township",
    "pizza catering Cranberry Township",
    "Pizzania House",
    "restaurant 2620 Rochester Rd",
    "pizza Seven Fields",
    "pizza Mars PA",
    "pizza Wexford",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pizza in Cranberry Township, PA | Pizzania House",
    description:
      "Hand-tossed pizza, cheesesteaks, hoagies & more at 2620 Rochester Rd, Cranberry Township. Dine in, pickup, or delivery.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} logo and restaurant preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza in Cranberry Township, PA | Pizzania House",
    description:
      "Hand-tossed pizza, cheesesteaks, hoagies & more at 2620 Rochester Rd, Cranberry Township.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Cranberry Township, Pennsylvania",
    "geo.position": "40.6985847;-80.1208054",
    ICBM: "40.6985847, -80.1208054",
  },
};

export const viewport: Viewport = {
  themeColor: "#14100e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only rounded-full bg-ember px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab />
        </MotionProvider>
      </body>
    </html>
  );
}
