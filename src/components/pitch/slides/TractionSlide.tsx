"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideShell } from "@/components/pitch/SlideShell";
import { AnimatedCounter } from "@/components/pitch/AnimatedCounter";

interface Milestone {
  period: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  { period: "Q2 2026", title: "Запуск в Польше", description: "Первые 3 клиента" },
  { period: "Q3 2026", title: "10 клиентов", description: "MRR $50K" },
  { period: "Q4 2026", title: "Expansion EU", description: "MRR $100K" },
  { period: "2027", title: "СНГ рынок", description: "MRR $200K+" },
];

interface StatCard {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatCard[] = [
  { value: 85, suffix: "%", label: "людей купили после видео" },
  { value: 5, suffix: "x", label: "больше вовлечения при постоянных постах" },
  { value: 4.8, suffix: "%", label: "конверсия сайтов с видео (vs 2.9%)" },
];

export function TractionSlide() {
  return (
    <SlideShell id="slide-7" index={7}>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-4"
        >
          <Badge variant="outline" className="text-xs tracking-wider uppercase w-fit">
            Трекшн
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            План запуска
          </h2>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-border hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col gap-3 relative"
              >
                {/* Dot */}
                <div
                  className={cn(
                    "size-3 rounded-full relative z-10",
                    i === 0
                      ? "bg-[hsl(var(--accent))]"
                      : "border-2 border-muted-foreground/40 bg-background"
                  )}
                />
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-xs font-mono text-muted-foreground">
                    {milestone.period}
                  </span>
                  <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Card className="border-border/50">
                <CardContent className="pt-6 flex flex-col gap-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    className="text-3xl font-bold tracking-tight"
                  />
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
