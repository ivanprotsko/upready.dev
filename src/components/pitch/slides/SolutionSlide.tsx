"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideShell } from "@/components/pitch/SlideShell";
import { Target, Video, Share2, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SolutionCard {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

const solutions: SolutionCard[] = [
  {
    icon: Target,
    title: "Стратегия",
    bullets: [
      "Анализ трендов и ниши",
      "Контент-план на месяц",
      "Определение вирусных форматов",
      "Платформо-специфичный подход",
    ],
  },
  {
    icon: Video,
    title: "Продакшен",
    bullets: [
      "Написание сценариев",
      "Профессиональная съёмка",
      "Монтаж и VFX",
      "Цветокоррекция и звук",
    ],
  },
  {
    icon: Share2,
    title: "Дистрибуция",
    bullets: [
      "Оптимизация под платформы",
      "Хештеги и каптионы",
      "Оптимальное время постов",
      "Аналитика и отчёты",
    ],
  },
];

export function SolutionSlide() {
  return (
    <SlideShell id="slide-2" index={2}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge variant="outline" className="text-xs tracking-wider uppercase">
              Решение
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-3xl md:text-5xl font-medium tracking-tight"
          >
            Интегрированный видео-движок
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Всё под одной крышей. Без посредников. 24-48ч turnaround.
          </motion.p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-[hsl(var(--accent))]/10">
                        <Icon className="size-5 text-[hsl(var(--accent))]" />
                      </div>
                      <h3 className="text-lg font-semibold">{solution.title}</h3>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {solution.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-4 shrink-0 mt-0.5 text-[hsl(var(--accent))]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SlideShell>
  );
}
