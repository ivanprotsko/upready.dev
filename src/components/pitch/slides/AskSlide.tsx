"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlideShell } from "@/components/pitch/SlideShell";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface AskCard {
  title: string;
  description: string;
}

const askCards: AskCard[] = [
  {
    title: "Клиенты",
    description: "Первые 10 брендов получат специальные условия",
  },
  {
    title: "Партнёры",
    description: "SMM-агентства: white-label видео-продакшен",
  },
  {
    title: "Инвесторы",
    description: "Pre-seed для масштабирования команды",
  },
];

const TELEGRAM_URL = "https://t.me/ivanprotsko";

export function AskSlide() {
  return (
    <SlideShell id="slide-11" index={11}>
      <div className="flex flex-col items-center gap-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center gap-4"
        >
          <Badge variant="outline" className="text-xs tracking-wider uppercase w-fit">
            Следующий шаг
          </Badge>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
            Присоединяйтесь к запуску
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            Мы ищем первых 10 клиентов и стратегических партнёров
          </p>
        </motion.div>

        {/* Mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          {askCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Card className="border-border/50 h-full">
                <CardContent className="pt-6 flex flex-col gap-2 text-center">
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            asChild
            className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
          >
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 transition-all duration-500">
                Написать в Telegram
              </span>
              <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Button>
          <p className="text-xs text-muted-foreground/60">
            USDT/USDC &middot; Асинхронно &middot; Без созвонов
          </p>
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Назад на главную
          </Link>
        </motion.div>
      </div>
    </SlideShell>
  );
}
