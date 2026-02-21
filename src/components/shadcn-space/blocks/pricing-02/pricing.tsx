"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
  featuredLabel?: string;
  cta: string;
  href: string;
  external?: boolean;
}

export interface Pricing02Props {
  id?: string;
  badge: string;
  headline: string;
  plans: PricingPlan[];
  footerText?: string;
}

export default function Pricing02({ id, badge, headline, plans, footerText }: Pricing02Props) {
  return (
    <section id={id} className="bg-background py-10 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 xl:px-16 lg:py-20 sm:py-16 py-8">
        <div className="flex flex-col gap-8 md:gap-12 items-center justify-center w-full">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Badge variant="outline" className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7">
              {badge}
            </Badge>
            <div className="max-w-3xs sm:max-w-md mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-medium">{headline}</h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
            {plans.map((plan, index) => {
              const isFeatured = plan.featured;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -60 },
                    visible: (i: number) => ({
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.25, duration: 0.6, ease: "easeInOut" },
                    }),
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className={cn("relative h-full w-full", isFeatured && "z-10 scale-102")}
                >
                  {isFeatured && (
                    <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
                      <div className="absolute -inset-full blur-xs animate-spin [animation-duration:2s] bg-conic from-blue-500 via-red-500 to-teal-400" />
                      <div className="absolute inset-0.5 rounded-2xl bg-card" />
                    </div>
                  )}
                  <Card
                    className={cn(
                      "relative h-full rounded-2xl p-8 gap-8",
                      isFeatured ? "border-0 ring-0" : "border border-border"
                    )}
                  >
                    <CardHeader className="p-0">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl font-medium text-primary">
                            {plan.name}
                          </CardTitle>
                          {isFeatured && (
                            <Badge className="py-1 px-3 text-sm font-medium h-7 flex items-center gap-1.5 [&>svg]:size-4!">
                              <Flame size={16} /> {plan.featuredLabel || "Most Popular"}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base font-normal">
                          {plan.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 gap-8 p-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-foreground text-4xl sm:text-5xl font-medium">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-muted-foreground text-base font-normal">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <Separator />
                      <ul className="flex flex-col gap-4 flex-1">
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-base text-muted-foreground"
                          >
                            <Check className="size-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="w-full h-12"
                        variant={isFeatured ? "default" : "outline"}
                      >
                        {plan.external ? (
                          <a href={plan.href} target="_blank" rel="noopener noreferrer">
                            {plan.cta}
                          </a>
                        ) : (
                          <Link href={plan.href}>{plan.cta}</Link>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          {footerText && (
            <p className="text-center text-sm text-muted-foreground">{footerText}</p>
          )}
        </div>
      </div>
    </section>
  );
}
