"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";

export type ServicePlan = {
  name: string;
  description: string;
  setupPrice: number;
  monthlyPrice: number;
  features: string[];
  recommended?: boolean;
};

type PricingSectionProps = {
  title?: string;
  subtitle?: string;
  plans: ServicePlan[];
  ctaText?: string;
  timeline?: string;
};

const PricingSection = ({ title = "Pricing", subtitle, plans, ctaText = "Get Started", timeline }: PricingSectionProps) => {
  return (
    <section>
      <div className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-16">
          <div className="flex flex-col gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-4 items-center text-center">
              <Badge variant="outline" className="py-1 px-3 text-sm font-normal h-7">Pricing</Badge>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-lg">{title}</h2>
              {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
              {plans.map((plan, index) => {
                const isFeatured = plan.recommended;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
                    className={cn("relative h-full w-full", isFeatured && "z-10 scale-102")}
                  >
                    {isFeatured && (
                      <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
                        <div className="absolute -inset-full blur-xs animate-spin [animation-duration:2s] bg-conic from-blue-500 via-red-500 to-teal-400" />
                        <div className="absolute inset-0.5 rounded-2xl bg-card" />
                      </div>
                    )}

                    <Card className={cn("relative h-full rounded-2xl p-8 gap-8", isFeatured ? "border-0 ring-0" : "border border-border")}>
                      <CardHeader className="p-0">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-medium text-primary">{plan.name}</CardTitle>
                            {isFeatured && (
                              <Badge className="py-1 px-3 text-sm font-medium h-7 flex items-center gap-1.5 [&>svg]:size-4!">
                                <Flame size={16} /> Popular
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-base font-normal">{plan.description}</CardDescription>
                        </div>
                      </CardHeader>

                      <CardContent className="flex flex-col flex-1 gap-8 p-0">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-baseline gap-1">
                            <span className="text-foreground text-4xl sm:text-5xl font-medium">${plan.setupPrice.toLocaleString()}</span>
                            <span className="text-muted-foreground text-base font-normal"> setup</span>
                          </div>
                          <p className="text-sm text-muted-foreground">+ ${plan.monthlyPrice}/mo hosting &amp; support</p>
                        </div>

                        <Separator orientation="horizontal" />

                        <ul className="flex flex-col gap-4 flex-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-base font-normal text-muted-foreground">
                              <Check className="size-4 text-primary shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button asChild className="w-full h-12" variant={isFeatured ? "default" : "outline"}>
                          <Link href="/contacts">{ctaText}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {timeline && <p className="text-sm text-muted-foreground text-center">* {timeline}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
