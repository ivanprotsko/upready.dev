"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ComparisonBarProps {
  label: string;
  value: string;
  barWidth: number;
  highlight?: boolean;
  className?: string;
}

export function ComparisonBar({
  label,
  value,
  barWidth,
  highlight = false,
  className,
}: ComparisonBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "flex items-center gap-4 py-2",
        highlight && "bg-[hsl(var(--accent))]/5 -mx-3 px-3 rounded-lg",
        className
      )}
    >
      <span
        className={cn(
          "text-sm w-36 shrink-0 truncate",
          highlight ? "font-semibold text-foreground" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
      <div className="flex-1 h-6 bg-muted/50 rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${barWidth}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={cn(
            "h-full rounded flex items-center px-2",
            highlight ? "bg-[hsl(var(--accent))]" : "bg-muted-foreground/20"
          )}
        />
      </div>
      <span
        className={cn(
          "text-sm w-28 shrink-0 text-right tabular-nums",
          highlight ? "font-bold text-foreground" : "text-muted-foreground"
        )}
      >
        {value}
      </span>
    </motion.div>
  );
}
