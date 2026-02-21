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

const CALENDLY_URL = "https://calendly.com/upready";

// ─── HEADER ──────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Главная", href: "/ru" },
  { label: "Build", href: "/ru/build" },
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
          href="/ru"
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
            href="/rescue"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors max-md:hidden"
          >
            EN
          </Link>

          <Button
            asChild
            className="relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hidden md:flex"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 transition-all duration-500">
                Бесплатная диагностика
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
                      href="/ru"
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
                            href="/rescue"
                            onClick={() => setIsOpen(false)}
                            className="group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent text-muted-foreground hover:text-foreground hover:translate-x-2"
                          >
                            <div className="h-0.5 bg-primary transition-all duration-300 overflow-hidden w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100" />
                            EN
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
                        Бесплатная диагностика
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
                    Сервис спасения AI-приложений
                  </Badge>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="lg:text-7xl md:text-6xl text-4xl font-medium leading-11 md:leading-16 lg:leading-20"
                >
                  Ваше AI-приложение сломалось.{" "}
                  <span className="text-primary">
                    Через 72 часа оно будет работать.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-lg font-normal max-w-2xl text-muted-foreground"
                >
                  Мы спасаем приложения, созданные в Lovable, Bolt.new, Replit,
                  v0, Cursor и других AI-инструментах. Без осуждения. Без
                  нотаций. Чиним и двигаемся дальше.
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
                      Бесплатная диагностика
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
    title: "Doom Loop — петля смерти",
    description:
      "Вы просите AI починить баг. Он чинит — и ломает ещё два. Вы чините те — и первый баг возвращается. Бесконечный круг. Мы разрываем его, потому что читаем код, а не промптим вслепую.",
  },
  {
    icon: CreditCard,
    title: "Кредиты сгорели",
    description:
      "Вы потратили $50, $100, $200 на кредиты платформы. Каждая генерация делает хуже. Невозвратные затраты заставляют продолжать. Остановитесь. Мы починим за часы то, с чем AI не справляется днями.",
  },
  {
    icon: CloudOff,
    title: "Деплой-катастрофа",
    description:
      "В превью всё работает. Нажимаете «Deploy» — и всё падает. Авторизация ломается. База не подключается. Деплой — слабое место AI-инструментов. Для нас — сильное.",
  },
  {
    icon: Scissors,
    title: "Франкенштейн-приложение",
    description:
      "50 итераций AI. Код из трёх разных подходов, сшитый воедино. Уже никто — даже AI — не понимает, что происходит. Мы распутываем хаос и делаем код поддерживаемым.",
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
                Знакомо?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                Мы уже видели вашу проблему
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

// ─── ЧТО МЫ ЧИНИМ ─────────────────────────────────────────────────────────────

const fixes = [
  {
    icon: Lock,
    title: "Авторизация и Supabase",
    description: "Сломанный логин, неправильные RLS-политики, проблемы с сессиями",
  },
  {
    icon: Rocket,
    title: "Ошибки деплоя",
    description: "Vercel, Netlify, кастомный хостинг, переменные окружения",
  },
  {
    icon: Bug,
    title: "UI/UX баги",
    description: "Поехавшая вёрстка, сломанная адаптивность, конфликты стилей",
  },
  {
    icon: Globe,
    title: "Ошибки API-интеграций",
    description: "Сторонние API, вебхуки, CORS",
  },
  {
    icon: Database,
    title: "Проблемы с базой данных",
    description: "Ошибки схемы, упавшие миграции, данные не сохраняются",
  },
  {
    icon: Gauge,
    title: "Проблемы производительности",
    description: "Медленная загрузка, утечки памяти, лишние ре-рендеры",
  },
  {
    icon: Code2,
    title: "Чистка кода",
    description: "Рефакторинг AI-спагетти в поддерживаемый код",
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
                Наша экспертиза
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                Что мы чиним
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
              Если это было создано AI и оно сломано — мы починим.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── КАК РАБОТАЕТ RESCUE ────────────────────────────────────────────────────────

const steps = [
  {
    icon: MessageSquare,
    title: "Опишите проблему",
    description: "Расскажите, что сломалось — или запишитесь на 15-минутный звонок.",
  },
  {
    icon: Shield,
    title: "Бесплатная диагностика",
    description: "Мы проводим аудит приложения и находим корневые причины. Бесплатно.",
  },
  {
    icon: DollarSign,
    title: "Получите цену",
    description: "Фиксированная стоимость по сложности. Никаких сюрпризов с почасовой оплатой.",
  },
  {
    icon: Zap,
    title: "Мы чиним",
    description: "24–72 часа на большинство проблем. Вы получаете обновления о ходе работы.",
  },
  {
    icon: Check,
    title: "Вы готовы к запуску",
    description: "Рабочее приложение. Задеплоено. Плюс документация по каждому изменению.",
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
                Простой процесс
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
                Как работает Rescue
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
    name: "Простая починка",
    price: "$500",
    period: "от",
    description: "Один баг, проблема конфигурации, ошибка деплоя.",
    features: [
      "Одна конкретная проблема",
      "24–48 часов на починку",
      "14-дневная гарантия",
      "Полная документация",
    ],
    featured: false,
    cta: "Бесплатная диагностика",
    href: CALENDLY_URL,
    external: true,
  },
  {
    name: "Глубокое спасение",
    price: "$1,500",
    period: "от",
    description: "Несколько связанных проблем. Рефакторинг кода. Переделка авторизации.",
    features: [
      "Решение нескольких проблем",
      "Рефакторинг кода",
      "48–72 часа на починку",
      "14-дневная гарантия",
      "Полная документация",
      "Приоритетная поддержка",
    ],
    featured: true,
    cta: "Бесплатная диагностика",
    href: CALENDLY_URL,
    external: true,
  },
  {
    name: "Полная пересборка",
    price: "Custom",
    period: "",
    description: "Код не подлежит ремонту. Пересобираем ядро с нуля.",
    features: [
      "Полный рерайт кода",
      "Современная архитектура",
      "Деплой в продакшен",
      "14-дневная гарантия",
      "Полная документация",
      "Постоянная поддержка",
    ],
    featured: false,
    cta: "Узнать о Build",
    href: "/ru/build",
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
                Прозрачные цены
              </Badge>
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-foreground text-3xl sm:text-5xl font-medium">
                  Цены
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
                              <Zap size={16} /> Популярный
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
                          {plan.period && (
                            <span className="text-muted-foreground text-base font-normal">
                              {plan.period}
                            </span>
                          )}
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
              Каждый проект начинается с бесплатного 15-минутного диагностического звонка.
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
    question: "Какие платформы вы поддерживаете?",
    answer:
      "Lovable, Bolt.new, Replit, v0, Cursor — и любые приложения на React, Next.js, Supabase или стандартных веб-технологиях.",
  },
  {
    question: "Как быстро вы можете починить?",
    answer:
      "Большинство починок занимают 24–72 часа после старта. Сложные случаи — до недели.",
  },
  {
    question: "Что если проблема вернётся?",
    answer: "Каждая починка идёт с 14-дневной гарантией. Если тот же баг вернётся — чиним бесплатно.",
  },
  {
    question: "Я сохраняю права на код?",
    answer: "100%. Ваш код, ваш репозиторий, ваше приложение.",
  },
  {
    question: "Что если приложению нужно больше, чем починка?",
    answer:
      "Скажем прямо. Если нужна пересборка — порекомендуем наш сервис Build или поможем найти лучший путь.",
  },
  {
    question: "Можете работать с проектом, который уже пытался починить фрилансер?",
    answer:
      "Да. Мы спасали приложения, через которые прошли три разных фрилансера.",
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
            Вопросы
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">
            Частые вопросы
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
                  Хватит жечь кредиты.
                  <br />
                  Пусть починкой займутся люди.
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                  15-минутного звонка достаточно, чтобы узнать, что именно
                  сломано и сколько стоит починка.
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
                    Забронировать бесплатную диагностику
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
                  href="/ru"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  UpReady
                </Link>
                <p className="text-base font-normal text-muted-foreground max-w-sm">
                  Спасаем AI-приложения и строим production-ready продукты.
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
                  Услуги
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/ru/rescue"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Rescue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ru/build"
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
                  Контакты
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Записаться на звонок
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

export default function RescuePageRu() {
  useEffect(() => {
    document.title = "Починим AI-приложение за 72 часа — UpReady Rescue";
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
