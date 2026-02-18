import Header from "@/components/shadcn-space/blocks/hero-01/header";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import BrandSlider from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import HowItWorks from "@/components/shadcn-space/blocks/feature-03/feature";
import Pricing from "@/components/shadcn-space/blocks/pricing-01/pricing";
import Portfolio from "@/components/shadcn-space/blocks/portfolio-01/portfolio";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <BrandSlider />
        <Feature />
        <HowItWorks />
        <Pricing />
        <Portfolio />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
