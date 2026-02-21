"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, LucideIcon, Paintbrush, ShieldCheck, WandSparkles } from "lucide-react";
import { motion } from "motion/react";

const Pricing = () => {
  type PricingPlan = {
    plan_name: string;
    plan_icon: LucideIcon;
    plan_descp: string;
    plan_price: number;
    active?: boolean;
  };

  const pricingData: PricingPlan[] = [
    {
      plan_name: "Basic clean",
      plan_icon: Paintbrush,
      plan_descp: "Essential cleaning to keep your home fresh, tidy, and inviting.",
      plan_price: 99,
    },
    {
      plan_name: "Deep clean",
      plan_icon: Droplets,
      plan_descp: "Thorough cleaning for a spotless, sparkling home for a cleaning sparkling",
      plan_price: 149,
    },
    {
      plan_name: "Weekly refresh",
      plan_icon: ShieldCheck,
      plan_descp: "Consistent cleaning to maintain a pristine, comfortable home.",
      plan_price: 129,
      active: true,
    },
    {
      plan_name: "Deluxe clean",
      plan_icon: WandSparkles,
      plan_descp: "Comprehensive cleaning for special occasions and seasonal refreshes.",
      plan_price: 219,
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 xl:px-16 py-12 flex flex-col gap-8 md:gap-16 items-center justify-center">
        <div className="flex flex-col text-center items-center justify-center gap-6 max-w-xl">
          <Badge className="text-sm font-normal bg-teal-400 text-white h-auto py-1 px-3 rounded-full">
            Transparent pricing
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Budget-friendly options for a cleaner home
          </h2>
        </div>
        <div className="w-full flex flex-col gap-6">
          {pricingData.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Card className={`${item.active ? "bg-teal-400/10 border border-teal-400" : ""}`}>
                  <CardContent className="flex flex-col md:flex-row gap-0 md:gap-6 text-left items-start md:items-center justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 min-w-3xs">
                      <item.plan_icon className="size-8 md:size-9" />
                      <h3 className="text-2xl font-medium">{item.plan_name}</h3>
                    </div>
                    <p className="text-base font-normal text-muted-foreground max-w-sm">{item.plan_descp}</p>
                    <span className="text-2xl font-medium text-foreground mt-4 md:mt-0">${item.plan_price}</span>
                    <Button variant={`${item.active ? "default" : "outline"}`} className="px-5 py-2.5 h-auto rounded-lg mt-4 md:mt-0 hover:cursor-pointer">Book a Service</Button>
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
