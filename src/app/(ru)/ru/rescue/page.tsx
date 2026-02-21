"use client";

import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature02 from "@/components/shadcn-space/blocks/feature-02/feature";
import Feature03 from "@/components/shadcn-space/blocks/feature-03/feature";
import Pricing02 from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Faq01 from "@/components/shadcn-space/blocks/faq-01/faq";
import Cta01 from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer01 from "@/components/shadcn-space/blocks/footer-01/footer";
import {
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
  MessageSquare,
  Shield,
  DollarSign,
  Zap,
  Check,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/upready";
const TELEGRAM_URL = "https://t.me/ivanprotsko";

export default function RescuePageRu() {
  return (
    <>
      <title>Починим AI-приложение за 72 часа — UpReady Rescue</title>
      <div className="relative">
        <Navbar
          logoText="Up"
          logoAccent="Ready"
          logoHref="/ru"
          navLinks={[
            { title: "Главная", href: "/ru" },
            { title: "Build", href: "/ru/build" },
          ]}
          ctaText="Бесплатная диагностика"
          ctaHref={CALENDLY_URL}
          ctaExternal
          langHref="/rescue"
          langLabel="EN"
        />

        <main>
          <HeroSection
            badge="Сервис спасения AI-приложений"
            headline="Ваше AI-приложение сломалось."
            headlineAccent="Через 72 часа оно будет работать."
            subtitle="Мы спасаем приложения, созданные в Lovable, Bolt.new, Replit, v0, Cursor и других AI-инструментах. Без осуждения. Без нотаций. Чиним и двигаемся дальше."
            primaryCta={{ text: "Бесплатная диагностика", href: CALENDLY_URL, external: true }}
          />

          <Feature02
            badge="Знакомо?"
            headline="Мы уже видели вашу проблему"
            cards={[
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
                  "Вы потратили $50, $100, $200 на кредиты платформы. Каждая генерация делает хуже. Остановитесь. Мы починим за часы то, с чем AI не справляется днями.",
              },
              {
                icon: CloudOff,
                title: "Деплой-катастрофа",
                description:
                  "В превью всё работает. Нажимаете Deploy — и всё падает. Авторизация ломается. База не подключается. Деплой — слабое место AI-инструментов. Для нас — сильное.",
              },
              {
                icon: Scissors,
                title: "Франкенштейн-приложение",
                description:
                  "50 итераций AI. Код из трёх разных подходов, сшитый воедино. Уже никто — даже AI — не понимает, что происходит. Мы распутываем хаос.",
              },
            ]}
          />

          <Feature02
            badge="Наша экспертиза"
            headline="Что мы чиним"
            columns={3}
            cards={[
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
                title: "Проблемы с БД",
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
            ]}
            closingText="Если это было создано AI и оно сломано — мы починим."
          />

          <Feature03
            badge="Простой процесс"
            headline="Как работает Rescue"
            steps={[
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
                description: "Фиксированная стоимость по сложности. Никаких сюрпризов.",
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
            ]}
          />

          <Pricing02
            id="pricing"
            badge="Прозрачные цены"
            headline="Цены"
            plans={[
              {
                name: "Простая починка",
                description: "Один баг, проблема конфигурации, ошибка деплоя.",
                price: "$500",
                period: "от",
                features: [
                  "Одна конкретная проблема",
                  "24–48 часов на починку",
                  "14-дневная гарантия",
                  "Полная документация",
                ],
                cta: "Бесплатная диагностика",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Глубокое спасение",
                description: "Несколько связанных проблем. Рефакторинг кода. Переделка авторизации.",
                price: "$1,500",
                period: "от",
                features: [
                  "Решение нескольких проблем",
                  "Рефакторинг кода",
                  "48–72 часа на починку",
                  "14-дневная гарантия",
                  "Полная документация",
                  "Приоритетная поддержка",
                ],
                featured: true,
                featuredLabel: "Популярный",
                cta: "Бесплатная диагностика",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Полная пересборка",
                description: "Код не подлежит ремонту. Пересобираем ядро с нуля.",
                price: "Custom",
                features: [
                  "Полный рерайт кода",
                  "Современная архитектура",
                  "Деплой в продакшен",
                  "14-дневная гарантия",
                  "Полная документация",
                  "Постоянная поддержка",
                ],
                cta: "Узнать о Build",
                href: "/ru/build",
              },
            ]}
            footerText="Каждый проект начинается с бесплатного 15-минутного диагностического звонка."
          />

          <Faq01
            id="faq"
            badge="Вопросы"
            headline="Частые вопросы"
            items={[
              {
                question: "Какие платформы вы поддерживаете?",
                answer:
                  "Lovable, Bolt.new, Replit, v0, Cursor — и любые приложения на React, Next.js, Supabase или стандартных веб-технологиях.",
              },
              {
                question: "Как быстро вы можете починить?",
                answer: "Большинство починок занимают 24–72 часа. Сложные случаи — до недели.",
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
                answer: "Скажем прямо. Если нужна пересборка — порекомендуем наш сервис Build.",
              },
              {
                question: "Можете работать с проектом, который уже пытался починить фрилансер?",
                answer: "Да. Мы спасали приложения, через которые прошли три разных фрилансера.",
              },
            ]}
          />

          <Cta01
            headline="Хватит жечь кредиты. Пусть починкой займутся люди."
            subtitle="15-минутного звонка достаточно, чтобы узнать, что сломано и сколько стоит починка."
            ctaText="Забронировать бесплатную диагностику"
            ctaHref={CALENDLY_URL}
          />
        </main>

        <Footer01
          logoText="Up"
          logoAccent="Ready"
          logoHref="/ru"
          tagline="Спасаем AI-приложения и строим production-ready продукты."
          sitemapTitle="Услуги"
          sitemapLinks={[
            { label: "Rescue", href: "/ru/rescue" },
            { label: "Build", href: "/ru/build" },
          ]}
          contactTitle="Контакты"
          contactLinks={[
            { label: "Записаться на звонок", href: CALENDLY_URL, external: true },
          ]}
          telegramUrl={TELEGRAM_URL}
        />
      </div>
    </>
  );
}
