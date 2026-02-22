import type { Footer01Data } from "./data";
import { defaultData } from "./data";

export const upreadyData: Footer01Data = {
  ...defaultData,
  tagline: "AI-powered product studio. We fix broken AI apps and build MVPs for non-technical founders.",
  contact_section_title: "Get in Touch",
  address: "Remote-first. Serving US & EU founders.",
  email: "hello@upready.dev",
  phone: "chat.upready.dev",
  copyright: "\u00a92026 upready.dev. All Rights Reserved",
  socialLinks: [
    { icon: "Twitter", href: "https://x.com/upreadydev" },
    { icon: "Linkedin", href: "https://linkedin.com/company/upready" },
    { icon: "Github", href: "https://github.com/upready" },
  ],
  footerSections: [
    {
      title: "Services",
      links: [
        { title: "App Rescue", href: "/rescue" },
        { title: "MVP Build", href: "/build" },
        { title: "App Audit", href: "/audit" },
        { title: "Retainer", href: "/retainer" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Pricing", href: "/pricing" },
        { title: "How It Works", href: "/#process" },
        { title: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Contact", href: "/contacts" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms & Conditions", href: "/terms" },
      ],
    },
  ],
};
