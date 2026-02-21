"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { X, Menu, Twitter, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo/logo";

export type NavigationSection = {
  name: string;
  href: string;
  isActive?: boolean;
};

const navigationData: NavigationSection[] = [
  {
    name: "Home",
    href: "#",
    isActive: true,
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Testimonials",
    href: "#",
  },
  {
    name: "Newsletter",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const NavLink = ({
  item,
  onClick,
}: {
  item: NavigationSection;
  onClick?: () => void;
}) => {
  return (
    <li
      className={cn(
        "group flex items-center transition-all duration-500 ease-in-out w-fit",
        item.isActive ? "gap-3" : "gap-0 hover:gap-3",
      )}
    >
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out flex items-center",
          item.isActive
            ? "max-w-6 opacity-100"
            : "max-w-0 opacity-0 group-hover:max-w-6 group-hover:opacity-100",
        )}
      >
        <div className="w-6 h-px rounded-full bg-blue-500" />
      </div>
      <a
        href={item.href}
        onClick={onClick}
        className={cn(
          "text-2xl sm:text-3xl sm:leading-10 leading-8 font-semibold transition-colors duration-300",
          item.isActive ? "text-blue-500" : "text-foreground hover:text-blue-500",
        )}
      >
        {item.name}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="border-b border-border sticky top-0 z-20 bg-background backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto sm:px-16 px-4 py-4 w-full">
        <nav className="flex items-center justify-between ">
          <a href="#">
            <Logo/>
          </a>

          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="flex items-center gap-6">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.name}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "p-0 text-base font-normal hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent transition-colors",
                      navItem.isActive
                        ? "text-blue-500"
                        : "text-foreground hover:text-blue-500",
                    )}
                  >
                    {navItem.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 max-lg:hidden">
            <Button variant={"outline"} className="h-auto px-5 py-2.5 rounded-full text-foreground cursor-pointer">
              Socials
            </Button>
            <Button className="h-auto px-5 py-2.5 rounded-full cursor-pointer">
              Start Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden relative">
            {mounted ? (
              <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                <AnimatePresence>
                  {menuOpen && (
                    <DropdownMenuPortal>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                      />
                    </DropdownMenuPortal>
                  )}
                </AnimatePresence>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="outline"
                      className="rounded-full h-auto p-2.5 gap-2 bg-transparent text-foreground border-border cursor-pointer"
                    >
                      <Menu className="w-4 h-4" />
                    </Button>
                  }
                />
                <DropdownMenuContent
                  align="end"
                  sideOffset={10}
                  className="min-w-xs sm:min-w-sm bg-background py-8 px-6 shadow-2xl rounded-3xl border border-border -mt-12 z-50 dark"
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-foreground">Menu</p>
                      <Button
                        onClick={() => setMenuOpen(false)}
                        className="text-muted-foreground hover:text-foreground cursor-pointer"
                      >
                        <X size={20} />
                      </Button>
                    </div>
                    <hr className="border-border" />
                    {/* Navigation */}
                    <ul className="flex flex-col gap-4 pb-4">
                      {navigationData.map((item, index) => (
                        <NavLink
                          key={index}
                          item={item}
                          onClick={() => setMenuOpen(false)}
                        />
                      ))}
                    </ul>
                    {/* Footer / Socials */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        {[
                          { icon: Twitter, href: "#" },
                          { icon: Github, href: "#" },
                          { icon: Linkedin, href: "#" },
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            className="text-foreground hover:bg-accent border border-border p-2.5 rounded-full transition-colors"
                          >
                            <social.icon size={16} />
                          </a>
                        ))}
                      </div>
                      <p className="text-sm font-normal text-muted-foreground">
                        © 2026 Shadcn Space
                      </p>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="rounded-full h-9 w-9 border border-border bg-transparent opacity-0 flex items-center justify-center">
                <Menu className="w-4 h-4" />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

