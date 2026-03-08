"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export type UseCase = {
  icon: LucideIcon;
  industry: string;
  description: string;
};

type UseCaseSectionProps = {
  title?: string;
  useCases: UseCase[];
};

const UseCaseSection = ({ title = "Use Cases", useCases }: UseCaseSectionProps) => {
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
              className="flex flex-col items-center text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Card className="h-full p-6 shadow-none rounded-2xl">
                    <CardContent className="p-0 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <useCase.icon size={20} className="shrink-0 text-primary" strokeWidth={1.5} />
                        <Badge variant="outline" className="text-sm font-normal">{useCase.industry}</Badge>
                      </div>
                      <p className="text-base text-muted-foreground">{useCase.description}</p>
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

export default UseCaseSection;
