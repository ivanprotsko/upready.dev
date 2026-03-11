"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type StatItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  label?: string;
  bgColor: string;
  textColor: string;
  href?: string;
};

export default function Statistic({
  data,
  badgeText,
  heading,
  subtitle,
}: {
  data: StatItem[];
  badgeText?: string;
  heading?: string;
  subtitle?: string;
}) {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        {(badgeText || heading) && (
          <div className="flex flex-col items-center justify-center gap-4 mb-12 max-w-2xl mx-auto text-center">
            {badgeText && (
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
                {badgeText}
              </Badge>
            )}
            {heading && (
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-1px]">
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item, index) => {
            const card = (
              <Card
                key={index}
                className={cn(
                  "ring-0 shadow-none w-full transition-all duration-300 hover:scale-105 hover:shadow-lg",
                  item.bgColor,
                )}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <div className="relative group">
                      <item.icon className="size-10" strokeWidth={1.5} />
                    </div>
                    <div
                      className={cn(
                        "flex flex-col items-center gap-1",
                        item.textColor,
                      )}
                    >
                      {item.label && (
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                      )}
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-lg font-bold tracking-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );

            return item.href ? (
              <Link key={index} href={item.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
