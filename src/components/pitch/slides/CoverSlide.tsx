"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { SlideShell } from "@/components/pitch/SlideShell";
import { ChevronDown } from "lucide-react";

export function CoverSlide() {
  return (
    <SlideShell id="slide-0" index={0}>
      <div className="flex flex-col items-center justify-center text-center gap-8 min-h-[70dvh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge variant="outline" className="text-xs tracking-wider uppercase">
            Video Production Division
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-7xl md:text-9xl font-medium tracking-tight"
        >
          zeno.team
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col gap-3"
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            Short-form контент, который конвертит
          </p>
          <p className="text-sm md:text-base text-muted-foreground/70">
            Подписочное видео-агентство для Европы и СНГ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/50">
            Листайте вниз
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="size-5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
