"use client";

import { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const TELEGRAM_URL = "https://t.me/ivanprotsko";

const navKeys = [
  { key: "problem", href: "#problem" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "pricing", href: "#pricing" },
  { key: "portfolio", href: "#portfolio" },
  { key: "faq", href: "#faq" },
] as const;

const ZenoLogo = () => (
  <span className="text-base font-semibold tracking-tight text-foreground">
    zeno<span className="text-accent">.</span>team
  </span>
);

const Header = () => {
  const t = useTranslations("header");
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="inset-x-0 z-50 px-4 flex items-center justify-center sticky top-0 h-20"
    >
      <div
        className={cn(
          "w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
          sticky
            ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
            : "bg-transparent border-transparent",
        )}
      >
        <a href="#"><ZenoLogo /></a>

        <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
          <NavigationMenuList className="flex gap-0">
            {navKeys.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal"
                >
                  {t(`nav.${item.key}`)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button asChild className="relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hidden lg:flex">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 transition-all duration-500">{t("cta")}</span>
              <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Button>

          <div className="lg:hidden">
            {mounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <span className="rounded-full border border-border p-2 block">
                    <Icon icon="solar:hamburger-menu-linear" width={20} height={20} />
                    <span className="sr-only">{t("menu")}</span>
                  </span>
                </SheetTrigger>
                <SheetContent showCloseButton={false} side="right" className="w-full sm:w-96 p-0 border-l-0">
                  <div className="flex items-center justify-between p-6">
                    <a href="#"><ZenoLogo /></a>
                    <SheetClose>
                      <span className="rounded-full border border-border p-2.5 block">
                        <Icon icon="lucide:x" width={16} height={16} />
                      </span>
                    </SheetClose>
                  </div>
                  <div className="flex flex-col gap-12 px-6 pb-6">
                    <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
                    <NavigationMenu orientation="vertical" className="items-start flex-none">
                      <NavigationMenuList className="flex flex-col items-start gap-3">
                        {navKeys.map((item) => (
                          <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent text-muted-foreground hover:text-foreground hover:translate-x-2"
                            >
                              <div className="h-0.5 bg-primary transition-all duration-300 overflow-hidden w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100" />
                              {t(`nav.${item.key}`)}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} zeno.team</p>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <span className="rounded-full border border-border p-2 block opacity-0">
                <Icon icon="solar:hamburger-menu-linear" width={20} height={20} />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
