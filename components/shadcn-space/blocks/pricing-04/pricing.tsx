"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartPie, Check, Flame, LucideIcon, Target, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricingCardVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.25,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  type PricingPlan = {
    plan_name: string;
    plan_tag?: string;
    plan_descp: string;
    plan_price: number;
    plan_feature: { feature: string; check: boolean }[];
    plan_icon: LucideIcon;
  };

  const pricingData: PricingPlan[] = [
    {
      plan_name: "Basic",
      plan_descp: "Best for people who have the startup / freelancing",
      plan_price: 9,
      plan_feature: [
        { feature: "Monthly service fee", check: true },
        { feature: "Direct debits", check: true },
        { feature: "Online payments", check: true },
        { feature: "Deposits to Savers", check: true },
        { feature: "International transaction fees", check: false },
      ],
      plan_icon: Target,
    },
    {
      plan_name: "Scale",
      plan_tag: "Recommended",
      plan_descp: "Start free, explore interests, learn essential skills.",
      plan_price: 99,
      plan_feature: [
        { feature: "Monthly service fee", check: true },
        { feature: "Direct debits", check: true },
        { feature: "Online payments", check: true },
        { feature: "Deposits to Savers", check: true },
        { feature: "International transaction fees", check: true },
      ],
      plan_icon: ChartPie,
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 xl:px-16 py-12 flex flex-col gap-8 md:gap-12 items-center justify-center">
        <div className="flex flex-col gap-6 items-center justify-center max-w-3xl">
          <div className="flex flex-col gap-3 text-center items-center justify-center ">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Choose your preferred plan
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-normal">
              Simple pricing built for developers, offering lifetime access,
              premium shadcn components, updates, and priority support without
              hidden fees.
            </p>
          </div>
          <Tabs
            value={billingCycle}
            onValueChange={(value) =>
              setBillingCycle(value as "monthly" | "yearly")
            }
          >
            <TabsList className="h-auto! p-1 rounded-xl">
              <TabsTrigger
                value="monthly"
                className="py-2 px-5 rounded-lg text-foreground dark:data-active:bg-background hover:cursor-pointer"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="py-2 px-5 rounded-lg gap-2.5 text-foreground dark:data-active:bg-background hover:cursor-pointer"
              >
                Yearly
                <div className="text-white bg-sky-400 rounded-full py-0.5 px-2 text-xs font-medium">
                  35% OFF
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            variants={pricingCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="h-full"
          >
            <Card className="py-4 rounded-2xl border-none bg-[url('https://images.shadcnspace.com/assets/pricing/pricing-04-img.png')] object-cover bg-center h-full w-full bg-cover bg-no-repeat justify-end min-h-150">
              <CardContent className="px-4">
                <div className="p-8 bg-background rounded-xl flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                      <Logo />
                      <span className="bg-amber-300 rounded-full px-3 py-1 text-foreground text-sm font-medium">
                        PLUS
                      </span>
                    </div>
                    <p className="text-2xl font-normal text-foreground">
                      Choosing yearly plan gives you{" "}
                      <strong>big 35% discount</strong>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Button className="h-auto p-3 w-full text-base rounded-full hover:cursor-pointer">
                      Get a Demo
                    </Button>
                    <span className="text-muted-foreground text-sm font-normal">
                      Get full refund no question asked.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {pricingData.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={pricingCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                className="h-full max-lg:last:col-span-full"
              >
                <Card className="py-8 rounded-2xl max-lg:last:col-span-full h-full">
                  <CardContent className="px-8">
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between gap-2">
                          <item.plan_icon size={32} />
                          {item.plan_tag && (
                            <div className="flex items-center gap-1 py-1 px-3 bg-teal-400 text-white rounded-full w-fit">
                              <Flame size={16} />
                              <span className="text-sm font-medium">
                                {item.plan_tag}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-foreground">
                            {item.plan_name}
                          </h3>
                          <p className="text-muted-foreground text-lg font-normal">
                            {item.plan_descp}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-medium text-foreground">
                          {billingCycle === "monthly"
                            ? item.plan_price
                            : Math.floor(item.plan_price * 12 * 0.65)}
                        </span>
                        <span className="text-muted-foreground text-base font-normal">
                          / per {billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-px bg-border my-8" />
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-3">
                        {item.plan_feature.map((feature, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              {feature?.check ? (
                                <Check size={20} />
                              ) : (
                                <X size={20} />
                              )}
                              <p className="text-base">{feature?.feature}</p>
                            </div>
                          );
                        })}
                      </div>
                      <Button className="h-auto w-full rounded-full p-3 text-base hover:cursor-pointer">
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
