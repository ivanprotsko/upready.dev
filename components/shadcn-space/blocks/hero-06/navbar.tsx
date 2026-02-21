"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type NavDataItem = {
  name: string;
  href: string;
  isActive?: boolean;
  items?: {
    label: string;
    href: string;
  }[];
};

type SocialLink = {
  id: number;
  icon: LucideIcon;
  url: string;
};

type NavbarProps = {
  navData: NavDataItem[];
  socialLinks: SocialLink[];
};

const NavLink = ({ item }: { item: NavDataItem }) => {
  return (
    <li
      className={cn(
        "group flex items-center transition-all duration-500 ease-in-out w-fit",
        item.isActive ? "gap-3" : "gap-0 hover:gap-3",
      )}
    >
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out flex items-center gap-0.5",
          item.isActive
            ? "max-w-10 opacity-100"
            : "max-w-0 opacity-0 group-hover:max-w-10 group-hover:opacity-100",
        )}
      >
        <div className="w-2.5 h-6 overflow-hidden shrink-0 -rotate-180">
          <div className="w-6 h-6 rounded-full bg-orange-400" />
        </div>
        <div className="w-1.5 h-6 overflow-hidden shrink-0 -rotate-180">
          <div className="w-6 h-6 rounded-full bg-orange-400" />
        </div>
      </div>
      <a href={item.href} className="text-2xl sm:text-3xl sm:leading-10 leading-8 font-semibold transition-colors duration-300">
        {item.name}
      </a>
    </li>
  );
};

export default function Navbar({ navData, socialLinks }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border px-4 sm:px-7 lg:px-16 py-6">
          <div className="flex items-center justify-between xl:px-12">
            <a href="#">
              <Logo />
            </a>
            <div className="relative">
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                  />
                )}
              </AnimatePresence>
              {mounted ? (
                <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="outline"
                        className="rounded-full h-auto py-3 px-7.5 gap-2 bg-transparent"
                      >
                        <Menu />
                        Menu
                      </Button>
                    }
                  />
                  <DropdownMenuContent
                    align="end"
                    sideOffset={20}
                    className="min-w-xs sm:min-w-sm bg-background py-8 px-6 shadow-lg rounded-3xl border-none -mt-16 z-50"
                  >
                    <div className="flex flex-col gap-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-foreground">
                          Menu
                        </p>
                        <button
                          onClick={() => setMenuOpen(false)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <hr className="border-border" />
                      {/* Navigation */}
                      <ul className="flex flex-col gap-4 pb-4">
                        {navData.map((item, index) => (
                          <NavLink key={index} item={item} />
                        ))}
                      </ul>
                      {/* Contact */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          {socialLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground hover:bg-muted border border-border p-3 rounded-full"
                            >
                              <link.icon size={16} />
                            </a>
                          ))}
                        </div>
                        <p className="text-base font-normal text-muted-foreground w-fit">
                          © 2026 Shadcn Space
                        </p>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="rounded-full h-12 py-3 px-7.5 border border-border bg-transparent opacity-0 flex items-center gap-2">
                  <Menu size={20} />
                  Menu
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
