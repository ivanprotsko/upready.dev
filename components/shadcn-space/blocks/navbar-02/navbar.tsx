"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowRightLeft,
  Bot,
  ChevronDown,
  ClipboardList,
  CloudUpload,
  CodeXml,
  RefreshCw,
  Store,
  TextAlignJustify,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type NavigationItem = {
  title: string;
  description?: string;
  icon?: any;
  showArrow?: boolean;
  href?: string;
};

export type NavigationSection = {
  title: string;
  subtitle?: string;
  href?: string;
  items?: NavigationItem[];
  layout?: "list" | "grid";
};

const navigationData: NavigationSection[] = [
  {
    title: "Products",
    subtitle: "Features",
    layout: "list",
    items: [
      {
        title: "AI",
        description: "Genrate Insights",
        icon: Bot,
        href: "#",
      },
      {
        title: "Developer Tools",
        description: "Build with powerful AI",
        icon: CodeXml,
        showArrow: true,
        href: "#",
      },
      {
        title: "API Integration",
        description: "Integrate AI tools into your app",
        icon: ArrowRightLeft,
        href: "#",
      },
      {
        title: "Cloud Sync",
        description: "Sync data across devices",
        icon: CloudUpload,
        href: "#",
      },
    ],
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Solution",
    subtitle: "Use cases",
    layout: "grid",
    items: [
      {
        title: "Marketplace",
        description: "Find and buy AI tools",
        icon: Store,
        showArrow: true,
        href: "#",
      },
      {
        title: "Guides",
        description: "Learn how to use AI tools",
        icon: ClipboardList,
        href: "#",
      },
      {
        title: "Backup",
        description: "Keep your data backed up",
        icon: RefreshCw,
        href: "#",
      },
      {
        title: "API Integration",
        description: "Integrate AI tools into your app",
        icon: ArrowRightLeft,
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    href: "#",
  },
  {
    title: "Career",
    href: "#",
  },
];

const CollaborateButton = ({ className }: { className?: string }) => (
  <Button className={`${className} h-auto px-5 py-2.5 rounded-lg`}>
    Contact us
  </Button>
);

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
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
    <div>
      <header className="bg-background">
        <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
              sticky
                ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
                : "bg-transparent border-transparent",
            )}
          >
            <a href="#">
              <Logo />
            </a>
            <div>
              <NavigationMenu className="max-lg:hidden p-0.5 rounded-full">
                <NavigationMenuList className="flex gap-0.5">
                  {navigationData.map((section) => (
                    <NavigationMenuItem key={section.title}>
                      {section.items ? (
                        <>
                          <NavigationMenuTrigger className="py-1.5 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-xs transition tracking-normal data-[state=open]:bg-muted data-[state=open]:text-foreground border-none shadow-none focus:bg-muted h-auto bg-transparent">
                            {section.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent
                            className={cn(
                              "p-2 pt-4 rounded-xl",
                              section.layout === "grid" ? "w-md" : "w-fit",
                            )}
                          >
                            {section.subtitle && (
                              <p className="text-sm font-normal text-muted-foreground px-2 pb-4">
                                {section.subtitle}
                              </p>
                            )}
                            <div className="h-px w-full bg-border" />
                            <div
                              className={cn(
                                "pt-2",
                                section.layout === "grid"
                                  ? "grid grid-cols-2"
                                  : "flex flex-col",
                              )}
                            >
                              {section.items.map((item) => (
                                <NavigationMenuLink
                                  key={item.title}
                                  href={item.href || "#"}
                                  className="flex items-center gap-3 rounded-lg hover:bg-muted/80 transition-all group mb-0 p-2"
                                >
                                  <div className="flex items-center justify-center p-3 rounded-lg bg-muted group-hover:bg-background transition-colors min-w-10 h-10">
                                    <item.icon size={16} />
                                  </div>
                                  <div className="space-y-0.5">
                                    <div className="text-sm font-medium text-foreground mb-0 flex items-center gap-1">
                                      <p>{item.title}</p>
                                      {item.showArrow && (
                                        <ArrowRight size={12} />
                                      )}
                                    </div>
                                    <p className="text-xs text-muted-foreground font-normal">
                                      {item.description}
                                    </p>
                                  </div>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          href={section.href}
                          className="px-2 lg:px-4 py-1.5 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-xs transition tracking-normal"
                        >
                          {section.title}
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <CollaborateButton className="hidden lg:flex" />

            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border border-border p-2 outline-none flex items-center justify-center cursor-pointer hover:bg-muted transition-colors h-10 w-10"
                  >
                    <TextAlignJustify size={20} />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-xs p-0">
                  <ScrollArea className="h-full px-6 py-6">
                    <SheetHeader className="mb-4 p-0">
                      <SheetTitle className="text-left">
                        <Logo />
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col">
                      {navigationData.map((section) =>
                        section.items ? (
                          <Collapsible key={section.title} className="w-full">
                            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors group/collapsible">
                              {section.title}
                              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-aria-expanded/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="flex flex-col">
                                {section.items.map((item) => (
                                  <a
                                    key={item.title}
                                    href={item.href || "#"}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="flex items-center justify-center p-2 rounded-md bg-muted group-hover:bg-background transition-colors min-w-8 h-8">
                                      <item.icon size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-sm font-medium">
                                        {item.title}
                                      </span>
                                      <span className="text-xs text-muted-foreground">
                                        {item.description}
                                      </span>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <a
                            key={section.title}
                            href={section.href}
                            className="text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {section.title}
                          </a>
                        ),
                      )}
                    </div>
                    <div className="mt-4">
                      <CollaborateButton />
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
