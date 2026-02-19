"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { SlideShell } from "@/components/pitch/SlideShell";
import { gtmPhases } from "@/lib/pitch-data";

export function GoToMarketSlide() {
  return (
    <SlideShell id="slide-8" index={8}>
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
            Go-to-Market
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Стратегия выхода на рынок
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {gtmPhases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
            >
              {/* Left side: phase number + timeline */}
              <div className="flex flex-col items-center shrink-0">
                {/* Dot */}
                <div
                  className={cn(
                    "size-4 rounded-full relative z-10 shrink-0",
                    i === 0
                      ? "bg-[hsl(var(--accent))]"
                      : "border-2 border-muted-foreground/40 bg-background"
                  )}
                />
                {/* Connecting line */}
                {i < gtmPhases.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              {/* Right side: content */}
              <div className="flex flex-col gap-3 pb-2 -mt-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {phase.phase}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    {phase.timeline}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-1">
                  {phase.tactics.map((tactic) => (
                    <li
                      key={tactic}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-[hsl(var(--accent))] mt-1.5 shrink-0">
                        &bull;
                      </span>
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
