import type { Footer03Data } from "./data";
import { defaultData } from "./data";

export const upreadyData: Footer03Data = {
  ...defaultData,
  newsletter_heading: "Stop debugging alone",
  newsletter_description:
    "Get real founder tips, AI tool breakdowns, and build updates to your inbox. No spam, no noise.",
  email_placeholder: "Enter your email",
  subscribe_button: "Subscribe",
  copyright: "\u00a92026 upready.dev. All rights reserved.",
  terms_link: "Terms & Conditions",
  terms_href: "/terms-and-conditions",
  privacy_link: "Privacy Policy",
  privacy_href: "/privacy-policy",
  sitemap_link: "Sitemap",
  sitemap_href: "/sitemap.xml",
  linkColumns: [
    {
      links: [
        { title: "MVP Build", href: "/mvp-build" },
        { title: "App Rescue", href: "/app-rescue" },
        { title: "Tech Audit", href: "/tech-audit" },
        { title: "Pricing", href: "/pricing" },
        { title: "Our Work", href: "/our-work" },
      ],
    },
    {
      links: [
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contacts" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms & Conditions", href: "/terms-and-conditions" },
      ],
    },
  ],
};
