"use client";
import Navbar from "@/components/shadcn-space/blocks/hero-06/navbar";
import Announcement from "@/components/shadcn-space/blocks/hero-06/announcement";
import HeroSection from "@/components/shadcn-space/blocks/hero-06/hero";
import { Twitter, Linkedin, Globe } from "lucide-react";
import BrandSlider, {BrandList} from "@/components/shadcn-space/blocks/hero-06/brand-slider";

export default function HeroPage() {
  const socialLinks = [
    {
      id: 1,
      icon: Twitter,
      url: "https://twitter.com",
    },
    {
      id: 2,
      icon: Linkedin,
      url: "https://linkedin.com",
    },
    {
      id: 3,
      icon: Globe,
      url: "https://example.com",
    },
  ];

  const navData = [
    {
      name: "Home",
      href: "/",
      isActive: true,
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Projects",
      href: "#",
    },
    {
      name: "Service",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    }
  ];
  
  const brandList: BrandList[] = [
      {
          image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-1.svg",
          lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg",
          name: "Brand 1",
      },
      {
          image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-2.svg",
          lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg",
          name: "Brand 2",
      },
      {
          image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-3.svg",
          lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg",
          name: "Brand 3",
      },
      {
          image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-4.svg",
          lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg",
          name: "Brand 4",
      },
      {
          image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-5.svg",
          lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg",
          name: "Brand 5",
      },
  ];

  return (
    <>
      <Announcement />
      <Navbar navData={navData} socialLinks={socialLinks} />
      <main>
        <HeroSection socialLinks={socialLinks} />
        <BrandSlider brandList={brandList}/>
      </main>
    </>
  );
}
