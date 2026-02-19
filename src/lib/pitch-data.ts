// Данные исследования рынка video-production
// Источник: /video-production.md

export const marketStats = {
  businessesUsingVideo: 91,
  marketSizeB: 122.5,
  marketersPositiveROI: 93,
  boughtAfterVideo: 85,
  conversionWithVideo: 4.8,
  conversionWithout: 2.9,
  shortFormHighestROI: 49,
  consumersWantMore: 84,
  planSameOrMoreSpend: 92,
};

export const painPoints = [
  { label: "Нет времени на видео", value: 33, icon: "Clock" as const },
  { label: "Нет экспертизы in-house", value: 30.6, icon: "GraduationCap" as const },
  { label: "Нет креативных идей", value: 26.7, icon: "Lightbulb" as const },
  { label: "Бюджет ограничен", value: 23.8, icon: "DollarSign" as const },
  { label: "Нет стратегии", value: 16, icon: "Target" as const },
];

export const revisionStats = {
  delaysFromFeedback: 67,
  fivePlusRevisions: 60,
  tenPlusRevisions: 14,
  weeksPerRevision: "1-2",
};

export const marketFunnel = {
  tam: { value: 122.5, unit: "$B", label: "Глобальный рынок short-form видео рекламы" },
  sam: { value: 15, unit: "$B", label: "Подписочные видео-сервисы (Европа + СНГ)" },
  som: { value: 500, unit: "$M", label: "Польша + Россия mid-tier ($3K-7K/мес)" },
};

export const pricingTiers = [
  { tier: "Budget DIY", range: "$99–399", perVideo: "$50–100", desc: "Базовый монтаж, субтитры" },
  { tier: "Mid Editing", range: "$899–1,999", perVideo: "$100–250", desc: "Dedicated editor, 1-3 дн" },
  { tier: "Full-Service Mid", range: "$2K–5K", perVideo: "$200–500", desc: "Стратегия + монтаж + публикация" },
  { tier: "Premium Agency", range: "$5K–15K", perVideo: "$500–2K", desc: "Полный продакшен" },
  { tier: "Enterprise", range: "$15K+", perVideo: "Custom", desc: "Инфлюенсер-кампании, AI" },
];

export const competitors = [
  { name: "Feedbird", price: "$99/мес", type: "Только монтаж", region: "Глобальный", turnaround: "10 дн", fullService: false },
  { name: "BeCreatives", price: "$899–1,999", type: "Монтаж", region: "Глобальный", turnaround: "same-day", fullService: false },
  { name: "LYFE Marketing", price: "$1,350–5,000", type: "Full-service", region: "США", turnaround: "varies", fullService: true },
  { name: "MATCH Agency", price: "Custom", type: "Full-service", region: "Европа", turnaround: "varies", fullService: true },
  { name: "OSLOV Studio", price: "Custom", type: "Full-service", region: "Польша", turnaround: "varies", fullService: true },
  { name: "zeno.team", price: "$3K–7K/мес", type: "Full-cycle", region: "EU + СНГ", turnaround: "24-48ч", fullService: true, highlight: true },
];

export const competitiveGaps = [
  { gap: "Нет подписочных сервисов в Европе", opportunity: "Первый доступный EU подписочный видео-сервис" },
  { gap: "Никто не совмещает продакшен + стратегию", opportunity: "Интегрированный full-cycle движок" },
  { gap: "Прозрачные цены в mid-tier — редкость", opportunity: "$3K–7K/мес — пустая ниша" },
  { gap: "Скорость — 2-10 дней типично", opportunity: "24-48ч turnaround" },
  { gap: "Польша — голубой океан", opportunity: "Ни одного подписочного short-form агентства" },
  { gap: "Россия — фрилансерский рынок", opportunity: "Нет подписочных сервисов" },
];

export const videoPricing = [
  {
    name: "Starter",
    price: "$3,000",
    period: "/мес",
    videos: "5 видео",
    turnaround: "5-7 дней",
    features: [
      "Сценарий + съёмка + монтаж",
      "Оптимизация под 2 платформы",
      "1 раунд правок",
      "Базовая аналитика",
    ],
  },
  {
    name: "Growth",
    price: "$5,000",
    period: "/мес",
    videos: "10-15 видео",
    turnaround: "48ч",
    popular: true,
    features: [
      "Всё из Starter",
      "Контент-стратегия",
      "Все платформы (TikTok, Reels, Shorts)",
      "Безлимитные правки",
      "Еженедельная аналитика",
      "Dedicated creative партнер",
    ],
  },
  {
    name: "Scale",
    price: "$7,000",
    period: "/мес",
    videos: "20+ видео",
    turnaround: "24ч",
    features: [
      "Всё из Growth",
      "A/B тестирование контента",
      "Trend-jacking (реакция за 24ч)",
      "Мультибренд поддержка",
      "Приоритетный продакшен",
      "Стратегические сессии",
    ],
  },
];

export const financialProjection = [
  { month: "M1", clients: 2, mrr: 10000 },
  { month: "M2", clients: 3, mrr: 15000 },
  { month: "M3", clients: 5, mrr: 25000 },
  { month: "M4", clients: 7, mrr: 35000 },
  { month: "M5", clients: 8, mrr: 40000 },
  { month: "M6", clients: 10, mrr: 50000 },
  { month: "M7", clients: 12, mrr: 60000 },
  { month: "M8", clients: 14, mrr: 70000 },
  { month: "M9", clients: 16, mrr: 80000 },
  { month: "M10", clients: 18, mrr: 90000 },
  { month: "M11", clients: 20, mrr: 100000 },
  { month: "M12", clients: 22, mrr: 110000 },
];

export const unitEconomics = {
  avgRevenuePerClient: 5000,
  cac: 500,
  ltv: 30000,
  ltvCacRatio: 60,
  churnMonthly: 5,
  grossMargin: 70,
  breakEvenClients: 4,
  breakEvenMonth: "M3",
};

export const gtmPhases = [
  {
    phase: "Phase 1",
    title: "Польша",
    subtitle: "Голубой океан",
    timeline: "Q2 2026",
    tactics: [
      "Прямой outreach к польским брендам и агентствам",
      "LinkedIn + холодные DM на лице принимающих решения",
      "Партнёрства с SMM-агентствами (white-label)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Европа",
    subtitle: "Масштабирование",
    timeline: "Q3-Q4 2026",
    tactics: [
      "Expansion в DACH и UK рынки",
      "Контент-маркетинг (кейсы с польскими клиентами)",
      "Referral программа (20% комиссия)",
    ],
  },
  {
    phase: "Phase 3",
    title: "СНГ",
    subtitle: "Русскоязычный рынок",
    timeline: "2027",
    tactics: [
      "Русскоязычный лендинг и поддержка",
      "Telegram-канал с кейсами и трендами",
      "Партнёрства с digital-агентствами СНГ",
    ],
  },
];

export const slideNames = [
  "Обложка",
  "Проблема",
  "Решение",
  "Рынок",
  "Продукт",
  "Бизнес-модель",
  "Конкуренты",
  "Трекшн",
  "GTM",
  "Команда",
  "Финансы",
  "Контакт",
] as const;
