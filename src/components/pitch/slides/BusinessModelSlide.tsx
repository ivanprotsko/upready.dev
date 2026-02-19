"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlideShell } from "@/components/pitch/SlideShell";
import { videoPricing } from "@/lib/pitch-data";
import { Check, ArrowRight } from "lucide-react";

const TELEGRAM_LINK = "https://t.me/zenoagency";

export function BusinessModelSlide() {
  return (
    <SlideShell id="slide-5" index={5}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge variant="outline" className="text-xs tracking-wider uppercase">
              Бизнес-модель
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
            Подписка, а не проект
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
            Дешевле premium-агентств ($15K+), полнее editing-сервисов ($1K)
          </motion.p>
        </div>

        {/* Pricing columns */}
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
          {videoPricing.map((tier) => {
            const isPopular = "popular" in tier && tier.popular;

            return (
              <motion.div
                key={tier.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card
                  className={cn(
                    "h-full relative",
                    isPopular &&
                      "border-[hsl(var(--accent))] shadow-[0_0_30px_-5px_hsl(var(--accent)/0.15)]"
                  )}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent))]/90">
                        Популярный
                      </Badge>
                    </div>
                  )}

                  <CardContent className="flex flex-col gap-6 pt-2">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold">{tier.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold tabular-nums">
                          {tier.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {tier.period}
                        </span>
                      </div>
                    </div>

                    {/* Key metrics */}
                    <div className="flex flex-col gap-2 pb-4 border-b border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Видео</span>
                        <span className="font-medium">{tier.videos}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Turnaround</span>
                        <span className="font-medium">{tier.turnaround}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 flex-1">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-4 shrink-0 mt-0.5 text-[hsl(var(--accent))]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      variant={isPopular ? "default" : "outline"}
                      className="w-full"
                    >
                      <a
                        href={TELEGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Начать
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
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
