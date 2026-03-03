import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import Feature02 from "@/components/shadcn-space/blocks/feature-02";
import Feature03 from "@/components/shadcn-space/blocks/feature-03";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import PricingSubscriptions from "@/components/shadcn-space/blocks/pricing-01/pricing";
import Portfolio from "@/components/shadcn-space/blocks/portfolio-01/portfolio";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

export default function Home() {
  return (
    <div className="relative">
      <AgencyHeroSection />
      <div id="problem">
        <Feature02 />
      </div>
      <div id="how-it-works">
        <Feature03 />
      </div>
      <div id="pricing">
        <Pricing />
        <PricingSubscriptions />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
