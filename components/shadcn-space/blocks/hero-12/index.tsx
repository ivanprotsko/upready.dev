import Navbar from "@/components/shadcn-space/blocks/hero-12/navbar";
import HeroSection from "@/components/shadcn-space/blocks/hero-12/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-12/navbar";

const navigationData: NavigationSection[] = [
  {
    name: "Home",
    href: "#",
    isActive: true, 
  },
  {
    name: "About us",
    href: "#",
  },
  {
    name: "Service",
    href: "#",
  },
  {
    name: "Our projects",
    href: "#",
  },
  {
    name: "Contact us",
    href: "#",
  },
];

const HeroPage = () => {
  return (
    <div className="dark bg-background">
      <Navbar navigationData={navigationData} />
      <HeroSection />
    </div>
  );
};

export default HeroPage;
