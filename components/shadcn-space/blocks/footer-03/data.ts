export type Footer03Data = {
  newsletter_heading: string;
  newsletter_description: string;
  email_placeholder: string;
  subscribe_button: string;
  copyright: string;
  terms_link: string;
  terms_href: string;
  privacy_link: string;
  privacy_href: string;
  sitemap_link: string;
  sitemap_href: string;
  linkColumns: {
    links: { title: string; href: string }[];
  }[];
};

export const defaultData: Footer03Data = {
  newsletter_heading: "Stay in the loop",
  newsletter_description: "Get the latest updates delivered to your inbox.",
  email_placeholder: "Enter your email",
  subscribe_button: "Subscribe",
  copyright: "©2026 upready. All rights reserved.",
  terms_link: "Terms & Conditions",
  terms_href: "/terms-and-conditions",
  privacy_link: "Privacy Policy",
  privacy_href: "/privacy-policy",
  sitemap_link: "Sitemap",
  sitemap_href: "/sitemap.xml",
  linkColumns: [
    {
      links: [
        { title: "Problem", href: "#problem" },
        { title: "How It Works", href: "#how-it-works" },
        { title: "Pricing", href: "#pricing" },
        { title: "FAQ", href: "#faq" },
      ],
    },
    {
      links: [
        { title: "Contact", href: "#contact" },
      ],
    },
  ],
};
