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

const CALENDLY_URL = "https://calendly.com/upready";

/* ──────────────────────────── HEADER ──────────────────────────── */

const navLinks = [
  { label: "Rescue", href: "/ru/rescue" },
  { label: "Build", href: "/ru/build" },
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
          href="/ru"
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
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Globe size={14} />
            EN
          </a>

          <Button
            asChild
            className="relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hidden md:flex"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 transition-all duration-500">
                Забронировать звонок
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
                      href="/ru"
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
                            href="/"
                            className="group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent text-muted-foreground hover:text-foreground hover:translate-x-2"
                          >
                            <div className="h-0.5 bg-primary transition-all duration-300 overflow-hidden w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100" />
                            EN
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <Button asChild className="w-full h-12 rounded-full">
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Забронировать звонок
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
              Спасение AI-кода и разработка MVP
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center max-w-5xl mx-auto leading-[1.1] tracking-tight">
              Ваше AI-приложение сломалось.{" "}
              <span className="text-accent">Мы починим.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
              Вы попробовали Lovable, Bolt или Cursor. Всё работало — пока не
              сломалось. Теперь вы застряли в петле, сжигаете кредиты, а деплой
              не проходит. Мы через это проходили. Мы знаем, как это исправить.
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
              <a href="/ru/rescue">
                Починить моё приложение <ArrowUpRight size={18} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 rounded-full text-base font-medium gap-2 dark:bg-background dark:hover:bg-muted"
            >
              <a href="/ru/build">
                Построить MVP <Rocket size={18} />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground text-center"
          >
            Нам доверяют фаундеры, использующие Lovable, Bolt.new, Replit, v0 и
            Cursor
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── ЗНАКОМАЯ СИТУАЦИЯ ──────────────────────── */

const painQuotes = [
  "Я потратил 200 кредитов, а приложение до сих пор падает при деплое.",
  "AI чинит одно — ломает три других. Я хожу по кругу.",
  "Нанял фрилансера на Fiverr. Стало только хуже.",
  "Мне нужен кто-то, кто реально понимает, что генерируют эти AI-инструменты.",
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
            Знакомая ситуация?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Мы слышим это каждый день
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
                    &laquo;{quote}&raquo;
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
          Если узнаёте себя — вы по адресу.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── ДВА СПОСОБА ПОМОЧЬ ──────────────────── */

const services = [
  {
    icon: Wrench,
    title: "Приложение сломалось? Чиним AI-код быстро.",
    features: [
      "Застряли в doom loop? Мы вас вытащим",
      "Ошибки деплоя, баги авторизации, сломанный UI — видели всё",
      "24–72 часа на большинство починок",
    ],
    price: "От $500",
    cta: "Бесплатная диагностика",
    href: "/ru/rescue",
    accentColor: "text-orange-400",
    accentBg: "bg-orange-400/10",
  },
  {
    icon: Rocket,
    title: "Нужен MVP? От идеи до запуска за недели.",
    features: [
      "Production-ready приложение, а не хрупкий прототип",
      "Чистый код, нормальная авторизация, реальный деплой",
      "Вы владеете всем — кодом, репозиторием, данными",
    ],
    price: "От $2 500",
    cta: "Забронировать discovery-звонок",
    href: "/ru/build",
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
            Услуги
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Два способа помочь
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

/* ──────────────────── КАК ЭТО РАБОТАЕТ ──────────────────── */

const steps = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Расскажите, что не так",
    description: "Забронируйте звонок или опишите проблему. Займёт 15 минут.",
  },
  {
    icon: Search,
    number: "02",
    title: "Мы диагностируем и чиним",
    description:
      "Команда проводит аудит кода, находит корневые причины и доставляет рабочее решение.",
  },
  {
    icon: CircleCheckBig,
    number: "03",
    title: "Вы готовы к запуску",
    description: "Рабочее приложение. Задеплоено. Задокументировано. Ваше.",
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
            Как это работает
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Три простых шага
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

/* ──────────────────── ПЛАТФОРМЫ ──────────────────── */

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
            Платформы
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Платформы, с которыми мы работаем
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg text-center max-w-xl">
            Мы разбираемся в каждой AI-платформе для кодинга — и знаем, где
            каждая из них ломается.
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

/* ──────────────────── РЫНОК ──────────────────── */

const stats = [
  {
    value: "~8М",
    label: "пользователей Lovable, 100 000 новых проектов каждый день",
  },
  {
    value: "41%",
    label: "всего кода сегодня генерируется AI",
  },
  {
    value: "95%",
    label: "разработчиков тратят дополнительное время на починку того, что выдаёт AI",
  },
  {
    value: "300%",
    label: "рост спроса на услуги по чистке AI-кода за 6 месяцев",
  },
  {
    value: "Новое",
    label: "Fiverr создал отдельную категорию «Vibe Coding»",
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
            Рынок
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center max-w-3xl">
            Рынок растёт быстро
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
          Вы не одиноки. И вам не обязательно разбираться с этим самостоятельно.
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
                Готовы запустить ваше приложение?{" "}
                <span className="text-accent">Up and ready?</span>
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
                Хватит жечь кредиты. Хватит ходить по кругу. Поговорите с
                человеком, который понимает AI-код — и знает, как заставить его
                работать.
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
                  Забронировать бесплатный звонок
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
  { label: "Главная", href: "/ru" },
  { label: "Rescue", href: "/ru/rescue" },
  { label: "Build", href: "/ru/build" },
] as const;

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 px-2">
            <div className="flex flex-col gap-3">
              <a
                href="/ru"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Up<span className="text-accent">Ready</span>
              </a>
              <p className="text-sm text-muted-foreground max-w-xs">
                Мы чиним AI-приложения и создаём MVP, которые реально работают.
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
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Globe size={14} />
                EN
              </a>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} UpReady
            </p>
            <p className="text-sm text-muted-foreground">
              Сделано с AI на Бали
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────── PAGE ──────────────────── */

export default function HomePageRu() {
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
