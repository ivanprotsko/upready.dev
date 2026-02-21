"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Statistic() {
  const TopCardInfo = [
    {
      key: "card1",
      title: "Employees",
      desc: "96",
      img: "https://images.shadcnspace.com/assets/statistics/employees.svg",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      key: "card2",
      title: "Clients",
      desc: "3,650",
      img: "https://images.shadcnspace.com/assets/statistics/clients.svg",
      bgColor: "bg-orange-400/10",
      textColor: "text-orange-400",
    },
    {
      key: "card3",
      title: "Projects",
      desc: "356",
      img: "https://images.shadcnspace.com/assets/statistics/projects.svg",
      bgColor: "bg-teal-400/10",
      textColor: "text-teal-400",
    },
    {
      key: "card4",
      title: "Events",
      desc: "696",
      img: "https://images.shadcnspace.com/assets/statistics/events.svg",
      bgColor: "bg-red-500/10",
      textColor: "text-red-500",
    },
    {
      key: "card5",
      title: "Payroll",
      desc: "$96k",
      img: "https://images.shadcnspace.com/assets/statistics/payroll.svg",
      bgColor: "bg-amber-300/10",
      textColor: "text-amber-300",
    },
    {
      key: "card6",
      title: "Reports",
      desc: "59",
      img: "https://images.shadcnspace.com/assets/statistics/reports.svg",
      bgColor: "bg-sky-400/10",
      textColor: "text-sky-400",
    },
  ];

  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TopCardInfo.map((item) => (
            <Card
              key={item.key}
              className={cn(
                "ring-0 shadow-none w-full transition-all duration-300 hover:scale-105 hover:shadow-lg",
                item.bgColor,
              )}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="relative group">
                    <img
                      src={item.img}
                      width="48"
                      height="48"
                      className="size-12"
                      alt={item.title}
                    />
                  </div>
                  <div
                    className={cn(
                      "flex flex-col items-center gap-1",
                      item.textColor,
                    )}
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-2xl font-bold tracking-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
