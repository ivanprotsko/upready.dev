"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SlideShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  index: number;
}

export function SlideShell({ id, children, className, index }: SlideShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-dvh snap-start snap-always flex items-center relative",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="max-w-7xl mx-auto px-6 lg:px-16 w-full py-16"
      >
        {children}
      </motion.div>
      <span className="absolute bottom-6 right-8 text-xs text-muted-foreground/40 font-mono">
        {String(index + 1).padStart(2, "0")} / 12
      </span>
    </section>
  );
}
