"use client";

import { ArrowUp } from "lucide-react";
import { Area, AreaChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent } from "@/components/ui/card";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-3)",
  },
  previous: {
    label: "Previous",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const data = [
  { sales: 15, previous: 10 },
  { sales: 20, previous: 12 },
  { sales: 22, previous: 12 },
  { sales: 30, previous: 18 },
  { sales: 28, previous: 15 },
  { sales: 35, previous: 20 },
  { sales: 32, previous: 18 },
  { sales: 45, previous: 25 },
  { sales: 50, previous: 28 },
  { sales: 65, previous: 35 },
  { sales: 60, previous: 32 },
  { sales: 75, previous: 40 },
  { sales: 80, previous: 42 },
  { sales: 82, previous: 40 },
  { sales: 95, previous: 48 },
  { sales: 90, previous: 45 },
  { sales: 110, previous: 55 },
  { sales: 105, previous: 52 },
  { sales: 115, previous: 58 },
  { sales: 108, previous: 55 },
  { sales: 135, previous: 68 },
  { sales: 128, previous: 65 },
  { sales: 130, previous: 60 },
  { sales: 120, previous: 65 },
  { sales: 145, previous: 70 },
  { sales: 135, previous: 68 },
  { sales: 140, previous: 72 },
  { sales: 130, previous: 65 },
  { sales: 150, previous: 75 },
];

export function TotalSalesCard() {
  return (
    <Card className="ring-border shadow-none">
      <CardContent className="flex items-end gap-8 h-full">
        <div className="flex flex-col gap-8 w-fit shrink-0">
          <div>
            <p className="text-sm text-muted-foreground">Total Sales</p>
            <p className="text-lg font-semibold text-card-foreground">
              WrapPixel Store
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="text-3xl font-semibold text-card-foreground">
              $98,452.76
            </p>
            <div className="flex items-center gap-1 text-teal-400">
              <div className="p-1 bg-teal-400/10 rounded-full">
                <ArrowUp className="size-3" />
              </div>
              <p className="text-xs font-normal">+32.8%</p>
            </div>
          </div>
        </div>

        <div className="h-28 w-full flex items-end overflow-hidden">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-sales)"
                    stopOpacity={0.15}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-sales)"
                    stopOpacity={0.01}
                  />
                </linearGradient>
              </defs>
              <Area
                type="natural"
                dataKey="previous"
                stroke="var(--color-previous)"
                strokeWidth={2}
                fill="transparent"
                dot={false}
                className="opacity-10"
              />
              <Area
                type="natural"
                dataKey="sales"
                stroke="var(--color-sales)"
                strokeWidth={2}
                fill="url(#colorSales)"
                dot={false}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
