import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import LogoCloud from "@/components/shadcn-space/blocks/logo-cloud-01/logo-cloud";
import Feature01 from "@/components/shadcn-space/blocks/feature-01";
import Feature02 from "@/components/shadcn-space/blocks/feature-02";
import Testimonials from "@/components/shadcn-space/blocks/testimonial-01/testimonial";
import Pricing from "@/components/shadcn-space/blocks/pricing-01/pricing";
import Blog from "@/components/shadcn-space/blocks/blog-01/blog";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import Contact from "@/components/shadcn-space/blocks/contact-01";
import Newsletter from "@/components/shadcn-space/blocks/newsletter-01/newsletter";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

export default function Home() {
  return (
    <>
      <AgencyHeroSection />
      <LogoCloud />
      <Feature01 />
      <Feature02 />
      <Testimonials />
      <Pricing />
      <Blog />
      <Faq />
      <Contact />
      <Newsletter />
      <CTA />
      <Footer />
    </>
  );
}
