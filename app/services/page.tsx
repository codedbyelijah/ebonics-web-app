import Hero from "./hero";
import ServicesSection from "./services-section";
import CareApproachSection from "./care-approach-section";
import FAQSection from "./faq-section";
import { CTABanner, Testimonial } from "@/components";

export default function Services() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CareApproachSection />
      <FAQSection />
      <Testimonial />
      <CTABanner />
    </>
  );
}
