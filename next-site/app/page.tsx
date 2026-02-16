import { HomeHero } from "@/components/home/HomeHero";
import { TrustSection } from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HomeHero />
      <TrustSection />
    </main>
  );
}
