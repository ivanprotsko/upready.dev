"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export type ProductStat = {
  label: string;
  value: string;
};

type ProductShowcaseProps = {
  title: string;
  subtitle?: string;
  projectName: string;
  projectUrl: string;
  stats?: ProductStat[];
  screenshots: {
    src: string;
    alt: string;
    priority?: boolean;
  }[];
};

const ProductShowcase = ({
  title,
  subtitle,
  projectName,
  projectUrl,
  stats,
  screenshots,
}: ProductShowcaseProps) => {
  return (
    <section>
      <div className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-16">
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-muted-foreground">{subtitle}</p>
              )}
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm">
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  Powered by{" "}
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    {projectName}
                  </a>
                </Badge>
              </div>
              {stats && stats.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            <div
              className={`grid gap-6 ${
                screenshots.length === 1
                  ? "grid-cols-1 max-w-4xl mx-auto"
                  : screenshots.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className={`overflow-hidden rounded-xl border bg-muted/30 ${
                    screenshots.length === 3 && index === 0
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    priority={screenshot.priority}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
