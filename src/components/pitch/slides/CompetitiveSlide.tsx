"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { SlideShell } from "@/components/pitch/SlideShell";
import { competitors, competitiveGaps } from "@/lib/pitch-data";

const tableHeaders = ["Сервис", "Цена", "Тип", "Регион", "Turnaround"] as const;

export function CompetitiveSlide() {
  const gaps = competitiveGaps.slice(0, 3);

  return (
    <SlideShell id="slide-6" index={6}>
      <div className="flex flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-4"
        >
          <Badge variant="outline" className="text-xs tracking-wider uppercase w-fit">
            Конкуренты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Конкурентный ландшафт
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full overflow-x-auto"
        >
          {/* Header row */}
          <div className="grid grid-cols-5 gap-4 px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground border-b border-border">
            {tableHeaders.map((header) => (
              <div key={header}>{header}</div>
            ))}
          </div>

          {/* Data rows */}
          {competitors.map((competitor, i) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.15 + i * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={cn(
                "grid grid-cols-5 gap-4 px-4 py-3 text-sm border-b border-border/50",
                competitor.highlight &&
                  "border-l-4 border-l-[hsl(var(--accent))] bg-[hsl(var(--accent))]/5"
              )}
            >
              <div className={cn("font-medium", competitor.highlight && "text-foreground")}>
                {competitor.name}
              </div>
              <div className="text-muted-foreground">{competitor.price}</div>
              <div className="text-muted-foreground">{competitor.type}</div>
              <div className="text-muted-foreground">{competitor.region}</div>
              <div className="text-muted-foreground">{competitor.turnaround}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive gaps */}
        <div className="flex flex-col md:flex-row gap-6">
          {gaps.map((item, i) => (
            <motion.div
              key={item.gap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex-1 flex flex-col gap-2"
            >
              <Badge variant="secondary" className="text-xs w-fit">
                {item.gap}
              </Badge>
              <p className="text-sm text-muted-foreground">{item.opportunity}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
