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
import { Separator } from "@/components/ui/separator";
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
    <header
      className={cn(
        "inset-x-0 z-50 flex items-center justify-center sticky top-0 h-20 dark:bg-background border-border border-b",
        sticky && "shadow-md dark:shadow-foreground/10",
        className,
      )}
    >
      <div
        className={
          "max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 w-full flex items-center h-fit justify-between"
        }
      >
        <div className="flex items-center justify-center gap-4">
          {/* Logo */}
          <div>
            <a href="#">
              <Logo className="gap-3" />
            </a>
          </div>

          <Separator
            orientation="vertical"
            className="h-4 data-[orientation=vertical]:self-center max-lg:hidden"
          />

          {/* Desktop Navigation */}
          <div>
            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList className="gap-6">
                {navigationData.map((navItem) => (
                  <NavigationMenuItem key={navItem.title}>
                    <NavigationMenuLink
                      href={navItem.href}
                      className={cn(
                        "p-0 text-base font-normal text-foreground hover:text-blue-500 hover:bg-transparent",
                        navItem.isActive && "text-blue-500",
                      )}
                    >
                      {navItem.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="flex items-center gap-2 max-lg:hidden">
          <Button
            size="lg"
            variant="outline"
            className="px-5 py-2.5 rounded-lg dark:bg-background dark:hover:bg-muted cursor-pointer"
          >
            Sign in
          </Button>
          <Button size="lg" className="px-5 py-2.5 rounded-lg cursor-pointer">
            Register
          </Button>
        </div>

        <div className="lg:hidden">
            {mounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <div className="w-9 h-9 flex items-center justify-center border rounded-lg">
                    <Menu size={16} className="text-foreground"/>
                    <span className="sr-only">Menu</span>
                  </div>
                </SheetTrigger>

                <SheetContent
                  showCloseButton={false}
                  side="right"
                  className="w-full sm:w-96 p-0 border-l-0"
                >
                  <div className="flex items-center justify-between px-4 pt-5 pb-2">
                    <a href="#">
                      <Logo className="gap-2" />
                    </a>
                    <SheetClose>
                      <div className="w-9 h-9 flex items-center justify-center border rounded-lg cursor-pointer">
                        <X size={16} className="shrink-0 text-foreground" />
                      </div>
                    </SheetClose>
                  </div>

                  <div className="flex flex-col gap-5 px-6 pb-6 overflow-y-auto">
                    <div className="flex flex-col gap-8">
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                      <NavigationMenu
                        orientation="vertical"
                        className="items-start flex-none"
                      >
                        <NavigationMenuList className="flex flex-col items-start gap-3">
                          {navigationData.map((item) => (
                            <NavigationMenuItem key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className={cn(
                                  "p-0 text-xl font-medium text-foreground hover:text-blue-500 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                                  item.isActive && "text-blue-500",
                                )}
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          ))}
                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>

                    <div className="flex sm:flex-row flex-col sm:items-center items-start gap-2">
                      <Button
                        size="lg"
                        variant="outline"
                        className="px-5 py-2.5 rounded-lg dark:bg-background dark:hover:bg-muted sm:w-fit w-full cursor-pointer"
                      >
                        Sign in
                      </Button>
                      <Button
                        size="lg"
                        className="px-5 py-2.5 rounded-lg sm:w-fit w-full cursor-pointer"
                      >
                        Register
                      </Button>
                  </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="w-9 h-9 flex items-center justify-center border rounded-lg opacity-0 cursor-pointer">
                <Menu size={16} />
              </div>
            )}
          </div>
      </div>
    </header>
  );
};

export default Navbar;
