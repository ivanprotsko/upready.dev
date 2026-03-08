"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Bot, BarChart3, BookOpen, Calendar, ChevronDown, FileText, Kanban, Mail, PenTool, ShieldCheck, ShoppingCart, TrendingUp, Users, TextAlignJustify, } from "lucide-react";
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
    title: "Services",
    subtitle: "Self-hosted tools deployed on your server",
    layout: "grid",
    items: [
      {
        title: "AI Assistant",
        description: "Your own ChatGPT trained on your data",
        icon: Bot,
        href: "/services/ai-assistant",
      },
      {
        title: "CRM",
        description: "Customer relationship management",
        icon: Users,
        href: "/services/crm",
      },
      {
        title: "Dashboards",
        description: "Business intelligence & analytics",
        icon: BarChart3,
        href: "/services/dashboards",
      },
      {
        title: "Booking",
        description: "Scheduling & appointments",
        icon: Calendar,
        href: "/services/booking",
      },
      {
        title: "E-Commerce",
        description: "Headless online store",
        icon: ShoppingCart,
        href: "/services/ecommerce",
      },
      {
        title: "Email Marketing",
        description: "Newsletters & campaigns",
        icon: Mail,
        href: "/services/email-marketing",
      },
      {
        title: "Client Portal",
        description: "Branded client workspace",
        icon: ShieldCheck,
        href: "/services/client-portal",
      },
      {
        title: "Knowledge Base",
        description: "Internal docs & wiki",
        icon: BookOpen,
        href: "/services/knowledge-base",
      },
      {
        title: "Analytics",
        description: "Privacy-first web analytics",
        icon: TrendingUp,
        href: "/services/analytics",
      },
      {
        title: "E-Signature",
        description: "Document signing platform",
        icon: PenTool,
        href: "/services/e-signature",
      },
      {
        title: "Forms",
        description: "Surveys & data collection",
        icon: FileText,
        href: "/services/forms",
      },
      {
        title: "Project Management",
        description: "Tasks, sprints & roadmaps",
        icon: Kanban,
        href: "/services/project-management",
      },
    ],
  },
  {
    title: "How It Works",
    href: "/#how-it-works",
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
];

const CollaborateButton = ({ className }: { className?: string }) => (
  <Button asChild className={cn("relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden", className)}>
    <a href="https://calendly.com/val-upready/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
      <span className="relative z-10 transition-all duration-500">
        Book a Call
      </span>
      <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </a>
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
      <header className="sticky top-0 z-50 bg-background">
        <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
              sticky
                ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
                : "bg-transparent border-transparent",
            )}
          >
            <a href="/">
              <Logo />
            </a>
            <div>
              <NavigationMenu className="max-lg:hidden p-0.5 rounded-full">
                <NavigationMenuList className="flex gap-0.5">
                  {navigationData.map((section) => (
                    <NavigationMenuItem key={section.title}>
                      {section.items ? (
                        <>
                          <NavigationMenuTrigger className="py-1.5 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-xs transition tracking-normal data-[state=open]:bg-muted data-[state=open]:text-foreground border-none shadow-none focus:bg-muted h-auto bg-transparent cursor-pointer">
                            {section.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent
                            className={cn(
                              "p-2 pt-4 rounded-xl",
                              section.layout === "grid" ? "w-[640px]" : "w-fit",
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
                <SheetTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border border-border p-2 outline-none flex items-center justify-center cursor-pointer hover:bg-muted transition-colors h-10 w-10"
                    />
                  }
                >
                  <TextAlignJustify size={20} />
                  <span className="sr-only">Toggle Menu</span>
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
