"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideShell } from "@/components/pitch/SlideShell";
import { ProgressBar } from "@/components/pitch/ProgressBar";
import { painPoints, revisionStats } from "@/lib/pitch-data";
import { AlertTriangle } from "lucide-react";

const revisionItems = [
  {
    value: `${revisionStats.delaysFromFeedback}%`,
    label: "задержек от фидбэка",
  },
  {
    value: `${revisionStats.fivePlusRevisions}%`,
    label: "клиентов -- 5+ правок",
  },
  {
    value: `${revisionStats.tenPlusRevisions}%`,
    label: "клиентов -- 10+ правок",
  },
  {
    value: `+${revisionStats.weeksPerRevision} нед`,
    label: "каждый раунд правок",
  },
];

export function ProblemSlide() {
  return (
    <SlideShell id="slide-1" index={1}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Badge variant="outline" className="text-xs tracking-wider uppercase">
              Проблема
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
            Большинство видеоагентств застряли в 2015
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column: Pain points */}
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
            className="flex flex-col gap-5"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <ProgressBar
                  label={point.label}
                  value={point.value}
                  suffix="%"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right column: Revision frustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Card className="h-full">
              <CardContent className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-destructive/10">
                    <AlertTriangle className="size-5 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold">Ад правок</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {revisionItems.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <span className="text-2xl md:text-3xl font-bold tabular-nums">
                        {item.value}
                      </span>
                      <span className="text-xs text-muted-foreground leading-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground/70 border-t border-border pt-4">
                  Каждый цикл правок = потерянное время и деньги. Мы решаем это
                  интегрированным процессом.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
