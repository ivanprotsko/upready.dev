"use client";

import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import Feature02 from "@/components/shadcn-space/blocks/feature-02/feature";
import Pricing01 from "@/components/shadcn-space/blocks/pricing-01/pricing";
import LogoCloud03 from "@/components/shadcn-space/blocks/logo-cloud-03/logo-cloud";
import Cta01 from "@/components/shadcn-space/blocks/cta-01/cta";
import Footer01 from "@/components/shadcn-space/blocks/footer-01/footer";
import {
  Quote,
  Wrench,
  Rocket,
  MessageSquareText,
  Search,
  CircleCheckBig,
  TrendingUp,
  BarChart3,
  Percent,
  Timer,
  Sparkles,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/upready";
const TELEGRAM_URL = "https://t.me/ivanprotsko";

export default function HomePageRu() {
  return (
    <div className="relative">
      <Navbar
        logoText="Up"
        logoAccent="Ready"
        logoHref="/ru"
        navLinks={[
          { title: "Rescue", href: "/ru/rescue" },
          { title: "Build", href: "/ru/build" },
        ]}
        ctaText="Забронировать звонок"
        ctaHref={CALENDLY_URL}
        ctaExternal
        langHref="/"
        langLabel="EN"
      />

      <main>
        <HeroSection
          badge="Спасение AI-кода и разработка MVP"
          headline="Ваше AI-приложение сломалось."
          headlineAccent="Мы починим."
          subtitle="Вы попробовали Lovable, Bolt или Cursor. Всё работало — пока не сломалось. Теперь вы застряли в петле, сжигаете кредиты, а деплой не проходит. Мы через это проходили. Мы знаем, как это исправить."
          primaryCta={{ text: "Починить моё приложение", href: "/ru/rescue" }}
          secondaryCta={{ text: "Построить MVP", href: "/ru/build" }}
          subtext="Нам доверяют фаундеры, использующие Lovable, Bolt.new, Replit, v0 и Cursor"
        />

        <Feature02
          badge="Знакомая ситуация?"
          headline="Мы слышим это каждый день"
          cards={[
            {
              icon: Quote,
              title: "«200 кредитов потрачено»",
              description:
                "Я потратил 200 кредитов, а приложение до сих пор падает при деплое.",
            },
            {
              icon: Quote,
              title: "«AI ломает всё подряд»",
              description:
                "AI чинит одно — ломает три других. Я хожу по кругу.",
            },
            {
              icon: Quote,
              title: "«Фрилансер сделал хуже»",
              description:
                "Нанял фрилансера на Fiverr. Стало только хуже.",
            },
            {
              icon: Quote,
              title: "«Нужен тот, кто понимает»",
              description:
                "Мне нужен кто-то, кто реально понимает, что генерируют эти AI-инструменты.",
            },
          ]}
          closingText="Если узнаёте себя — вы по адресу."
        />

        <Pricing01
          id="services"
          badge="Услуги"
          headline="Два способа помочь"
          featuresLabel="Что включено"
          plans={[
            {
              name: "Rescue",
              description: "Приложение сломалось? Чиним AI-код быстро.",
              price: "$500",
              period: " от",
              features: [
                "Застряли в doom loop? Мы вас вытащим",
                "Ошибки деплоя, баги авторизации, сломанный UI",
                "24–72 часа на большинство починок",
                "14-дневная гарантия на каждую починку",
                "Полная документация изменений",
                "Бесплатная начальная диагностика",
              ],
              bgColor: "bg-orange-400/10",
              cta: "Бесплатная диагностика",
              href: "/ru/rescue",
            },
            {
              name: "Build",
              description: "Нужен MVP? От идеи до запуска за недели.",
              price: "$2 500",
              period: " от",
              features: [
                "Production-ready приложение, не хрупкий прототип",
                "Чистый код, нормальная авторизация, реальный деплой",
                "Вы владеете всем — кодом, репо, данными",
                "Доставка за 1–3 недели",
                "2 недели пост-запуск поддержки",
                "Полное владение исходным кодом",
              ],
              bgColor: "bg-teal-400/10",
              cta: "Забронировать discovery-звонок",
              href: "/ru/build",
            },
          ]}
        />

        <Feature02
          id="how-it-works"
          badge="Как это работает"
          headline="Три простых шага"
          columns={3}
          cards={[
            {
              icon: MessageSquareText,
              title: "Расскажите, что не так",
              description: "Забронируйте звонок или опишите проблему. Займёт 15 минут.",
            },
            {
              icon: Search,
              title: "Мы диагностируем и чиним",
              description:
                "Команда проводит аудит кода, находит корневые причины и доставляет рабочее решение.",
            },
            {
              icon: CircleCheckBig,
              title: "Вы готовы к запуску",
              description: "Рабочее приложение. Задеплоено. Задокументировано. Ваше.",
            },
          ]}
        />

        <LogoCloud03
          items={[
            "Lovable",
            "Bolt.new",
            "Replit",
            "v0",
            "Cursor",
            "Supabase",
            "Vercel",
            "Netlify",
          ]}
        />

        <Feature02
          badge="Рынок"
          headline="Рынок растёт быстро"
          columns={3}
          cards={[
            {
              icon: TrendingUp,
              title: "~8М пользователей",
              description: "пользователей Lovable, 100 000 новых проектов каждый день",
            },
            {
              icon: BarChart3,
              title: "41% AI-кода",
              description: "всего кода сегодня генерируется AI",
            },
            {
              icon: Percent,
              title: "95% тратят доп. время",
              description: "разработчиков тратят дополнительное время на починку того, что выдаёт AI",
            },
            {
              icon: Timer,
              title: "300% рост спроса",
              description: "рост спроса на услуги по чистке AI-кода за 6 месяцев",
            },
            {
              icon: Sparkles,
              title: "Новая категория",
              description: "Fiverr создал отдельную категорию «Vibe Coding»",
            },
          ]}
          closingText="Вы не одиноки. И вам не обязательно разбираться с этим самостоятельно."
        />

        <Cta01
          headline="Готовы запустить ваше приложение?"
          subtitle="Хватит жечь кредиты. Хватит ходить по кругу. Поговорите с человеком, который понимает AI-код — и знает, как заставить его работать."
          ctaText="Забронировать бесплатный звонок"
          ctaHref={CALENDLY_URL}
        />
      </main>

      <Footer01
        logoText="Up"
        logoAccent="Ready"
        logoHref="/ru"
        tagline="Мы чиним AI-приложения и создаём MVP, которые реально работают."
        sitemapTitle="Карта сайта"
        sitemapLinks={[
          { label: "Главная", href: "/ru" },
          { label: "Rescue", href: "/ru/rescue" },
          { label: "Build", href: "/ru/build" },
        ]}
        contactTitle="Контакты"
        contactLinks={[
          { label: "Telegram", href: TELEGRAM_URL, external: true },
          { label: "Забронировать звонок", href: CALENDLY_URL, external: true },
        ]}
        telegramUrl={TELEGRAM_URL}
        bottomText="Сделано с AI на Бали"
      />
    </div>
  );
}
