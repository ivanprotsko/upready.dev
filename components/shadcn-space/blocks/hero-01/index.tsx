import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import type { HeroContent } from "@/lib/utm-content";

export default function AgencyHeroSection({ hero }: { hero?: HeroContent }) {
  return (
    <div className="relative">
      <HeroSection {...hero} />
    </div>
  );
}
