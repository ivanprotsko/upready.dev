"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export interface NavbarProps {
  logoText: string;
  logoAccent?: string;
  logoHref: string;
  navLinks: { title: string; href: string }[];
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  langHref: string;
  langLabel: string;
}

export default function Navbar({
  logoText,
  logoAccent,
  logoHref,
  navLinks,
  ctaText,
  ctaHref,
  ctaExternal,
  langHref,
  langLabel,
}: NavbarProps) {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = useCallback(() => setSticky(window.scrollY >= 50), []);
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <header className="bg-background">
      <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
        <nav
          className={cn(
            "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
            sticky
              ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
              : "bg-transparent border-transparent"
          )}
        >
          <Link href={logoHref} className="text-lg font-semibold tracking-tight">
            {logoText}
            {logoAccent && <span className="text-accent">{logoAccent}</span>}
          </Link>

          <NavigationMenu className="max-md:hidden bg-muted p-0.5 rounded-full">
            <NavigationMenuList className="flex gap-0">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className="px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={langHref}
                  className="px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal flex items-center gap-1.5"
                >
                  <Globe className="size-3.5" />
                  {langLabel}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden md:flex relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden"
            >
              {ctaExternal ? (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 transition-all duration-500">{ctaText}</span>
                  <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              ) : (
                <Link href={ctaHref}>
                  <span className="relative z-10 transition-all duration-500">{ctaText}</span>
                  <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              )}
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button type="button" className="rounded-full border border-border p-2">
                  <Menu size={20} />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-12">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href={langHref}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-2"
                  >
                    <Globe className="size-4" />
                    {langLabel}
                  </Link>
                  <Button asChild className="rounded-full h-10 mt-4">
                    {ctaExternal ? (
                      <a href={ctaHref} target="_blank" rel="noopener noreferrer">{ctaText}</a>
                    ) : (
                      <Link href={ctaHref}>{ctaText}</Link>
                    )}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
