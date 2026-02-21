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
  Lightbulb,
  Target,
  Wrench,
  Handshake,
  Check,
  Phone,
  FileText,
  Hammer,
  MessageSquare,
  Rocket,
  User,
  Presentation,
  Building2,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/upready";
const TELEGRAM_URL = "https://t.me/ivanprotsko";

export default function BuildPageRu() {
  return (
    <>
      <title>Построим MVP за недели, а не месяцы — UpReady Build</title>
      <div className="relative">
        <Navbar
          logoText="Up"
          logoAccent="Ready"
          logoHref="/ru"
          navLinks={[
            { title: "Главная", href: "/ru" },
            { title: "Rescue", href: "/ru/rescue" },
          ]}
          ctaText="Записаться на звонок"
          ctaHref={CALENDLY_URL}
          ctaExternal
          langHref="/build"
          langLabel="EN"
        />

        <main>
          <HeroSection
            badge="UpReady Build"
            headline="Ваш MVP. Сделан правильно. Запущен быстро."
            subtitle="Мы используем AI-инструменты плюс реальную инженерию, чтобы строить production-ready приложения за недели, а не месяцы. Вы получаете рабочий продукт — а не хрупкий прототип, который ломается при первых реальных пользователях."
            primaryCta={{ text: "Забронировать discovery-звонок", href: CALENDLY_URL, external: true }}
            secondaryCta={{ text: "Расскажите о своей идее", href: CALENDLY_URL }}
          />

          <Feature02
            badge="Честный ответ"
            headline="Почему не сделать самому через vibe coding?"
            cards={[
              {
                icon: Lightbulb,
                title: "Можно попробовать",
                description:
                  "AI-инструменты потрясающе работают для прототипов. Но между «работает в превью» и «готово для реальных пользователей» — пропасть.",
              },
              {
                icon: Target,
                title: "Проблема 80/20",
                description:
                  "AI генерирует 80% кода быстро. Оставшиеся 20% — безопасность, авторизация, деплой, крайние случаи — требуют 80% усилий.",
              },
              {
                icon: Wrench,
                title: "Те же инструменты, другой результат",
                description:
                  "Мы используем те же AI-инструменты: Lovable, Bolt, Cursor. Разница в том, что мы знаем, где они ломаются — и умеем доводить до конца.",
              },
              {
                icon: Handshake,
                title: "Видение vs инженерия",
                description: "Вы отвечаете за видение. Мы — за инженерию.",
              },
            ]}
          />

          <Feature03
            badge="Результат"
            headline="Что вы получаете"
            steps={[
              {
                icon: Check,
                title: "Рабочее приложение в продакшене",
                description: "Живой URL, реальные пользователи могут зайти",
              },
              {
                icon: Check,
                title: "Чистая, поддерживаемая кодовая база",
                description: "Не AI-спагетти, с которым вы боролись",
              },
              {
                icon: Check,
                title: "GitHub-репо с документацией",
                description: "Вы владеете кодом и понимаете его",
              },
              {
                icon: Check,
                title: "Правильно настроенная БД",
                description: "Supabase с корректными RLS-политиками",
              },
              {
                icon: Check,
                title: "Авторизация, которая работает",
                description: "Регистрация, вход, сброс пароля — всё на месте",
              },
              {
                icon: Check,
                title: "Пайплайн деплоя",
                description: "Vercel или Netlify с настроенными конфигами",
              },
              {
                icon: Check,
                title: "2 недели пост-запуск поддержки",
                description: "Баги, правки, вопросы — мы на связи",
              },
            ]}
          />

          <Feature02
            badge="Для кого"
            headline="Идеально для"
            cards={[
              {
                icon: User,
                title: "Соло-фаундеры, валидирующие идею",
                description:
                  "Нужно протестировать с реальными пользователями до того, как привлекать инвестиции. Скорость важнее совершенства.",
              },
              {
                icon: Presentation,
                title: "Стартапы, которым нужно демо",
                description: "Рабочий продукт говорит громче питч-дека. Покажите что-то реальное.",
              },
              {
                icon: Building2,
                title: "Бизнесы, тестирующие новое направление",
                description: "Нужно двигаться быстро, не отвлекая свою команду разработки.",
              },
              {
                icon: Wrench,
                title: "Все, кто попробовал vibe coding",
                description:
                  "Вы знаете инструменты. Видели, что они могут. Нужен кто-то, кто доведёт до конца.",
              },
            ]}
          />

          <Feature03
            badge="Процесс"
            headline="Как работает Build"
            steps={[
              {
                icon: Phone,
                title: "Discovery-звонок — 30 минут, бесплатно",
                description: "Вы рассказываете идею. Мы задаём правильные вопросы.",
              },
              {
                icon: FileText,
                title: "Предложение — в течение 48 часов",
                description: "Чёткий документ со скоупом, таймлайном и фиксированной ценой.",
              },
              {
                icon: Hammer,
                title: "Спринт разработки — 1–3 недели",
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
                description: "Задеплоено. Задокументировано. Передано. Вы готовы.",
              },
            ]}
          />

          <Pricing02
            id="pricing"
            badge="Цены"
            headline="Простые, прозрачные цены"
            plans={[
              {
                name: "Стартовый MVP",
                description: "Лендинг + одна ключевая фича + авторизация + деплой.",
                price: "$2,500",
                period: "от",
                features: [
                  "Лендинг + ключевая фича",
                  "Авторизация (регистрация, вход, сброс)",
                  "Настройка базы данных (Supabase)",
                  "Деплой на Vercel/Netlify",
                  "GitHub-репо с документацией",
                  "1 неделя пост-запуск поддержки",
                ],
                cta: "Начать",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Полный MVP",
                description: "Несколько фич, интеграции с внешними сервисами, админ-панель.",
                price: "$5,000",
                period: "от",
                features: [
                  "Несколько фич и страниц",
                  "Интеграции со сторонними сервисами",
                  "Админ-панель",
                  "Продвинутая авторизация и роли",
                  "Полный пайплайн деплоя",
                  "2 недели пост-запуск поддержки",
                ],
                featured: true,
                featuredLabel: "Популярный",
                cta: "Начать",
                href: CALENDLY_URL,
                external: true,
              },
              {
                name: "Кастом",
                description: "Сложная логика, несколько ролей, продвинутые интеграции.",
                price: "Обсудим",
                features: [
                  "Кастомная архитектура",
                  "Сложная бизнес-логика",
                  "Несколько ролей пользователей",
                  "Продвинутые интеграции",
                  "Масштабируемая инфраструктура",
                  "Постоянная поддержка",
                ],
                cta: "Начать",
                href: CALENDLY_URL,
                external: true,
              },
            ]}
            footerText="Оплата: 50% предоплата, 50% при сдаче. Все проекты включают полное владение исходным кодом."
          />

          <Faq01
            id="faq"
            badge="Вопросы"
            headline="Частые вопросы"
            items={[
              {
                question: "Какой технический стек вы используете?",
                answer: "React/Next.js, Supabase, Tailwind CSS, Vercel.",
              },
              {
                question: "Сколько времени занимает?",
                answer: "1–3 недели для большинства MVP.",
              },
              {
                question: "Что если потом нужно добавить фичи?",
                answer: "Кодовая база чистая и задокументированная.",
              },
              {
                question: "Я владею кодом?",
                answer: "100%. GitHub-репо, база данных, деплой — всё ваше.",
              },
              {
                question: "Можете работать с моим существующим vibe-coded проектом?",
                answer: "Если это сломанный прототип — да. Если сначала нужна починка — начните с Rescue.",
              },
              {
                question: "Что если у меня нет технического задания?",
                answer: "У большинства наших клиентов его нет. Для этого и существует discovery-звонок.",
              },
            ]}
          />

          <Cta01
            headline="Есть идея? Давайте сделаем её реальной."
            subtitle="30-минутного звонка достаточно. Без давления. Без обязательств."
            ctaText="Забронировать discovery-звонок"
            ctaHref={CALENDLY_URL}
          />
        </main>

        <Footer01
          logoText="Up"
          logoAccent="Ready"
          logoHref="/ru"
          tagline="Мы строим и спасаем MVP, чтобы фаундеры могли сосредоточиться на главном."
          sitemapTitle="Карта сайта"
          sitemapLinks={[
            { label: "Главная", href: "/ru" },
            { label: "Build", href: "/ru/build" },
            { label: "Rescue", href: "/ru/rescue" },
          ]}
          contactTitle="Контакты"
          contactLinks={[
            { label: "Telegram", href: TELEGRAM_URL, external: true },
            { label: "Записаться на звонок", href: CALENDLY_URL, external: true },
          ]}
          telegramUrl={TELEGRAM_URL}
        />
      </div>
    </>
  );
}
