"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridProps = {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3;
};

const FeatureGrid = ({ title, subtitle, features, columns = 3 }: FeatureGridProps) => {
  return (
    <section>
      <div className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-16">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
              {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
            </motion.div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} gap-6`}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Card className="h-full p-6 sm:p-8 shadow-none rounded-2xl border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary hover:shadow-lg">
                    <CardContent className="p-0 flex flex-col gap-4">
                      <feature.icon size={28} className="shrink-0 text-primary" strokeWidth={1.5} />
                      <p className="text-xl font-semibold">{feature.title}</p>
                      <p className="text-base text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
