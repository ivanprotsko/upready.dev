"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideShell } from "@/components/pitch/SlideShell";
import {
  FileText,
  Clapperboard,
  Camera,
  Scissors,
  Smartphone,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: ProductFeature[] = [
  {
    icon: FileText,
    title: "Контент-стратегия",
    description: "Анализ трендов, контент-план, форматы",
  },
  {
    icon: Clapperboard,
    title: "Сценарии",
    description: "3-5 вариантов на видео с вирусными хуками",
  },
  {
    icon: Camera,
    title: "Съёмка",
    description: "Профессиональное оборудование, one-take эффективность",
  },
  {
    icon: Scissors,
    title: "Монтаж",
    description: "Цветокоррекция, VFX, субтитры, звук",
  },
  {
    icon: Smartphone,
    title: "Адаптация",
    description: "TikTok, Reels, Shorts, Stories — все форматы",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Еженедельные отчёты, A/B тестирование",
  },
];

const platforms = [
  "TikTok",
  "Instagram Reels",
  "YouTube Shorts",
  "Instagram Stories",
];

export function ProductSlide() {
  return (
    <SlideShell id="slide-4" index={4}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge variant="outline" className="text-xs tracking-wider uppercase">
              Продукт
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
            Что получает клиент
          </motion.h2>
        </div>

        {/* Central hero stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col items-center text-center gap-2"
        >
          <span className="text-6xl md:text-8xl font-bold tabular-nums">
            10-15
          </span>
          <span className="text-lg md:text-xl text-muted-foreground">
            видео/мес
          </span>
        </motion.div>

        {/* Feature grid */}
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
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-[hsl(var(--accent))]/10">
                      <Icon className="size-5 text-[hsl(var(--accent))]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-semibold">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-wrap justify-center gap-2"
        >
          {platforms.map((platform) => (
            <Badge
              key={platform}
              variant="secondary"
              className="text-xs px-3 py-1"
            >
              {platform}
            </Badge>
          ))}
        </motion.div>
      </div>
    </SlideShell>
  );
}
