import type { Navbar01Data } from "./data";
import { defaultData } from "./data";

export const pricingNavbarData: Navbar01Data = {
  ...defaultData,
  cta_button: "Start a Chat",
  nav_links: [
    { title: "Services", href: "/#services" },
    { title: "How It Works", href: "/#process" },
    { title: "Pricing", href: "/pricing" },
    { title: "FAQ", href: "/#faq" },
    { title: "Contact", href: "/contacts" },
  ],
};
