"use client";

import { Separator } from "@/components/ui/separator";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

const TELEGRAM_URL = "https://t.me/ivanprotsko";

const navKeys = [
  { key: "problem", href: "#problem" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "pricing", href: "#pricing" },
  { key: "portfolio", href: "#portfolio" },
  { key: "faq", href: "#faq" },
] as const;

const Footer = () => {
  const t = useTranslations("footer");
  const tNav = useTranslations("header.nav");

  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-5">
              <div className="flex flex-col gap-6">
                <a href="#" className="text-lg font-semibold tracking-tight text-foreground">zeno<span className="text-accent">.</span>team</a>
                <p className="text-base font-normal text-muted-foreground max-w-sm">{t("tagline")}</p>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Send size={20} /></a>
              </div>
            </div>
            <div className="col-span-1 lg:block hidden" />
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">{t("sitemap")}</p>
                <ul className="flex flex-col gap-3">
                  {navKeys.map(({ key, href }) => (<li key={href}><a href={href} className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors">{tNav(key)}</a></li>))}
                </ul>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">{t("contact")}</p>
                <ul className="flex flex-col gap-3">
                  <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors">{t("telegram")}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />
          <p className="text-sm font-normal text-muted-foreground text-center">&copy; {new Date().getFullYear()} zeno.team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
