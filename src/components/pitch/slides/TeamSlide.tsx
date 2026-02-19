"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SlideShell } from "@/components/pitch/SlideShell";

const techStack = [
  "Next.js",
  "React",
  "AI/ML",
  "Framer Motion",
  "Tailwind",
  "Supabase",
] as const;

export function TeamSlide() {
  return (
    <SlideShell id="slide-9" index={9}>
      <div className="flex flex-col items-center gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Badge variant="outline" className="text-xs tracking-wider uppercase w-fit">
            Команда
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Кто за этим стоит
          </h2>
        </motion.div>

        {/* Team card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full max-w-md"
        >
          <Card className="border-border/50">
            <CardContent className="pt-8 pb-8 flex flex-col items-center gap-5">
              {/* Avatar */}
              <div className="size-20 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/50 flex items-center justify-center">
                <span className="text-2xl font-bold text-background">IP</span>
              </div>

              {/* Info */}
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-xl font-semibold">Ivan Protsko</h3>
                <p className="text-sm text-muted-foreground">
                  Founder & AI Product Engineer
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground text-center max-w-sm leading-relaxed">
                Solo AI-инженер, который совмещает PM, дизайн и разработку.
                Строит production-ready продукты за 2-4 недели.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap justify-center gap-2"
        >
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-xl"
        >
          <p className="text-sm italic text-muted-foreground leading-relaxed">
            &ldquo;Один AI-инженер заменяет целую команду. Модель работает — как для
            MVP, так и для видео-контента.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </SlideShell>
  );
}
