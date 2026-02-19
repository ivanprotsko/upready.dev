"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
  suffix?: string;
  className?: string;
  barClassName?: string;
}

export function ProgressBar({
  label,
  value,
  maxValue = 100,
  suffix = "%",
  className,
  barClassName,
}: ProgressBarProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold tabular-nums">
          {value}
          {suffix}
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={cn("h-full rounded-full bg-[hsl(var(--accent))]", barClassName)}
        />
      </div>
    </div>
  );
}
