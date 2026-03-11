"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getRelatedServices } from "@/lib/related-services";

type RelatedServicesProps = {
  currentSlug: string;
};

const RelatedServices = ({ currentSlug }: RelatedServicesProps) => {
  const related = getRelatedServices(currentSlug);

  if (related.length === 0) return null;

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
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Works great with
              </h2>
              <p className="text-lg text-muted-foreground">
                Combine with other self-hosted tools for a fully integrated
                stack.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <Card className="h-full p-6 sm:p-8 shadow-none rounded-2xl border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary hover:shadow-lg group">
                      <CardContent className="p-0 flex flex-col gap-4">
                        <service.icon
                          size={28}
                          className="shrink-0 text-primary"
                          strokeWidth={1.5}
                        />
                        <p className="text-xl font-semibold">{service.name}</p>
                        <p className="text-base text-muted-foreground">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-2">
                          Learn more
                          <ArrowRight size={14} />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
