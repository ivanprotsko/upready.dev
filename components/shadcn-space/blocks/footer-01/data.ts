export type Footer01Data = {
  tagline: string;
  contact_section_title: string;
  address: string;
  email: string;
  phone: string;
  copyright: string;
  socialLinks: {
    icon: string;
    href: string;
  }[];
  footerSections: {
    title: string;
    links: {
      title: string;
      href: string;
    }[];
  }[];
};

export const defaultData: Footer01Data = {
  tagline:
    "Empowering businesses with innovative solutions. Let\u2019s create something amazing together.",
  contact_section_title: "Contact Details",
  address: "81 Rivington Street London EC2A 3AY",
  email: "hello@shadcnspace.com",
  phone: "0105 192 3556",
  copyright: "\u00a92026 Shadcn Space. All Rights Reserved",
  socialLinks: [
    { icon: "Twitter", href: "#" },
    { icon: "Linkedin", href: "#" },
    { icon: "Dribbble", href: "#" },
    { icon: "Instagram", href: "#" },
  ],
  footerSections: [
    {
      title: "Sitemap",
      links: [
        { title: "Contact us", href: "#" },
        { title: "About us", href: "#" },
        { title: "Work", href: "#" },
        { title: "Services", href: "#" },
        { title: "Pricing", href: "#" },
      ],
    },
    {
      title: "Other Pages",
      links: [
        { title: "Terms & Conditions", href: "#" },
        { title: "Privacy Policy", href: "#" },
      ],
    },
  ],
};
