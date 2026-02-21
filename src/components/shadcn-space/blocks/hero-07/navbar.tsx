"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo/logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type NavbarProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const Navbar = ({ navigationData, className }: NavbarProps) => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  const [mounted, setMounted] = useState(false);

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
    <header
      className={cn(
        "inset-x-0 z-50 flex items-center justify-center sticky top-0 h-20 bg-background",
        sticky && "shadow-md dark:shadow-foreground/10",
        className,
      )}
    >
      <div
        className={
          "max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 w-full flex items-center h-fit justify-between"
        }
      >
        {/* Logo */}
        <div>
          <a href="#">
            <Logo className="gap-3" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="gap-2">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "px-3 py-2 text-base font-normal rounded-lg text-muted-foreground hover:text-foreground focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                      navItem.isActive && "text-foreground bg-accent",
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="flex gap-4">
          <Button
            size="lg"
            variant="outline"
            className="hidden lg:flex px-5 py-2.5 rounded-lg w-fit dark:bg-background dark:hover:bg-muted"
          >
            Book a Demo
          </Button>

          <div className="lg:hidden">
            {mounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <div className="w-9 h-9 flex items-center justify-center border rounded-lg cursor-pointer">
                    <Menu size={16} />
                    <span className="sr-only">Menu</span>
                  </div>
                </SheetTrigger>

                <SheetContent showCloseButton={false} side="right">
                  <div className="flex items-center justify-between px-4 pt-5 pb-2">
                    <a href="#">
                      <Logo className="gap-2" />
                    </a>
                    <SheetClose>
                      <div className="w-9 h-9 flex items-center justify-center border rounded-lg cursor-pointer">
                        <X size={16} className="shrink-0" />
                      </div>
                    </SheetClose>
                  </div>

                  <div className="px-4 flex flex-col gap-5">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <NavigationMenu
                      orientation="vertical"
                      className="items-start flex-none"
                    >
                      <NavigationMenuList className="flex flex-col items-start gap-1.5">
                        {navigationData.map((item) => (
                          <NavigationMenuItem key={item.title}>
                            <SheetClose>
                              <NavigationMenuLink
                                href={item.href}
                                className={cn(
                                  "px-3 py-2 text-base font-normal rounded-lg text-muted-foreground hover:text-foreground focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                                  item.isActive && "text-foreground bg-accent",
                                )}
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </SheetClose>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-5 py-2.5 rounded-lg dark:bg-background dark:hover:bg-muted"
                    >
                      Book a Demo
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="w-9 h-9 flex items-center justify-center border rounded-lg opacity-0">
                <Menu size={16} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
