"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import {
  ArrowUpRight,
  ArrowRight,
  Shield,
  Zap,
  AlertTriangle,
  Check,
  RefreshCcw,
  CreditCard,
  CloudOff,
  Scissors,
  Lock,
  Rocket,
  Bug,
  Globe,
  Database,
  Gauge,
  Code2,
  Send,
  PlusIcon,
  MessageSquare,
  DollarSign,
} from "lucide-react";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const CALENDLY_URL = "https://calendly.com/upready";

// ─── HEADER ──────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Home", href: "/" },
  { label: "Build", href: "/build" },
];

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
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          UpReady
        </Link>

        <NavigationMenu className="max-md:hidden bg-muted p-0.5 rounded-full">
          <NavigationMenuList className="flex gap-0">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Link
            href="/ru/rescue"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors max-md:hidden"
          >
            RU
          </Link>

          <Button
            asChild
            className="relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hidden md:flex"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 transition-all duration-500">
                Get a Free Diagnosis
              </span>
              <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Button>

          <div className="md:hidden">
            {mounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <span className="rounded-full border border-border p-2 block">
                    <Icon
                      icon="solar:hamburger-menu-linear"
                      width={20}
                      height={20}
                    />
                    <span className="sr-only">Menu</span>
                  </span>
                </SheetTrigger>
                <SheetContent
                  showCloseButton={false}
                  side="right"
                  className="w-full sm:w-96 p-0 border-l-0"
                >
                  <div className="flex items-center justify-between p-6">
                    <Link
                      href="/"
                      className="text-base font-semibold tracking-tight text-foreground"
                    >
                      UpReady
                    </Link>
                    <SheetClose>
                      <span className="rounded-full border border-border p-2.5 block">
                        <Icon icon="lucide:x" width={16} height={16} />
                      </span>
                    </SheetClose>
                  </div>
                  <div className="flex flex-col gap-12 px-6 pb-6">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <NavigationMenu
                      orientation="vertical"
                      className="items-start flex-none"
                    >
                      <NavigationMenuList className="flex flex-col items-start gap-3">
                        {navItems.map((item) => (
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
                            href="/ru/rescue"
                            onClick={() => setIsOpen(false)}
                            className="group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent text-muted-foreground hover:text-foreground hover:translate-x-2"
                          >
                            <div className="h-0.5 bg-primary transition-all duration-300 overflow-hidden w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100" />
                            RU
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <Button asChild className="rounded-full h-12 w-full">
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get a Free Diagnosis
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <span className="rounded-full border border-border p-2 block opacity-0">
                <Icon
                  icon="solar:hamburger-menu-linear"
                  width={20}
                  height={20}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section>
      <div className="w-full relative">
        <div className="relative w-full pt-0 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r dark:before:from-red-900/20 dark:before:via-black dark:before:to-orange-900/20 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col max-w-4xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Badge
                    variant="outline"
                    className="text-sm h-auto py-1.5 px-4 border-0 outline outline-border gap-2"
                  >
                    <AlertTriangle className="size-4 text-amber-500" />
                    AI App Rescue Service
                  </Badge>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="lg:text-7xl md:text-6xl text-4xl font-medium leading-11 md:leading-16 lg:leading-20"
                >
                  Your AI-coded app is broken.{" "}
                  <span className="text-primary">
                    We&apos;ll have it working in 72 hours.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-lg font-normal max-w-2xl text-muted-foreground"
                >
                  We rescue apps built with Lovable, Bolt.new, Replit, v0,
                  Cursor, and other AI coding tools. No judgment. No lectures.
                  We fix it and get you moving.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <Button
                  asChild
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 transition-all duration-500">
                      Get a Free Diagnosis
                    </span>
                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowRight size={16} />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEMS ────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: RefreshCcw,
    title: "The Doom Loop",
    description:
      "You ask the AI to fix a bug. It fixes it \u2014 and breaks two other things. You fix those \u2014 and the original bug is back. Round and round. We break the cycle by reading the actual code, not prompting blindly.",
  },
  {
    icon: CreditCard,
    title: "Credit Burnout",
    description:
      "You\u2019ve spent $50, $100, $200 in platform credits. Every generation makes things worse. The sunk cost keeps you going. Stop. We can fix in hours what the AI has been failing at for days.",
  },
  {
    icon: CloudOff,
    title: "Deploy Disaster",
    description:
      "Everything works in preview. You hit deploy \u2014 and it crashes. Or the auth breaks. Or the database won\u2019t connect. Deployment is where AI tools struggle most. It\u2019s where we excel.",
  },
  {
    icon: Scissors,
    title: "The Frankenstein App",
    description:
      "50 AI iterations. Code from three different approaches stitched together. No one \u2014 not even the AI \u2014 knows what\u2019s going on anymore. We untangle the mess and make it maintainable.",
  },
];

function Problems() {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
            >
              <Badge
                variant="outline"
                className="px-3 py-1 h-auto text-sm border-0 outline outline-border"
              >
                Sound familiar?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                We&apos;ve seen your exact problem before
              </h2>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {problems.map((problem, index) => {
                const IconComp = problem.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                        filter: "blur(4px)",
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card className="py-10 h-full border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary hover:shadow-lg">
                      <CardContent className="px-8 flex flex-col gap-6">
                        <IconComp
                          className="w-8 h-8 text-primary"
                          strokeWidth={1.2}
                        />
                        <div className="flex flex-col gap-3">
                          <h6 className="text-xl font-semibold">
                            {problem.title}
                          </h6>
                          <p className="text-base font-normal text-muted-foreground">
                            {problem.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WHAT WE FIX ─────────────────────────────────────────────────────────────

const fixes = [
  {
    icon: Lock,
    title: "Authentication & Supabase issues",
    description:
      "Broken login, RLS misconfigurations, session problems",
  },
  {
    icon: Rocket,
    title: "Deployment failures",
    description:
      "Vercel, Netlify, custom hosting, environment variables",
  },
  {
    icon: Bug,
    title: "UI/UX bugs",
    description:
      "Layout breaks, responsive design failures, styling conflicts",
  },
  {
    icon: Globe,
    title: "API integration errors",
    description: "Third-party APIs, webhooks, CORS issues",
  },
  {
    icon: Database,
    title: "Database problems",
    description:
      "Schema errors, failed migrations, data not saving",
  },
  {
    icon: Gauge,
    title: "Performance issues",
    description:
      "Slow loads, memory leaks, unnecessary re-renders",
  },
  {
    icon: Code2,
    title: "Code cleanup",
    description:
      "Refactoring AI-generated spaghetti into maintainable code",
  },
];

function WhatWeFix() {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
            >
              <Badge
                variant="outline"
                className="px-3 py-1 h-auto text-sm border-0 outline outline-border"
              >
                Our expertise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                What we fix
              </h2>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {fixes.map((fix, index) => {
                const IconComp = fix.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                        filter: "blur(4px)",
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card className="h-full border border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                          <IconComp className="size-5 text-primary" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-sm font-semibold">{fix.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {fix.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-muted-foreground text-base italic"
            >
              If it was built with AI and it&apos;s broken &mdash; we fix it.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── HOW RESCUE WORKS ────────────────────────────────────────────────────────

const steps = [
  {
    icon: MessageSquare,
    title: "Submit your issue",
    description:
      "Describe what\u2019s broken \u2014 or book a 15-minute call.",
  },
  {
    icon: Shield,
    title: "Free diagnosis",
    description:
      "We audit your app and identify root causes. No charge.",
  },
  {
    icon: DollarSign,
    title: "Get a quote",
    description:
      "Fixed price based on complexity. No hourly billing surprises.",
  },
  {
    icon: Zap,
    title: "We fix it",
    description:
      "24\u201372 hours for most issues. You get progress updates throughout.",
  },
  {
    icon: Check,
    title: "You\u2019re up and ready",
    description:
      "Working app. Deployed. Plus documentation of every change.",
  },
];

function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 sm:py-20">
          <div className="flex flex-col gap-12 sm:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
            >
              <Badge
                variant="outline"
                className="px-3 py-1 h-auto text-sm border-0 outline outline-border"
              >
                Simple process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                How Rescue works
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto w-full"
            >
              <Card className="p-6 sm:p-8 shadow-none rounded-2xl">
                <CardContent className="p-0 flex flex-col gap-6 sm:gap-8">
                  {steps.map((step, index) => {
                    const IconComp = step.icon;
                    return (
                      <motion.div key={index} variants={itemVariants}>
                        <div className="flex gap-5">
                          <div className="flex flex-col items-center gap-2">
                            <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center shrink-0">
                              <span className="text-sm font-bold text-primary">
                                {index + 1}
                              </span>
                            </div>
                            {index < steps.length - 1 && (
                              <div className="w-px flex-1 bg-border" />
                            )}
                          </div>
                          <div className="flex flex-col gap-1.5 pb-8">
                            <div className="flex items-center gap-2">
                              <IconComp className="size-4 text-primary" />
                              <p className="text-lg font-semibold">
                                {step.title}
                              </p>
                            </div>
                            <p className="text-base text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────

const pricingPlans = [
  {
    name: "Simple Fix",
    price: "$500",
    period: "from",
    description: "Single bug, configuration issue, deployment problem.",
    features: [
      "One focused issue",
      "24\u201348 hour turnaround",
      "14-day guarantee",
      "Full documentation",
    ],
    featured: false,
    cta: "Get a Free Diagnosis",
    href: CALENDLY_URL,
    external: true,
  },
  {
    name: "Deep Rescue",
    price: "$1,500",
    period: "from",
    description:
      "Multiple connected issues. Code refactoring. Auth overhaul.",
    features: [
      "Multiple issue resolution",
      "Code refactoring included",
      "48\u201372 hour turnaround",
      "14-day guarantee",
      "Full documentation",
      "Priority support",
    ],
    featured: true,
    cta: "Get a Free Diagnosis",
    href: CALENDLY_URL,
    external: true,
  },
  {
    name: "Full Rebuild",
    price: "Custom",
    period: "quote",
    description:
      "The code is beyond repair. We rebuild the core from scratch.",
    features: [
      "Complete code rewrite",
      "Modern architecture",
      "Production deployment",
      "14-day guarantee",
      "Full documentation",
      "Ongoing support options",
    ],
    featured: false,
    cta: "Learn About Build",
    href: "/build",
    external: false,
  },
];

function Pricing() {
  return (
    <section>
      <div className="bg-background py-10 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 xl:px-16 lg:py-20 sm:py-16 py-8">
          <div className="flex flex-col gap-8 md:gap-12 items-center justify-center w-full">
            <div className="flex flex-col gap-4 justify-center items-center">
              <Badge
                variant="outline"
                className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7"
              >
                Transparent pricing
              </Badge>
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-foreground text-3xl sm:text-5xl font-medium">
                  Pricing
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
              {pricingPlans.map((plan, index) => {
                const isFeatured = plan.featured;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -60 },
                      visible: (i: number) => ({
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: i * 0.25,
                          duration: 0.6,
                          ease: "easeInOut",
                        },
                      }),
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    className={cn(
                      "relative h-full w-full",
                      isFeatured && "z-10 scale-102"
                    )}
                  >
                    {isFeatured && (
                      <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
                        <div className="absolute -inset-full blur-xs animate-spin [animation-duration:2s] bg-conic from-blue-500 via-red-500 to-teal-400" />
                        <div className="absolute inset-0.5 rounded-2xl bg-card" />
                      </div>
                    )}
                    <Card
                      className={cn(
                        "relative h-full rounded-2xl p-8 gap-8",
                        isFeatured
                          ? "border-0 ring-0"
                          : "border border-border"
                      )}
                    >
                      <div className="p-0 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-medium text-primary">
                            {plan.name}
                          </h3>
                          {isFeatured && (
                            <Badge className="py-1 px-3 text-sm font-medium h-7 flex items-center gap-1.5 [&>svg]:size-4!">
                              <Zap size={16} /> Most Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-base font-normal text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>
                      <CardContent className="flex flex-col flex-1 gap-8 p-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-foreground text-4xl sm:text-5xl font-medium">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground text-base font-normal">
                            {plan.period}
                          </span>
                        </div>
                        <Separator />
                        <ul className="flex flex-col gap-4 flex-1">
                          {plan.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-3 text-base text-muted-foreground"
                            >
                              <Check className="size-4 text-primary shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          className="w-full h-12 rounded-full"
                          variant={isFeatured ? "default" : "outline"}
                        >
                          {plan.external ? (
                            <a
                              href={plan.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {plan.cta}
                            </a>
                          ) : (
                            <Link href={plan.href}>{plan.cta}</Link>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Every project starts with a free 15-minute diagnosis call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "What platforms do you support?",
    answer:
      "Lovable, Bolt.new, Replit, v0, Cursor \u2014 and any app built with React, Next.js, Supabase, or standard web technologies.",
  },
  {
    question: "How fast can you fix my app?",
    answer:
      "Most fixes take 24\u201372 hours. Complex rescues can take up to a week.",
  },
  {
    question: "What if the problem comes back?",
    answer: "Every fix comes with a 14-day guarantee.",
  },
  {
    question: "Do I keep ownership of the code?",
    answer: "100%. Your code, your repo, your app.",
  },
  {
    question: "What if my app needs more than a fix?",
    answer:
      "We\u2019ll recommend our Build service \u2014 or help you figure out the best path forward.",
  },
  {
    question:
      "Can you work with a project that a freelancer already tried to fix?",
    answer:
      "Yes. We\u2019ve rescued apps that have been through three different freelancers.",
  },
];

function FAQ() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            FAQ
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">
            Frequently asked questions
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-6"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent/10 transition-colors"
            >
              <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                {item.question}
                <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="p-0 text-muted-foreground text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section>
      <div className="sm:py-20 py-8">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="relative overflow-hidden min-h-96 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 dark:before:from-red-500/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-400/10 dark:before:to-60% before:bg-linear-to-r before:rounded-full before:-z-10">
            <motion.div
              initial={{ y: "5%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-6 items-center mx-auto"
            >
              <div className="flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl md:text-5xl font-medium">
                  Stop burning credits.
                  <br />
                  Get your app fixed by humans.
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                  A 15-minute call is all it takes to know exactly what&apos;s
                  wrong and what it costs to fix.
                </p>
              </div>
              <Button
                asChild
                className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 transition-all duration-500">
                    Book a Free Diagnosis
                  </span>
                  <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-5">
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  UpReady
                </Link>
                <p className="text-base font-normal text-muted-foreground max-w-sm">
                  We rescue AI-coded apps and build production-ready software.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Send size={20} />
                </a>
              </div>
            </div>
            <div className="col-span-1 lg:block hidden" />
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">
                  Services
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/rescue"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Rescue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/build"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Build
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">
                  Contact
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Book a Call
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />
          <p className="text-sm font-normal text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} UpReady
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function RescuePage() {
  useEffect(() => {
    document.title = "Fix Your AI-Coded App in 72 Hours \u2014 UpReady Rescue";
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Problems />
        <WhatWeFix />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
