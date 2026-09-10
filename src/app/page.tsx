import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/Marquee";
import {
  TheSpread,
  SignatureBuild,
  Values,
  LocationsPreview,
  Testimonials,
} from "@/components/home/sections";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <Hero />
      <Marquee />
      <TheSpread />
      <SignatureBuild />
      <Values />
      <LocationsPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
