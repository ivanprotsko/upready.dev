"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export type PricingRow = {
  plan_name: string;
  plan_icon: LucideIcon;
  plan_descp: string;
  plan_price: string;
  plan_cta?: string;
  plan_href?: string;
  active?: boolean;
};

const Pricing06 = ({
  data,
}: {
  data: PricingRow[];
}) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 xl:px-16 py-12 flex flex-col gap-6">
        {data.map((item, index) => (
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
            <Card className="bg-transparent shadow-none">
              <CardContent className="flex flex-col md:flex-row gap-0 md:gap-6 text-left items-start md:items-center justify-between">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 min-w-3xs">
                  <item.plan_icon className="size-8 md:size-9" />
                  <h3 className="text-2xl font-medium">{item.plan_name}</h3>
                </div>
                <p className="text-base font-normal text-muted-foreground max-w-sm">{item.plan_descp}</p>
                {item.plan_price && <span className="text-2xl font-medium text-foreground mt-4 md:mt-0">{item.plan_price}</span>}
                <Button
                  asChild
                  variant="default"
                  className="px-5 py-2.5 h-auto rounded-lg mt-4 md:mt-0"
                >
                  <Link href={item.plan_href || "/contacts"}>
                    {item.plan_cta || "Learn more"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing06;
