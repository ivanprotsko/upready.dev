"use client";

import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import BrandSlider from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import type { BrandList as BrandListType } from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import type { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import FeatureProcess from "@/components/shadcn-space/blocks/feature-03/feature";
import type { Features, BrandList } from "@/components/shadcn-space/blocks/feature-03/feature";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import PricingSubscriptions from "@/components/shadcn-space/blocks/pricing-01/pricing";
import Portfolio from "@/components/shadcn-space/blocks/portfolio-01/portfolio";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import { Banknote, UserX, Bug, Search, MessageSquare, FileText, Code, Rocket } from "lucide-react";

// --- Russian data ---

const navigationData: NavigationSection[] = [
  { title: "Проблема", href: "#problem" },
  { title: "Как это работает", href: "#how-it-works" },
  { title: "Цены", href: "#pricing" },
  { title: "Портфолио", href: "#portfolio" },
  { title: "FAQ", href: "#faq" },
];

const avatarList: AvatarList[] = [
  { image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg" },
  { image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg" },
  { image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg" },
  { image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg" },
];

const brandList: BrandListType[] = [
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg", name: "Brand 1" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-2.svg", name: "Brand 2" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-3.svg", name: "Brand 3" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg", name: "Brand 4" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-5.svg", name: "Brand 5" },
];

const featureProblemData = [
  {
    icon: Banknote,
    title: "Агентства берут $25K-150K",
    content: "Сроки 3-6 месяцев сжигают весь пре-сид. Вы тратите весь бюджет на v1, которая может не найти product-market fit.",
  },
  {
    icon: UserX,
    title: "Фрилансеры пропадают",
    content: "Нет единого видения — дизайнер не говорит с разработчиком, никто не понимает бизнес. 30-40% времени уходит на координацию.",
  },
  {
    icon: Bug,
    title: "Vibe-coded приложения ломаются",
    content: "25% стартапов YC W2025 с 95% AI-кодом упёрлись в стену: работает локально, не деплоится, дыры в безопасности повсюду.",
  },
  {
    icon: Search,
    title: "Поиск CTO занимает месяцы",
    content: "2-3 месяца поиска, зарплата $150-200K/год. До product-market fit вы даже не знаете, стоит ли это инвестиций.",
  },
];

const featureProcessData: Features = [
  {
    icon: MessageSquare,
    title: "01 — Опишите идею",
    content: (
      <>
        Отправьте через Telegram, Notion или любой мессенджер. Текст, голосовые,
        референсы — <strong className="text-foreground">как удобно. Созвоны не нужны.</strong>
      </>
    ),
  },
  {
    icon: FileText,
    title: "02 — PRD + интерактивный прототип",
    content: (
      <>
        Документ требований и кликабельный прототип за{" "}
        <strong className="text-foreground">2-3 дня</strong>. Вы видите продукт
        до того, как написана первая строка кода.
      </>
    ),
  },
  {
    icon: Code,
    title: "03 — Разработка за 1-3 недели",
    content: (
      <>
        Полное веб-приложение: авторизация, основные функции, платежи (Stripe),
        лендинг, деплой.{" "}
        <strong className="text-foreground">Видео-отчёты каждые 2-3 дня.</strong>
      </>
    ),
  },
  {
    icon: Rocket,
    title: "04 — Запуск",
    content: (
      <>
        Задеплоенный продукт, доступный пользователям.{" "}
        <strong className="text-foreground">Исходный код — ваш.</strong>{" "}
        Документация включена. Готов для реальных пользователей.
      </>
    ),
  },
];

const processBrandList: BrandList = [
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-1.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg", name: "Brand 1" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-2.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg", name: "Brand 2" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-3.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg", name: "Brand 3" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-4.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg", name: "Brand 4" },
  { image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-5.svg", lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg", name: "Brand 5" },
];

const pricingPlans = [
  {
    plan_name: "Быстрый MVP",
    plan_descp: "Валидируйте идею быстро с фокусным, готовым к продакшену MVP.",
    plan_price: 5000,
    plan_feature: [
      "Лендинг + авторизация",
      "3-5 основных функций",
      "Интеграция платежей Stripe",
      "Деплой в продакшен",
      "Доставка 1-2 недели",
      "Исходный код — ваш",
    ],
    plan_recommended: false,
  },
  {
    plan_name: "MVP + AI",
    plan_descp: "Умный MVP с AI-функциями для конкурентного преимущества.",
    plan_price: 8000,
    plan_feature: [
      "Всё из Быстрого MVP",
      "AI-функциональность",
      "Кастомные AI-интеграции",
      "Продвинутая бизнес-логика",
      "Доставка 2-3 недели",
      "Поддержка после запуска (1 неделя)",
    ],
    plan_recommended: true,
  },
  {
    plan_name: "MVP + Дашборд",
    plan_descp: "Полный продукт с админ-панелью, аналитикой и AI-функциями.",
    plan_price: 12000,
    plan_feature: [
      "Всё из MVP + AI",
      "Админ-панель",
      "Аналитика и отчёты",
      "Ролевой доступ",
      "Доставка 3-4 недели",
      "Поддержка после запуска (2 недели)",
    ],
    plan_recommended: false,
  },
];

const subscriptionPlans = [
  {
    plan_bg_color: "bg-blue-500/10",
    plan_name: "Поддержка роста",
    plan_descp: "Постоянная разработка и поддержка продукта после запуска.",
    plan_price: 3000,
    plan_feature: [
      "Безлимитные запросы на фичи",
      "Выполнение за 72 часа",
      "Исправление багов и оптимизация",
      "Приоритетная асинхронная поддержка",
      "Ежемесячный стратегический обзор",
      "Пауза или отмена в любое время",
    ],
  },
  {
    plan_bg_color: "bg-teal-400/20",
    plan_name: "Вирусное видео",
    plan_descp: "Вирусный контент для Reels, Shorts и TikTok.",
    plan_price: 5000,
    plan_feature: [
      "Reels, Shorts и TikTok",
      "Сценарий и раскадровка",
      "Профессиональный монтаж",
      "Контент на основе трендов",
      "До 15 видео/месяц",
      "Правки включены",
    ],
  },
];

const portfolioItems = [
  {
    portfolio_image: "https://images.shadcnspace.com/assets/portfolio/flowbank.webp",
    portfolio_title: "SaaS аналитический дашборд",
    portfolio_tags: ["MVP Pro", "3 недели"],
  },
  {
    portfolio_image: "https://images.shadcnspace.com/assets/portfolio/academy.webp",
    portfolio_title: "AI-инструмент для рекрутинга",
    portfolio_tags: ["AI-интеграция", "2 недели"],
  },
  {
    portfolio_image: "https://images.shadcnspace.com/assets/portfolio/genome.webp",
    portfolio_title: "Маркетплейс-платформа",
    portfolio_tags: ["MVP Starter", "2 недели"],
  },
];

const faqItems = [
  {
    question: "Это правда делает один человек?",
    answer: "Да. AI-инструменты (Cursor, Claude, v0) позволяют одному опытному инженеру работать со скоростью команды из 3-5 человек. Pieter Levels зарабатывает $250K/мес в одиночку. DesignJoy — $1M+ ARR с одним дизайнером. Это проверенная модель.",
  },
  {
    question: "А как с качеством? AI-код ведь глючный?",
    answer: "AI генерирует ~46% кода, но каждая строка проходит ручную проверку опытным инженером. Я не слепо вайб-коужу — использую AI как инструмент ускорения, сохраняя контроль над архитектурой и безопасностью.",
  },
  {
    question: "Что если нужно масштабироваться после MVP?",
    answer: "MVP построен на современном стеке (Next.js + Supabase/Postgres + Vercel), который выдерживает тысячи пользователей. Когда придёт время масштабироваться, я помогу спланировать переход на полную команду или продолжу работу по подписке.",
  },
  {
    question: "Почему без созвонов?",
    answer: "Потому что созвоны — иллюзия прогресса. Час на звонке = час НЕ за кодом. Текст + Loom-видео = та же информация, но вы можете изучить её когда удобно, перечитать, переслать инвесторам.",
  },
  {
    question: "Безопасно ли платить в крипте?",
    answer: "Оплата через Request Finance — профессиональную платформу крипто-инвойсинга с прозрачной историей транзакций. USDT/USDC — стейблкоины, привязанные к USD. Комиссия: $0.01-2.00 вместо $25-50 банковского перевода.",
  },
  {
    question: "Что если результат не устроит?",
    answer: "Вы видите прогресс каждые 2-3 дня через Loom-видео и можете скорректировать направление в любой момент. Прототип утверждается ДО разработки. Если после прототипа поймём, что не совпадаем — полный возврат депозита.",
  },
];

const footerSections = [
  {
    title: "Навигация",
    links: [
      { title: "Проблема", href: "#problem" },
      { title: "Как это работает", href: "#how-it-works" },
      { title: "Цены", href: "#pricing" },
      { title: "Портфолио", href: "#portfolio" },
      { title: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { title: "Telegram", href: "https://t.me/zenodev" },
    ],
  },
];

const footerContactLines = [
  { text: "Solo AI-инженер продукта" },
  { text: "Telegram: @zenodev", href: "https://t.me/zenodev" },
];

export default function HomeRu() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <Header
          navigationData={navigationData}
          buttonText="Начать"
        />
        <main>
          <HeroSection
            avatarList={avatarList}
            headingMain="Ваш MVP. Готов к продакшену."
            headingItalic="За недели, не месяцы."
            subheading="Один AI-инженер продукта совмещает PM, дизайн и разработку. От идеи до задеплоенного продукта за 2-4 недели — в 10 раз дешевле агентства."
            buttonText="Обсудить идею"
            bottomText="Оплата USDT/USDC · Без созвонов · Асинхронно"
          />
          <BrandSlider brandList={brandList} />
        </main>
      </div>

      {/* Problem Section */}
      <div id="problem">
        <Feature
          featureData={featureProblemData}
          badgeText="Проблема"
          heading="Создание MVP не должно стоить целое состояние"
          bottomNote="Есть способ лучше — один AI-инженер продукта"
          ctaText="Смотреть цены"
          ctaHref="#pricing"
        />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works">
        <FeatureProcess
          cards={featureProcessData}
          brandList={processBrandList}
          badgeText="Процесс"
          heading="От идеи до продакшена за 4 шага"
          description="Оптимизированный процесс для скорости и ясности"
          trustText="Нам доверяют фаундеры, создающие свой первый продукт"
        />
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <Pricing
          plans={pricingPlans}
          badgeText="Цены"
          heading="Выберите план для вашего стартапа"
          priceLabel="единоразово"
          ctaText="Начать"
          popularLabel="Популярный"
        />
        <PricingSubscriptions
          plans={subscriptionPlans}
          badgeText="Подписки"
          heading="Масштабируйте и развивайте после запуска"
          priceLabel="/мес"
          ctaText="Начать"
          featuresLabel="Возможности"
        />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <Portfolio
          items={portfolioItems}
          badgeText="Портфолио"
          heading="Последние проекты"
        />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <Faq
          items={faqItems}
          badgeText="FAQ"
          heading="Часто задаваемые вопросы"
        />
      </div>

      {/* CTA Section */}
      <CTA
        heading="Опишите вашу идею — оценю за 24 часа"
        description="Отправьте сообщение с вашей идеей в любом формате. Получите оценку сроков и стоимости в течение дня."
        buttonText="Написать в Telegram"
      />

      {/* Footer */}
      <Footer
        sections={footerSections}
        tagline="Solo AI-инженер продукта. Готовый к продакшену MVP от идеи до запуска за 2-4 недели."
        contactTitle="Контакты"
        contactLines={footerContactLines}
        copyright="©2026 upready. Все права защищены"
      />
    </div>
  );
}
