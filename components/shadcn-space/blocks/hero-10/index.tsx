import HeroSection from "@/components/shadcn-space/blocks/hero-10/hero";
import Navbar from "@/components/shadcn-space/blocks/hero-10/navbar";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-10/navbar";
import type { AvatarList } from "@/components/shadcn-space/blocks/hero-10/hero";

const SaaSHeroSection = () => {
  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "#",
      isActive: true,
    },
    {
      title: "Courses",
      href: "#",
    },
    {
      title: "Mentor",
      href: "#",
    },
    {
      title: "Group",
      href: "#",
    },
    {
      title: "Testimonial",
      href: "#",
    },
  ];

  const avatarList: AvatarList[] = [
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
    },
  ];

  return (
    <>
      <Navbar navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
      </main>
    </>
  );
};

export default SaaSHeroSection;
