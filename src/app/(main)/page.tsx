"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
import {
  ArrowUpRight,
  Wrench,
  Rocket,
  Check,
  MessageSquareText,
  Search,
  CircleCheckBig,
  Quote,
  TrendingUp,
  Menu,
  X,
  Globe,
} from "lucide-react";

/* ──────────────────────────── HEADER ──────────────────────────── */

const navLinks = [
  { label: "Rescue", href: "/rescue" },
  { label: "Build", href: "/build" },
] as const;

function Header() {
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="inset-x-0 z-50 px-4 flex items-center justify-center sticky top-0 h-20"
    >
      <div
        className={cn(
          "w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
          sticky
            ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
            : "bg-transparent border-transparent"
        )}
      >
        <a
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          Up<span className="text-accent">Ready</span>
        </a>

        <NavigationMenu className="max-md:hidden bg-muted p-0.5 rounded-full">
          <NavigationMenuList className="flex gap-0">
            {navLinks.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <a
            href="/ru"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Globe size={14} />
            RU
          </a>

          <Button
            asChild
            className="relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hidden md:flex"
          >
            <a
              href="https://calendly.com/upready"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 transition-all duration-500">
                Book a Call
              </span>
              <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Button>

          <div className="md:hidden">
            {mounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="rounded-full border border-border p-2 block">
                    <Menu size={20} />
                    <span className="sr-only">Menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent
                  showCloseButton={false}
                  side="right"
                  className="w-full sm:w-96 p-0 border-l-0"
                >
                  <div className="flex items-center justify-between p-6">
                    <a
                      href="/"
                      className="text-base font-semibold tracking-tight text-foreground"
                    >
                      Up<span className="text-accent">Ready</span>
                    </a>
                    <SheetClose asChild>
                      <button className="rounded-full border border-border p-2.5 block">
                        <X size={16} />
                      </button>
                    </SheetClose>
                  </div>
                  <div className="flex flex-col gap-12 px-6 pb-6">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <NavigationMenu
                      orientation="vertical"
                      className="items-start flex-none"
                    >
                      <NavigationMenuList className="flex flex-col items-start gap-3">
                        {navLinks.map((item) => (
                          <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent text-muted-foreground hover:text-foreground hover:translate-x-2"
                            >
                              <div className="h-0.5 bg-primary transition-all duration-300 overflow-hidden w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100" />
                              {item.label}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="/ru"
                            className="group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent text-muted-foreground hover:text-foreground hover:translate-x-2"
                          >
                            <div className="h-0.5 bg-primary transition-all duration-300 overflow-hidden w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100" />
                            RU
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <Button asChild className="w-full h-12 rounded-full">
                      <a
                        href="https://calendly.com/upready"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book a Call
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <span className="rounded-full border border-border p-2 block opacity-0">
                <Menu size={20} />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

/* ──────────────────────────── HERO ──────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Badge
              variant="outline"
              className="px-4 py-1.5 h-8 text-sm font-normal"
            >
              AI Code Rescue & MVP Studio
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center max-w-5xl mx-auto leading-[1.1] tracking-tight">
              Your AI-built app is broken.{" "}
              <span className="text-accent">We get it working.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
              You tried Lovable, Bolt, or Cursor. It worked — until it
              didn&apos;t. Now you&apos;re stuck in a loop, burning credits, and
              nothing deploys. We&apos;ve been there. We know exactly how to fix
              it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Button
              asChild
              className="h-12 px-8 rounded-full text-base font-medium gap-2"
            >
              <a href="/rescue">
                Fix My App <ArrowUpRight size={18} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 rounded-full text-base font-medium gap-2 dark:bg-background dark:hover:bg-muted"
            >
              <a href="/build">
                Build My MVP <Rocket size={18} />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground text-center"
          >
            Trusted by founders using Lovable, Bolt.new, Replit, v0, and Cursor
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── SOUND FAMILIAR ──────────────────────── */

const painQuotes = [
  "I've burned through 200 credits and my app still crashes on deploy.",
  "The AI keeps fixing one thing and breaking three others. I'm going in circles.",
  "I hired a freelancer from Fiverr. They made it worse.",
  "I just need someone who actually understands what these AI tools generate.",
];

function SoundFamiliar() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <Badge
            variant="outline"
            className="px-3 py-1 h-7 text-sm font-normal"
          >
            Sound Familiar?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            We hear this every day
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {painQuotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 sm:p-8 rounded-2xl border-border/50 hover:border-accent/30 transition-colors duration-300">
                <CardContent className="p-0 flex gap-4">
                  <Quote
                    size={24}
                    className="shrink-0 text-accent/50 mt-0.5"
                  />
                  <p className="text-foreground text-base sm:text-lg font-normal leading-relaxed italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground text-lg mt-10"
        >
          If you&apos;re nodding — you&apos;re in the right place.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── TWO WAYS WE HELP ──────────────────── */

const services = [
  {
    icon: Wrench,
    title: "App broken? We fix AI-coded apps fast.",
    features: [
      "Stuck in the doom loop? We break you out",
      "Deploy failures, auth bugs, broken UI — we've seen it all",
      "24-72 hour turnaround on most fixes",
    ],
    price: "Starting from $500",
    cta: "Get a Free Diagnosis",
    href: "/rescue",
    accentColor: "text-orange-400",
    accentBg: "bg-orange-400/10",
  },
  {
    icon: Rocket,
    title: "Need an MVP? From idea to launch in weeks.",
    features: [
      "Production-ready app, not a fragile prototype",
      "Clean code, proper auth, real deployment",
      "You own everything — code, repo, data",
    ],
    price: "Starting from $2,500",
    cta: "Book a Discovery Call",
    href: "/build",
    accentColor: "text-accent",
    accentBg: "bg-accent/10",
  },
];

function Services() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="px-3 py-1 h-7 text-sm font-normal"
          >
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Two ways we help
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full p-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8 sm:p-10 flex flex-col gap-8 h-full">
                  <div className="flex flex-col gap-6 flex-1">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center",
                        service.accentBg
                      )}
                    >
                      <service.icon size={28} className={service.accentColor} />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                      {service.title}
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <Check
                            size={18}
                            className={cn("shrink-0 mt-0.5", service.accentColor)}
                          />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xl font-semibold">{service.price}</p>
                    <Button
                      asChild
                      className="rounded-full h-12 px-6 gap-2 w-full sm:w-auto"
                    >
                      <a href={service.href}>
                        {service.cta} <ArrowUpRight size={16} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── HOW IT WORKS ──────────────────── */

const steps = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Tell us what's wrong",
    description:
      "Book a call or describe your issue. Takes 15 minutes.",
  },
  {
    icon: Search,
    number: "02",
    title: "We diagnose and fix",
    description:
      "Our team audits your code, identifies root causes, and delivers a working solution.",
  },
  {
    icon: CircleCheckBig,
    number: "03",
    title: "You're up and ready",
    description: "Working app. Deployed. Documented. Yours.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="px-3 py-1 h-7 text-sm font-normal"
          >
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Three simple steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full p-8 rounded-2xl group hover:border-accent/30 transition-colors duration-300">
                <CardContent className="p-0 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <step.icon size={24} className="text-accent" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── PLATFORMS ──────────────────── */

const platforms = [
  "Lovable",
  "Bolt.new",
  "Replit",
  "v0",
  "Cursor",
  "Supabase",
  "Vercel",
  "Netlify",
];

function Platforms() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <Badge
            variant="outline"
            className="px-3 py-1 h-7 text-sm font-normal"
          >
            Platforms
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Platforms we work with
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg text-center max-w-xl">
            We speak every AI coding platform — and know where each one breaks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            >
              <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-border bg-card hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-default">
                <span className="text-sm sm:text-base font-medium text-foreground">
                  {platform}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────── MARKET STATS ──────────────────── */

const stats = [
  {
    value: "~8M",
    label: "Lovable users creating 100,000 new projects every day",
  },
  {
    value: "41%",
    label: "of all code written today is AI-generated",
  },
  {
    value: "95%",
    label: "of developers spend extra time fixing what AI produces",
  },
  {
    value: "300%",
    label: "growth in demand for AI code cleanup services in 6 months",
  },
  {
    value: "New",
    label:
      "Fiverr created a dedicated 'Vibe Coding' category to keep up",
  },
];

function MarketStats() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="px-3 py-1 h-7 text-sm font-normal flex items-center gap-1.5"
          >
            <TrendingUp size={14} />
            Market
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center max-w-3xl">
            The market is moving fast
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                index === stats.length - 1 && stats.length % 2 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              )}
            >
              <Card className="h-full p-6 sm:p-8 rounded-2xl hover:border-accent/30 transition-colors duration-300">
                <CardContent className="p-0 flex flex-col gap-3">
                  <span className="text-3xl sm:text-4xl font-bold text-accent">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground text-lg mt-10"
        >
          You&apos;re not alone. And you don&apos;t have to figure it out
          yourself.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── CTA ──────────────────── */

function CallToAction() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="relative overflow-hidden min-h-80 flex items-center justify-center px-6 py-16 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 dark:before:from-accent/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-orange-400/10 dark:before:to-60% before:bg-linear-to-r before:rounded-full before:-z-10">
          <motion.div
            initial={{ y: "5%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6 items-center mx-auto"
          >
            <div className="flex flex-col gap-3 items-center text-center">
              <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl">
                Ready to get your app{" "}
                <span className="text-accent">up and ready?</span>
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
                Stop burning credits. Stop going in circles. Get a human who
                understands AI-generated code — and knows how to make it work.
              </p>
            </div>

            <Button
              asChild
              className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
            >
              <a
                href="https://calendly.com/upready"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 transition-all duration-500">
                  Book a Free Call
                </span>
                <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── FOOTER ──────────────────── */

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Rescue", href: "/rescue" },
  { label: "Build", href: "/build" },
] as const;

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 px-2">
            <div className="flex flex-col gap-3">
              <a
                href="/"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Up<span className="text-accent">Ready</span>
              </a>
              <p className="text-sm text-muted-foreground max-w-xs">
                We fix AI-coded apps and build MVPs that actually work.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/ru"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Globe size={14} />
                RU
              </a>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} UpReady. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with AI from Bali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────── PAGE ──────────────────── */

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <SoundFamiliar />
        <Services />
        <HowItWorks />
        <Platforms />
        <MarketStats />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
