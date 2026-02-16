import HomeHero from "@/components/home/HomeHero";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HomeHero />
      <TrustSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
