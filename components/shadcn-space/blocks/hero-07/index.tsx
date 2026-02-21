import HeroSection from "@/components/shadcn-space/blocks/hero-07/hero";
import Navbar from "@/components/shadcn-space/blocks/hero-07/navbar";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-07/navbar";

const SaaSHeroSection = () => {
  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "#",
      isActive: true,
    },
    {
      title: "About us",
      href: "#",
    },
    {
      title: "Integration",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
    {
      title: "Roadmap",
      href: "#",
    },
  ];
  return (
    <>
      <Navbar navigationData={navigationData} />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default SaaSHeroSection;
