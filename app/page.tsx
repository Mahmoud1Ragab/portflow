import Navbar from "@/components/shared/Navbar";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden  text-white">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-[url('/images/bg1.jpg')]" />
      <div className="absolute inset-0 z-10 bg-[url('/images/bg3.png')] opacity-20 " />

      <Navbar />
      <div className="relative z-20 max-w-[95vw] mx-auto px-4 pb-20 pt-25 sm:px-6 flex flex-col gap-10">
        <HeroSection />
        <FeatureHighlights />
        <HowItWorksSection />
        <PricingSection />
      </div>
      <SiteFooter />
    </div>
  );
}
