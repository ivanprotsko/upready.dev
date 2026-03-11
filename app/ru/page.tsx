"use client";

import {
  Building2,
  Mail,
  FileSignature,
  Calendar,
  Layout,
  BarChart3,
  BookOpen,
  Bot,
  FileText,
  ShoppingCart,
  Monitor,
  Globe,
  CircleOff,
  Bug,
  KeyRound,
  RefreshCcw,
  TrendingUp,
  Lock,
  DollarSign,
  Layers,
  Package,
  Megaphone,
  CheckCircle2,
  Users,
  Wrench,
  Search,
  Rocket,
} from "lucide-react";

import HeroSection from "@/components/shadcn-space/blocks/hero-07/hero";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import Statistic from "@/components/shadcn-space/blocks/statistics-06/statistics";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import SocialProof from "@/components/shadcn-space/blocks/testimonial-01/testimonial";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import ServiceFaq from "@/components/services/service-faq";
import Footer from "@/components/shadcn-space/blocks/footer-03/footer";

/* ─── Data ──────────────────────────────────────────────── */

const services = [
  {
    icon: Wrench,
    title: "Застряли на 80%? Приложение взломали?",
    content:
      "Ваше AI-приложение работает локально и падает в продакшне. Или его взломали. Старший разработчик поставит диагноз за 48 часов и починит по фиксированной цене.",
    stat: "От $500 · 3–7 дней · Без осуждения",
    cta: "Починить приложение →",
    href: "/app-rescue",
  },
  {
    icon: Search,
    title: "Не уверены, готово ли к запуску?",
    content:
      "Старший разработчик проверит всё приложение и даст письменный отчёт по каждой уязвимости, риску при деплое и проблеме в коде — на понятном языке.",
    stat: "$500 фиксированно · Готово за 48 часов · Засчитывается при ремонте",
    cta: "Получить аудит →",
    href: "/tech-audit",
  },
  {
    icon: Rocket,
    title: "Есть идея, но нет разработчика которому доверяете?",
    content:
      "От спецификации до запуска за 1–4 недели. Фиксированный объём, фиксированная цена, еженедельные демо и полный доступ к репозиторию с первого дня. Каждая строчка кода — ваша.",
    stat: "От $2,500 · 1–4 недели · Репозиторий ваш",
    cta: "Начать разработку →",
    href: "/mvp-build",
  },
];

const problemsVibeCoding = [
  {
    icon: CircleOff,
    title: "Работает локально, падает в продакшне",
    content:
      "Приложение нормально работает на вашей машине, но ломается в момент деплоя на реальный сервер.",
  },
  {
    icon: Bug,
    title: "Каждый фикс создаёт новый баг",
    content:
      "Платежи не проходят. Функции ломаются. AI ходит по кругу, потому что не имеет доступа к серверу, логам или живой базе данных.",
  },
  {
    icon: KeyRound,
    title: "API-ключи торчат в коде фронтенда",
    content: "Захардкоженные секреты утекают за считанные часы. Аккаунты взламывают.",
  },
  {
    icon: RefreshCcw,
    title: "AI не может выбраться из петли",
    content:
      "Это не проблема промптинга — это проблема доступа. Разработчик в вашем реальном окружении решит её за считанные дни.",
  },
];

const problemsSaasTrap = [
  {
    icon: TrendingUp,
    title: "Цена за пользователя растёт лавинообразно",
    content:
      "HubSpot: $890/месяц. Mailchimp: $500/месяц. Calendly: $16/пользователь/месяц. В сумме: $2,000–$3,000/месяц.",
  },
  {
    icon: Lock,
    title: "Вендорный lock-in удерживает ваши данные",
    content:
      "Функции переезжают в \u00abPro\u00bb-планы. Ежегодные продления удваивают счёт. Экспорт данных — болезненный или невозможный.",
  },
  {
    icon: DollarSign,
    title: "Существуют open-source аналоги",
    content:
      "Разница в том, что инстанс принадлежит вам. Никаких поборов за пользователей — никогда.",
  },
];

const products = [
  {
    label: "Замена HubSpot",
    icon: Building2,
    title: "Twenty CRM",
    desc: "$890/мес → $149/мес. Без платы за пользователей.",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    href: "/services/crm",
  },
  {
    label: "Замена Mailchimp",
    icon: Mail,
    title: "Listmonk",
    desc: "Неограниченное число подписчиков. Фиксированная ежемесячная плата.",
    bgColor: "bg-orange-400/10",
    textColor: "text-orange-400",
    href: "/services/email-marketing",
  },
  {
    label: "Замена DocuSign",
    icon: FileSignature,
    title: "Documenso",
    desc: "Неограниченные подписи. Никакой платы за конверт.",
    bgColor: "bg-teal-400/10",
    textColor: "text-teal-400",
    href: "/services/e-signature",
  },
  {
    label: "Замена Calendly",
    icon: Calendar,
    title: "Cal.com",
    desc: "Неограниченное число участников команды. Одна фиксированная цена.",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
    href: "/services/booking",
  },
  {
    label: "Замена Jira / Asana",
    icon: Layout,
    title: "Plane",
    desc: "Неограниченное число пользователей. Без платы за место.",
    bgColor: "bg-sky-400/10",
    textColor: "text-sky-400",
    href: "/services/project-management",
  },
  {
    label: "Замена Google Analytics",
    icon: BarChart3,
    title: "Umami",
    desc: "Соответствует GDPR. Данные не покидают ваш сервер.",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    href: "/services/analytics",
  },
  {
    label: "Замена Confluence",
    icon: BookOpen,
    title: "BookStack",
    desc: "$8,000/год → $149/мес. Та же команда, больше функций.",
    bgColor: "bg-amber-400/10",
    textColor: "text-amber-400",
    href: "/services/knowledge-base",
  },
  {
    label: "Замена ChatGPT Enterprise",
    icon: Bot,
    title: "AnythingLLM",
    desc: "Приватный AI на вашем сервере. Данные не отправляются в OpenAI.",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500",
    href: "/services/ai-assistant",
  },
  {
    label: "Замена Typeform",
    icon: FileText,
    title: "HeyForm",
    desc: "Неограниченные ответы. Без лимитов на количество ответов.",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-500",
    href: "/services/forms",
  },
  {
    label: "Замена Shopify",
    icon: ShoppingCart,
    title: "Medusa",
    desc: "Нулевые комиссии за транзакции. Полный доступ к API.",
    bgColor: "bg-red-500/10",
    textColor: "text-red-500",
    href: "/services/ecommerce",
  },
  {
    label: "Замена Retool / Grafana",
    icon: Monitor,
    title: "Budibase",
    desc: "Создавайте внутренние инструменты и дашборды. Неограниченное число пользователей.",
    bgColor: "bg-cyan-400/10",
    textColor: "text-cyan-400",
    href: "/services/dashboards",
  },
  {
    label: "Замена кастомных порталов",
    icon: Globe,
    title: "Directus",
    desc: "API-first. White-label. Любой технический стек.",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-500",
    href: "/services/client-portal",
  },
];

const bundlePlans = [
  {
    plan_name: "Sales Stack",
    plan_descp: "CRM + Бронирование + Электронная подпись",
    plan_price: "От $8,000",
    plan_feature: [
      "Twenty CRM",
      "Cal.com Бронирование",
      "Documenso Электронная подпись",
      "Полная миграция данных",
      "Скидка за бандл применена",
    ],
    plan_recommended: false,
    plan_cta: "Получить этот бандл",
    plan_href: "/contacts?type=bundle-sales",
  },
  {
    plan_name: "Ops Stack",
    plan_descp: "Управление проектами + База знаний + Дашборды",
    plan_price: "От $7,500",
    plan_feature: [
      "Plane Управление проектами",
      "BookStack База знаний",
      "Budibase Дашборды",
      "Полная миграция данных",
      "Скидка за бандл применена",
    ],
    plan_recommended: true,
    plan_badge: "Лучшая цена",
    plan_cta: "Получить этот бандл",
    plan_href: "/contacts?type=bundle-ops",
  },
  {
    plan_name: "Marketing Stack",
    plan_descp: "Email-маркетинг + Аналитика + Формы",
    plan_price: "От $6,500",
    plan_feature: [
      "Listmonk Email-маркетинг",
      "Umami Аналитика",
      "HeyForm Формы",
      "Полная миграция данных",
      "Скидка за бандл применена",
    ],
    plan_recommended: false,
    plan_cta: "Получить этот бандл",
    plan_href: "/contacts?type=bundle-marketing",
  },
];

const aboutUsData = [
  { icon: Wrench, title: "rescue", color: "bg-red-500/10 text-red-500" },
  { icon: Rocket, title: "build", color: "bg-blue-500/10 text-blue-500" },
  { icon: Package, title: "deploy", color: "bg-emerald-500/10 text-emerald-500" },
];

const processSteps = [
  { title: "Фаундеров описали свою проблему", count: 50 },
  { title: "Приложений починено или построено с нуля", count: 30 },
  { title: "Open-source инструментов задеплоено", count: 12 },
];

const socialProofCards = [
  {
    label: "Поддержка open-source",
    value: "$32M",
    description: "Привлечено инструментами, которые мы деплоим. Не эксперименты — финансируемые продукты.",
    bgClass: "bg-primary/10 dark:bg-white/10",
    textClass: "text-card-foreground",
    subTextClass: "text-primary/70",
    colSpan: "lg:col-span-8",
    icon: DollarSign,
  },
  {
    label: "Доверие сообщества",
    value: "50+",
    description: "Фаундеров помогли. Фиксированная цена, без сюрпризов.",
    bgClass: "bg-blue-500",
    textClass: "text-white",
    subTextClass: "text-white/70",
    colSpan: "lg:col-span-4",
    icon: Users,
  },
  {
    label: "Популярность на GitHub",
    value: "15,000+",
    description: "Звёзд на GitHub — только Twenty CRM.",
    bgClass: "bg-gray-950",
    textClass: "text-white",
    subTextClass: "text-white/70",
    colSpan: "lg:col-span-4",
    icon: CheckCircle2,
  },
  {
    label: "Проверено в масштабе",
    value: "30,000+",
    description: "Звёзд на GitHub — Plane управление проектами. Проверено в боевых условиях.",
    bgClass: "bg-primary/10 dark:bg-white/10",
    textClass: "text-card-foreground",
    subTextClass: "text-primary/70",
    colSpan: "lg:col-span-8",
    icon: CheckCircle2,
  },
];

const pricingPlans = [
  {
    plan_name: "Аудит приложения",
    plan_descp: "Готово за 48 часов",
    plan_price: "$500",
    plan_feature: [
      "Письменный отчёт за 48 часов",
      "Каждая уязвимость, каждый фикс",
      "Рекомендация: чинить или переделывать",
      "30-минутный разбор включён",
      "Засчитывается при последующем ремонте",
    ],
    plan_recommended: false,
    plan_cta: "Заказать аудит за $500",
    plan_href: "/contacts?type=audit",
  },
  {
    plan_name: "Ремонт приложения",
    plan_descp: "Ставка зависит от объёма",
    plan_price: "От $50/час",
    plan_feature: [
      "Тех-аудит включён ($500, засчитывается)",
      "До 80 часов — $100/час",
      "80+ часов — $75/час",
      "120+ часов — $50/час",
      "Полное владение кодом — остаётся у вас",
    ],
    plan_recommended: true,
    plan_badge: "Самый популярный",
    plan_cta: "Получить бесплатный диагноз",
    plan_href: "/contacts",
  },
  {
    plan_name: "MVP Build",
    plan_descp: "1–4 недели",
    plan_price: "От $2,500",
    plan_feature: [
      "Фиксированный объём, фиксированная цена",
      "Еженедельные демо с первого дня",
      "Полный доступ к репозиторию с первого дня",
      "Современный стек, который поддержит любой разработчик",
      "30 дней поддержки после запуска",
    ],
    plan_recommended: false,
    plan_cta: "Начать проект",
    plan_href: "/contacts?type=build",
  },
  {
    plan_name: "Постоянная поддержка",
    plan_descp: "Ежемесячные часы",
    plan_price: "От $50/час",
    plan_feature: [
      "До 80 часов/мес — $100/час",
      "80+ часов/мес — $75/час",
      "120+ часов/мес — $50/час",
      "Мы уже знаем вашу кодовую базу",
      "Отмена в любой момент, без привязки",
    ],
    plan_recommended: false,
    plan_cta: "Начать с поддержки",
    plan_href: "/contacts?type=support",
  },
];

const faqItems = [
  {
    question: "Разве я не могу просто продолжать просить AI починить это?",
    answer:
      "Можете — и большинство фаундеров пробовали, основательно. Потолок здесь не в усилиях, а в доступе. AI не может зайти в ваш продакшн-сервер, прочитать логи или увидеть, что реально происходит в живой базе данных. Когда проблема находится в зазоре между локальной средой и реальным сервером, AI работает вслепую. Разработчик с доступом к вашему реальному окружению решит это один раз.",
  },
  {
    question: "Я мог бы задеплоить эти инструменты сам. Зачем платить вам?",
    answer:
      "Могли бы. Вопрос в том, лучше ли потратить ваше время на настройку серверов или на развитие бизнеса. Большинство проектов \u00absделаю сам\u00bb зависают на конфигурации сервера. Мы берём на себя деплой, SSL, бэкапы, обновления и миграцию — чтобы инструмент заработал за 10 дней, а не за 40 часов вашего времени.",
  },
  {
    question: "Я действительно владею кодом?",
    answer:
      "Да. Безоговорочно. Вы получаете полный репозиторий — каждый файл, каждый коммит, каждую конфигурацию. Код можно передать любому разработчику. Для доступа к собственному приложению подписка не нужна. Код не хранится на наших серверах. После сдачи вы не зависите от нас — если сами не выберете постоянную поддержку.",
  },
  {
    question: "Что если мой бюджет меньше ваших минимумов?",
    answer:
      "Начните с аудита за $500. Это самая низкорисковая точка входа — вы получите полную картину состояния приложения, прежде чем тратить больше. Если итоговый ценник на ремонт окажется выше вашего бюджета, вы по крайней мере будете точно знать, что именно не так, и сможете планировать дальше. $500 засчитываются при переходе к ремонту.",
  },
  {
    question: "Чем это отличается от найма фрилансера?",
    answer:
      "Фрилансеры выставляют почасовую ставку, а значит итоговая сумма заранее неизвестна. Большинство не работали с кодовыми базами, сгенерированными AI, — они видят непривычные паттерны и либо делают избыточный рефакторинг, либо не находят корневую причину. Мы специализируемся конкретно на приложениях Lovable, Bolt, Cursor и Replit и называем фиксированную цену до того, как прикоснёмся к коду.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        badge="Старшие разработчики · Фиксированные цены · Всё принадлежит вам"
        heading="Старшие разработчики."
        headingHighlight="Фиксированные цены."
        headingSuffix="Всё принадлежит вам."
        description="Мы чиним AI-приложения, строим MVP с нуля и заменяем дорогой SaaS на open-source альтернативы, которые вы контролируете."
        primaryCta={{ label: "Починить приложение", href: "/app-rescue" }}
        secondaryCta={{ label: "Снизить SaaS-расходы", href: "#products" }}
        socialProof="50+ фаундеров помогли · Фиксированная цена, без сюрпризов · Полное владение репозиторием гарантировано"
      />

      {/* Services Overview */}
      <Feature
        featureData={services}
        badgeText="Три способа помочь"
        heading="Что нужно починить?"
        columns={3}
      />

      {/* Problem Section — Wall 1: Vibe Coding */}
      <Feature
        featureData={problemsVibeCoding}
        badgeText="Почему фаундеры застревают"
        heading="AI-кодинг доводит до 80%. Последние 20% — это и есть стена."
        columns={4}
      />

      {/* Problem Section — Wall 2: SaaS Trap */}
      <Feature
        featureData={problemsSaasTrap}
        badgeText="Ловушка SaaS"
        heading="Цена за пользователя. Ежегодный рост. Вендорный lock-in."
        columns={3}
      />

      {/* Products — 12 Tools */}
      <Statistic
        data={products}
        badgeText="12 инструментов. Без платы за пользователей. Никогда."
        heading="Замените самый дорогой SaaS — на вашем приватном инстансе."
        subtitle="Полностью задеплоено, настроено и мигрировано нами. Все функции — ноль ежемесячных SaaS-счетов."
      />

      {/* Bundles */}
      <Pricing
        plans={bundlePlans}
        badgeText="Бандлы"
        heading="Или возьмите весь стек сразу"
        subtitle="Мы объединяем связанные инструменты, чтобы снизить стоимость настройки и упростить миграцию."
        popularLabel="Лучшая цена"
      />

      {/* How It Works */}
      <AboutUs
        aboutusData={aboutUsData}
        statisticsCounter={processSteps}
      />

      {/* Social Proof */}
      <SocialProof
        badgeText="На базе проверенного open-source"
        heading="Инструменты, которые мы деплоим, используют миллионы."
        cards={socialProofCards}
        footnote="Все инструменты — open-source, активно поддерживаются и имеют венчурное финансирование на миллионы долларов. Мы деплоим, настраиваем и сопровождаем их на вашем сервере — ваши данные никогда не покидают вашего контроля."
      />

      {/* Pricing */}
      <Pricing
        plans={pricingPlans}
        badgeText="Цены"
        heading={'Фиксированные цены. Опубликованы. Без \u00abсвяжитесь для уточнения цены\u00bb.'}
        subtitle="31 конкурент прячет свои цены. Мы — нет."
        footnote="Все цены в USD. Мы оцениваем часы заранее и придерживаемся озвученной суммы. Не знаете с чего начать? Аудит за $500 — самый низкорисковый первый шаг."
      />

      {/* FAQ */}
      <ServiceFaq title="Вопросы перед записью" items={faqItems} />

      {/* Final CTA — Two Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <CTA
          heading="Приложение застряло. Давайте разблокируем его."
          description="Опишите проблему. Старший разработчик ответит в течение 24 часов с реальным диагнозом. Без обязательств, без продажных питчей."
          buttonText="Получить бесплатный диагноз"
        />
        <CTA
          heading="Вы переплачиваете за SaaS. Давайте посчитаем."
          description="Расскажите, какие инструменты используете и сколько у вас пользователей. Мы покажем, сколько стоит open-source аналог на вашем инстансе."
          buttonText="Посмотреть экономию"
        />
      </div>

      <Footer />
    </main>
  );
}
