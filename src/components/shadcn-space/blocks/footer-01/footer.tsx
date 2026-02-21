"use client";

import { Separator } from "@/components/ui/separator";
import { Send } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Footer01Props {
  logoText: string;
  logoAccent?: string;
  logoHref: string;
  tagline: string;
  sitemapTitle: string;
  sitemapLinks: FooterLink[];
  contactTitle: string;
  contactLinks: FooterLink[];
  telegramUrl?: string;
  bottomText?: string;
}

export default function Footer01({
  logoText,
  logoAccent,
  logoHref,
  tagline,
  sitemapTitle,
  sitemapLinks,
  contactTitle,
  contactLinks,
  telegramUrl,
  bottomText,
}: Footer01Props) {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-5">
              <div className="flex flex-col gap-6">
                <Link href={logoHref} className="text-lg font-semibold tracking-tight text-foreground">
                  {logoText}
                  {logoAccent && <span className="text-accent">{logoAccent}</span>}
                </Link>
                <p className="text-base font-normal text-muted-foreground max-w-sm">{tagline}</p>
                <div className="flex items-center gap-3">
                  {telegramUrl && (
                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Send size={20} />
                    </a>
                  )}
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:block hidden" />
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">{sitemapTitle}</p>
                <ul className="flex flex-col gap-3">
                  {sitemapLinks.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">{contactTitle}</p>
                <ul className="flex flex-col gap-3">
                  {contactLinks.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-sm font-normal text-muted-foreground">
              &copy; {new Date().getFullYear()} {logoText}
            </p>
            {bottomText && (
              <p className="text-sm font-normal text-muted-foreground">{bottomText}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
