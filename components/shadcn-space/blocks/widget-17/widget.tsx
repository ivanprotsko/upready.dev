"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { List, ListCheck, ClipboardList, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const segments = [
  { value: 60, color: "var(--chart-3)" },
  { value: 50, color: "var(--color-sky-400)" },
  { value: 70, color: "var(--chart-5)" },
  { value: 40, color: "var(--color-sky-400)", opacity: 0.1 },
  { value: 40, color: "var(--chart-3)", opacity: 0.1 },
];

export interface ItemProps {
  icon: LucideIcon;
  colors: string;
  orders: string;
  status: string;
}

const items: ItemProps[] = [
  {
    icon: List,
    colors: "bg-blue-500/10 text-blue-500",
    orders: "64 new orders",
    status: "Processing",
  },
  {
    icon: ClipboardList,
    colors: "bg-sky-400/10 text-sky-400",
    orders: "4 orders",
    status: "On hold",
  },
  {
    icon: ListCheck,
    colors: "bg-orange-400/10 text-orange-400",
    orders: "12 orders",
    status: "Delivered",
  },
];

const Widget = () => {
  const total = segments.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="gap-0">
        <CardTitle className="text-lg font-semibold ">
          Your Performance
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Last check on 25 february
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center ">
        <div className="flex flex-col gap-5 flex-1">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={cn("p-3 rounded-lg", item.colors)}>
                <item.icon width={16} height={16} />
              </div>
              <div>
                <p className="text-sm font-medium">{item.orders}</p>
                <p className="text-xs text-muted-foreground">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
        <ChartContainer className="flex-1" config={{}}>
          <div className="relative w-full h-60">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={segments}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={110}
                  outerRadius={118}
                  paddingAngle={3}
                  stroke="none"
                >
                  {segments.map((entry, index) => (
                    <Cell key={index} fill={entry.color} opacity={entry.opacity} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-semibold">{total}</span>
            </div>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Widget;
