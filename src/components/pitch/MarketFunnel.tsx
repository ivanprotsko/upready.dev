"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

interface FunnelLevel {
  value: number;
  unit: string;
  label: string;
}

interface MarketFunnelProps {
  tam: FunnelLevel;
  sam: FunnelLevel;
  som: FunnelLevel;
}

export function MarketFunnel({ tam, sam, som }: MarketFunnelProps) {
  const levels = [
    { ...tam, name: "TAM", size: "w-full", opacity: "bg-[hsl(var(--accent))]/10 border-[hsl(var(--accent))]/20" },
    { ...sam, name: "SAM", size: "w-4/5", opacity: "bg-[hsl(var(--accent))]/20 border-[hsl(var(--accent))]/30" },
    { ...som, name: "SOM", size: "w-3/5", opacity: "bg-[hsl(var(--accent))]/40 border-[hsl(var(--accent))]/50" },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {levels.map((level, i) => (
        <motion.div
          key={level.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: i * 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className={`${level.size} ${level.opacity} border rounded-2xl p-6 flex flex-col items-center gap-1 text-center`}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {level.name}
          </span>
          <span className="text-2xl md:text-3xl font-bold">
            <AnimatedCounter
              value={level.value}
              prefix={level.unit.startsWith("$") ? "$" : ""}
              suffix={level.unit.replace("$", "")}
              decimals={level.value % 1 !== 0 ? 1 : 0}
            />
          </span>
          <span className="text-xs text-muted-foreground">{level.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
