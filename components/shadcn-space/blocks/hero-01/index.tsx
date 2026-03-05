import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import type { HeroContent } from "@/lib/utm-content";

export default function AgencyHeroSection({ hero }: { hero?: HeroContent }) {
  const navigationData: NavigationSection[] = [
    {
      title: "Problem",
      href: "#problem",
    },
    {
      title: "How It Works",
      href: "#how-it-works",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <div className="relative">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection {...hero} />
      </main>
    </div>
  );
}
