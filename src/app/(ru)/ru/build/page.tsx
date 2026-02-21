"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Check,
  Flame,
  PlusIcon,
  Phone,
  FileText,
  Hammer,
  MessageSquare,
  Rocket,
  User,
  Presentation,
  Building2,
  Wrench,
  Send,
} from "lucide-react";
import { Icon } from "@iconify/react";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CALENDLY_URL = "https://calendly.com/upready";
const TELEGRAM_URL = "https://t.me/ivanprotsko";

const META_TITLE = "Построим MVP за недели, а не месяцы — UpReady Build";

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

const navItems = [
  { label: "Главная", href: "/ru" },
  { label: "Rescue", href: "/ru/rescue" },
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          UpReady
        </a>

        <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
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
          <Button
            asChild
            className="relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hidden lg:flex"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 transition-all duration-500">
                Записаться на звонок
              </span>
              <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Button>

          <a
            href="/build"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden lg:block"
          >
            EN
          </a>

          <div className="lg:hidden">
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
                    <a
                      href="/ru"
                      className="text-base font-semibold tracking-tight text-foreground"
                    >
                      UpReady
                    </a>
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
                            href="/build"
                            className="group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent text-muted-foreground hover:text-foreground hover:translate-x-2"
                          >
                            <div className="h-0.5 bg-primary transition-all duration-300 overflow-hidden w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100" />
                            EN
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <Button asChild className="w-full rounded-full h-12">
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Записаться на звонок
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      &copy; {new Date().getFullYear()} UpReady
                    </p>
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

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section>
      <div className="w-full relative">
        <div className="relative w-full pt-8 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center gap-8">
              <div className="relative flex flex-col text-center items-center gap-4 sm:gap-6">
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-sm font-medium tracking-widest text-accent uppercase"
                >
                  UpReady Build
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="lg:text-7xl md:text-6xl text-4xl font-medium leading-tight md:leading-tight lg:leading-tight"
                >
                  Ваш MVP. Сделан правильно.
                  <br />
                  Запущен быстро.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-base md:text-lg font-normal max-w-2xl text-muted-foreground"
                >
                  Мы используем AI-инструменты плюс реальную инженерию, чтобы
                  строить production-ready приложения за недели, а не месяцы. Вы
                  получаете рабочий продукт — а не хрупкий прототип, который
                  ломается при первых реальных пользователях.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center flex-col sm:flex-row justify-center gap-4"
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
                      Забронировать discovery-звонок &rarr;
                    </span>
                    <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full h-12 px-6"
                >
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Расскажите о своей идее &rarr;
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

// ---------------------------------------------------------------------------
// Why Not Vibe Code It Yourself?
// ---------------------------------------------------------------------------

const vibeCodeParagraphs = [
  "Честный ответ: можно попробовать. AI-инструменты потрясающе работают для прототипов. Но между \u00ABработает в превью\u00BB и \u00ABготово для реальных пользователей\u00BB \u2014 пропасть.",
  "AI генерирует 80% кода быстро. Оставшиеся 20% \u2014 безопасность, авторизация, деплой, крайние случаи \u2014 требуют 80% усилий. Именно здесь застревает большинство фаундеров.",
  "Мы используем те же AI-инструменты, которые вы уже пробовали: Lovable, Bolt, Cursor. Разница в том, что мы знаем, где они ломаются \u2014 и умеем доводить до конца то, что они начинают.",
  "Вы отвечаете за видение. Мы \u2014 за инженерию.",
];

function WhyNotVibeCode() {
  return (
    <section className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 h-auto text-sm border-0 outline outline-border"
            >
              Честный ответ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
              Почему не сделать самому через vibe coding?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl mx-auto flex flex-col gap-6"
          >
            {vibeCodeParagraphs.map((text, i) => (
              <p
                key={i}
                className={cn(
                  "text-base md:text-lg leading-relaxed",
                  i === vibeCodeParagraphs.length - 1
                    ? "text-foreground font-medium text-lg md:text-xl"
                    : "text-muted-foreground"
                )}
              >
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// What You Get
// ---------------------------------------------------------------------------

const deliverables = [
  "Рабочее приложение в продакшене \u2014 живой URL, реальные пользователи могут зайти",
  "Чистая, поддерживаемая кодовая база \u2014 не AI-спагетти, с которым вы боролись",
  "GitHub-репозиторий с документацией \u2014 вы владеете кодом и понимаете его",
  "Правильно настроенная база данных \u2014 Supabase с корректными RLS-политиками",
  "Авторизация, которая работает \u2014 регистрация, вход, сброс пароля \u2014 всё на месте",
  "Пайплайн деплоя \u2014 Vercel или Netlify с настроенными конфигами",
  "2 недели пост-запуск поддержки \u2014 баги, правки, вопросы \u2014 мы на связи",
];

function WhatYouGet() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 h-auto text-sm border-0 outline outline-border"
            >
              Результат
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
              Что вы получаете
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
              <CardContent className="p-0 flex flex-col gap-5">
                {deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </span>
                    <p className="text-base text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Ideal For
// ---------------------------------------------------------------------------

const idealForCards = [
  {
    icon: User,
    title: "Соло-фаундеры, валидирующие идею",
    description:
      "Нужно протестировать с реальными пользователями до того, как привлекать инвестиции или уходить с работы. Скорость важнее совершенства.",
  },
  {
    icon: Presentation,
    title: "Стартапы, которым нужно демо для инвесторов",
    description:
      "Рабочий продукт говорит громче питч-дека. Покажите что-то реальное.",
  },
  {
    icon: Building2,
    title: "Бизнесы, тестирующие новое направление",
    description:
      "Нужно двигаться быстро, не отвлекая свою команду разработки.",
  },
  {
    icon: Wrench,
    title: "Все, кто попробовал vibe coding и упёрся в стену",
    description:
      "Вы знаете инструменты. Видели, что они могут. Нужен кто-то, кто доведёт до конца.",
  },
];

function IdealFor() {
  return (
    <section className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 h-auto text-sm border-0 outline outline-border"
            >
              Для кого
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
              Идеально для
            </h2>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {idealForCards.map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Card className="py-10 h-full border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary hover:shadow-lg">
                  <CardContent className="px-8 flex flex-col gap-6">
                    <card.icon
                      className="w-8 h-8 text-primary"
                      strokeWidth={1.2}
                    />
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                      <p className="text-base font-normal text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// How Build Works
// ---------------------------------------------------------------------------

const processSteps = [
  {
    icon: Phone,
    title: "Discovery-звонок \u2014 30 минут, бесплатно",
    description: "Вы рассказываете идею. Мы задаём правильные вопросы.",
  },
  {
    icon: FileText,
    title: "Предложение \u2014 в течение 48 часов",
    description: "Чёткий документ со скоупом, таймлайном и фиксированной ценой.",
  },
  {
    icon: Hammer,
    title: "Спринт разработки \u2014 1\u20133 недели",
    description: "Мы строим. Вы получаете обновления ежедневно или еженедельно.",
  },
  {
    icon: MessageSquare,
    title: "Ревью и доработка",
    description: "Вы тестируете приложение. Даёте обратную связь. Мы корректируем.",
  },
  {
    icon: Rocket,
    title: "Запуск",
    description:
      "Задеплоено. Задокументировано. Передано. Вы готовы.",
  },
];

function HowBuildWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
    <section className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <Badge
              variant="outline"
              className="px-3 py-1 h-auto text-sm border-0 outline outline-border"
            >
              Процесс
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-[-1px]">
              Как работает Build
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
                {processSteps.map((step, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <div className="flex gap-5">
                      <div className="flex flex-col items-center gap-2">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                          {i + 1}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 pt-1.5">
                        <p className="text-lg sm:text-xl font-semibold">
                          {step.title}
                        </p>
                        <p className="text-base text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {i !== processSteps.length - 1 && (
                      <Separator className="mt-6 sm:mt-8" />
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

const pricingPlans = [
  {
    name: "Стартовый MVP",
    price: "$2,500",
    priceLabel: "от",
    description:
      "Лендинг + одна ключевая фича + авторизация + деплой.",
    highlighted: false,
  },
  {
    name: "Полный MVP",
    price: "$5,000",
    priceLabel: "от",
    description:
      "Несколько фич, интеграции с внешними сервисами, админ-панель.",
    highlighted: true,
  },
  {
    name: "Кастом",
    price: "Обсудим",
    priceLabel: "",
    description:
      "Сложная логика, несколько ролей пользователей, продвинутые интеграции.",
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-10 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 xl:px-16 lg:py-20 sm:py-16 py-8">
        <div className="flex flex-col gap-8 md:gap-12 items-center justify-center w-full">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Badge
              variant="outline"
              className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7"
            >
              Цены
            </Badge>
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-medium">
                Простые, прозрачные цены
              </h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
            {pricingPlans.map((plan, index) => {
              const isFeatured = plan.highlighted;
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
                    <div className="p-0">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-medium text-primary">
                            {plan.name}
                          </h3>
                          {isFeatured && (
                            <Badge className="py-1 px-3 text-sm font-medium h-7 flex items-center gap-1.5 [&>svg]:size-4!">
                              <Flame size={16} /> Популярный
                            </Badge>
                          )}
                        </div>
                        <p className="text-base font-normal text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                    <CardContent className="flex flex-col flex-1 gap-8 p-0">
                      <div className="flex items-baseline gap-2">
                        {plan.priceLabel && (
                          <span className="text-muted-foreground text-base font-normal">
                            {plan.priceLabel}
                          </span>
                        )}
                        <span className="text-foreground text-4xl sm:text-5xl font-medium">
                          {plan.price}
                        </span>
                      </div>
                      <Separator />
                      <Button
                        asChild
                        className="w-full h-12 rounded-full"
                        variant={isFeatured ? "default" : "outline"}
                      >
                        <a
                          href={CALENDLY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Начать
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-xl">
            Оплата: 50% предоплата, 50% при сдаче. Все проекты включают полное
            владение исходным кодом.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

const faqItems = [
  {
    question: "Какой технический стек вы используете?",
    answer: "React/Next.js, Supabase, Tailwind CSS, Vercel.",
  },
  {
    question: "Сколько времени занимает?",
    answer: "1\u20133 недели для большинства MVP.",
  },
  {
    question: "Что если потом нужно добавить фичи?",
    answer: "Кодовая база чистая и задокументированная.",
  },
  {
    question: "Я владею кодом?",
    answer:
      "100%. GitHub-репо, база данных, деплой \u2014 всё ваше.",
  },
  {
    question: "Можете работать с моим существующим vibe-coded проектом?",
    answer:
      "Если это сломанный прототип \u2014 да. Если сначала нужна починка \u2014 начните с Rescue.",
  },
  {
    question: "Что если у меня нет технического задания?",
    answer:
      "У большинства наших клиентов его нет. Для этого и существует discovery-звонок.",
  },
];

function FaqSection() {
  return (
    <section id="faq">
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

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

function CtaSection() {
  return (
    <section>
      <div className="sm:py-20 py-8">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div className="relative overflow-hidden min-h-96 flex items-center justify-center px-6 border border-border rounded-3xl before:absolute before:w-full before:h-4/5 dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60% before:bg-linear-to-r before:rounded-full before:-z-10">
            <motion.div
              initial={{ y: "5%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-6 items-center mx-auto"
            >
              <div className="flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl md:text-5xl font-medium">
                  Есть идея? Давайте сделаем её реальной.
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                  30-минутного звонка достаточно. Без давления. Без обязательств.
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
                    Забронировать discovery-звонок &rarr;
                  </span>
                  <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
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

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

const footerNavItems = [
  { label: "Главная", href: "/ru" },
  { label: "Build", href: "/ru/build" },
  { label: "Rescue", href: "/ru/rescue" },
] as const;

function FooterSection() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-5">
              <div className="flex flex-col gap-6">
                <a
                  href="/ru"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  UpReady
                </a>
                <p className="text-base font-normal text-muted-foreground max-w-sm">
                  Мы строим и спасаем MVP, чтобы фаундеры могли сосредоточиться
                  на главном.
                </p>
                <a
                  href={TELEGRAM_URL}
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
                  Карта сайта
                </p>
                <ul className="flex flex-col gap-3">
                  {footerNavItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
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
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Telegram
                    </a>
                  </li>
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

// ---------------------------------------------------------------------------
// Page (default export)
// ---------------------------------------------------------------------------

export default function BuildPageRu() {
  return (
    <>
      <title>{META_TITLE}</title>
      <div className="relative">
        <Header />
        <main>
          <HeroSection />
          <WhyNotVibeCode />
          <WhatYouGet />
          <IdealFor />
          <HowBuildWorks />
          <PricingSection />
          <FaqSection />
          <CtaSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
