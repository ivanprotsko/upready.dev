"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideShell } from "@/components/pitch/SlideShell";
import { AnimatedCounter } from "@/components/pitch/AnimatedCounter";
import { MarketFunnel } from "@/components/pitch/MarketFunnel";
import { marketStats, marketFunnel } from "@/lib/pitch-data";

interface StatCard {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const statCards: StatCard[] = [
  {
    value: marketStats.businessesUsingVideo,
    suffix: "%",
    label: "бизнесов",
    sublabel: "используют видео в маркетинге",
  },
  {
    value: marketStats.conversionWithVideo,
    suffix: "% vs 2.9%",
    label: "конверсия",
    sublabel: "с видео vs без видео",
  },
  {
    value: marketStats.boughtAfterVideo,
    suffix: "%",
    label: "купили",
    sublabel: "после просмотра видео бренда",
  },
  {
    value: marketStats.consumersWantMore,
    suffix: "%",
    label: "хотят больше",
    sublabel: "видео от брендов",
  },
];

export function MarketSlide() {
  return (
    <SlideShell id="slide-3" index={3}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge variant="outline" className="text-xs tracking-wider uppercase">
              Размер рынка
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
            Рынок, который нельзя игнорировать
          </motion.h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left: Market Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <MarketFunnel
              tam={marketFunnel.tam}
              sam={marketFunnel.sam}
              som={marketFunnel.som}
            />
          </motion.div>

          {/* Right: Stat cards grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {statCards.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-1">
                    <span className="text-3xl md:text-4xl font-bold tabular-nums">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                      />
                    </span>
                    <span className="text-sm font-medium">{stat.label}</span>
                    <span className="text-xs text-muted-foreground leading-tight">
                      {stat.sublabel}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
