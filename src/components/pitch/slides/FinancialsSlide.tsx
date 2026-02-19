"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideShell } from "@/components/pitch/SlideShell";
import { financialProjection, unitEconomics } from "@/lib/pitch-data";

const maxMRR = Math.max(...financialProjection.map((d) => d.mrr));

const highlightedMonths = new Set(["M6", "M12"]);

interface UnitEconRow {
  label: string;
  value: string;
}

const unitEconRows: UnitEconRow[] = [
  { label: "Средний чек", value: `$${unitEconomics.avgRevenuePerClient.toLocaleString()}/мес` },
  { label: "CAC", value: `$${unitEconomics.cac}` },
  { label: "LTV", value: `$${unitEconomics.ltv.toLocaleString()}` },
  { label: "LTV/CAC", value: `${unitEconomics.ltvCacRatio}x` },
  { label: "Churn", value: `${unitEconomics.churnMonthly}%/мес` },
  { label: "Gross Margin", value: `${unitEconomics.grossMargin}%` },
  { label: "Break-even", value: `${unitEconomics.breakEvenMonth} (${unitEconomics.breakEvenClients} клиента)` },
];

export function FinancialsSlide() {
  return (
    <SlideShell id="slide-10" index={10}>
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
            Финансы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Финансовая модель
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: MRR projection bars */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {financialProjection.map((row, i) => {
              const isHighlighted = highlightedMonths.has(row.month);
              const barPercent = (row.mrr / maxMRR) * 100;

              return (
                <motion.div
                  key={row.month}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex items-center gap-3"
                >
                  <span
                    className={cn(
                      "text-xs font-mono w-8 shrink-0 text-right",
                      isHighlighted ? "text-foreground font-semibold" : "text-muted-foreground"
                    )}
                  >
                    {row.month}
                  </span>
                  <div className="flex-1 h-7 bg-muted/30 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${barPercent}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + i * 0.05,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      className={cn(
                        "h-full rounded flex items-center justify-end px-2",
                        isHighlighted
                          ? "bg-[hsl(var(--accent))]"
                          : "bg-muted-foreground/20"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-xs w-16 shrink-0 text-right tabular-nums",
                      isHighlighted ? "text-foreground font-bold" : "text-muted-foreground"
                    )}
                  >
                    ${(row.mrr / 1000).toFixed(0)}K
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Unit economics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-2"
          >
            <Card className="border-border/50 h-fit">
              <CardContent className="pt-6 flex flex-col gap-4">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Unit Economics
                </h3>
                <div className="flex flex-col gap-3">
                  {unitEconRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-semibold tabular-nums">{row.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
