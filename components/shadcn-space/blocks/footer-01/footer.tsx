"use client";

import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";
import { Twitter, Linkedin, Instagram, Dribbble, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "Sitemap",
    links: [
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
        title: "Portfolio",
        href: "#portfolio",
      },
      {
        title: "FAQ",
        href: "#faq",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "Telegram",
        href: "https://t.me/zenodev",
      },
    ],
  },
];

const defaultContactLines = [
  { text: "Solo AI Product Engineer" },
  { text: "Telegram: @zenodev", href: "https://t.me/zenodev" },
];

const Footer = ({
  sections = footerSections,
  tagline = "Solo AI product engineer. Production-ready MVP from idea to launch in 2-4 weeks.",
  contactTitle = "Contact Details",
  contactLines = defaultContactLines,
  copyright = "©2026 zeno.team. All Rights Reserved",
}: {
  sections?: FooterData[];
  tagline?: string;
  contactTitle?: string;
  contactLines?: { text: string; href?: string }[];
  copyright?: string;
} = {}) => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                {/* Logo */}
                <a href="#">
                  <Logo />
                </a>

                <p className="text-base font-normal text-muted-foreground">
                  {tagline}
                </p>

                {/* social links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Dribbble size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden"></div>

            {sections.map(({ title, links }, index) => (
              <div key={index} className="col-span-2">
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                  <p className="text-base font-medium text-foreground">
                    {title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <a
                          href={href}
                          className="text-base font-normal text-muted-foreground hover:text-foreground"
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <p className="text-base font-medium text-foreground">
                  {contactTitle}
                </p>
                <ul className="flex flex-col gap-3">
                  {contactLines.map((line, idx) => (
                    <li key={idx}>
                      {line.href ? (
                        <a
                          href={line.href}
                          className="text-base font-normal text-muted-foreground hover:text-foreground"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <p className="text-base font-normal text-muted-foreground">
                          {line.text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            <p className="text-sm font-normal text-muted-foreground">
              {copyright}
            </p>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
