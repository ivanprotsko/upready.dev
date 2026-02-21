"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  AreaChart,
  Area,
} from "recharts";
import { cn } from "@/lib/utils";

type Statistics = {
  title: string;
  value: string;
  subValue: string;
  badgeColor: string;
  badgeValue: string;
  chartType: ChartType;
};

type ChartType = "stackedBar" | "bar" | "area";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--primary)",
  },
  profit: {
    label: "Profit",
    color: "var(--color-sky-400)",
  },
  costs: {
    label: "Costs",
    color: "var(--color-teal-400)",
  },
} satisfies ChartConfig;

function ChartRenderer({ type }: { type: ChartType }) {
  const stackedBarData = [
    { name: "P1", sales: 40, target: 70 },
    { name: "P2", sales: 70, target: 80 },
    { name: "P3", sales: 30, target: 40 },
    { name: "P4", sales: 80, target: 90 },
    { name: "P5", sales: 50, target: 60 },
    { name: "P6", sales: 90, target: 100 },
    { name: "P7", sales: 40, target: 50 },
    { name: "P8", sales: 70, target: 80 },
  ];

  const barData = [
    { name: "P1", profit: 40, total: 100 },
    { name: "P2", profit: 70, total: 100 },
    { name: "P3", profit: 30, total: 100 },
    { name: "P4", profit: 80, total: 100 },
    { name: "P5", profit: 50, total: 100 },
    { name: "P6", profit: 90, total: 100 },
  ];

  const lineData = [
    { costs: 40 },
    { costs: 65 },
    { costs: 45 },
    { costs: 80 },
    { costs: 55 },
    { costs: 75 },
    { costs: 70 },
  ];

  switch (type) {
    case "stackedBar":
      return (
        <ChartContainer
          config={chartConfig}
          className="w-24 h-24 min-h-0 aspect-auto"
        >
          <BarChart
            data={stackedBarData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barGap={-6}
          >
            <XAxis dataKey="name" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="target"
              fill="var(--color-sales)"
              className="opacity-40"
              radius={[10, 10, 10, 10]}
              barSize={6}
            />
            <Bar
              dataKey="sales"
              fill="var(--color-sales)"
              radius={[10, 10, 10, 10]}
              barSize={6}
            />
          </BarChart>
        </ChartContainer>
      );

    case "bar":
      return (
        <ChartContainer
          config={chartConfig}
          className="w-24 h-24 min-h-0 aspect-auto"
        >
          <BarChart
            data={barData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="profit"
              fill="var(--color-profit)"
              radius={[4, 4, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ChartContainer>
      );

    case "area":
      return (
        <ChartContainer
          config={chartConfig}
          className="w-32 h-24 min-h-0 aspect-auto"
        >
          <AreaChart
            data={lineData}
            margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillCosts" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-costs)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-costs)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              type="monotone"
              dataKey="costs"
              stroke="var(--color-costs)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#fillCosts)"
            />
          </AreaChart>
        </ChartContainer>
      );
  }
}

export default function Statistic() {
  const statisticsData: Statistics[] = [
    {
      title: "Total sales",
      value: "$45,320.75",
      subValue: "+$1,470",
      badgeColor: "bg-teal-400/10",
      badgeValue: "+18%",
      chartType: "stackedBar",
    },
    {
      title: "Total profit",
      value: "$18,260.50",
      subValue: "-$680",
      badgeColor: "bg-red-500/10",
      badgeValue: "-14%",
      chartType: "bar",
    },
    {
      title: "Advertising costs",
      value: "$3,150.00",
      subValue: "+$179",
      badgeColor: "bg-teal-400/10",
      badgeValue: "+16%",
      chartType: "area",
    },
  ];

  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {statisticsData.map((item, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>
                    <p className="text-2xl font-semibold text-card-foreground">
                      {item.value}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm text-muted-foreground">
                        {item.subValue}
                      </p>
                      <Badge
                        className={cn(
                          "font-normal text-muted-foreground",
                          item.badgeColor,
                        )}
                      >
                        {item.badgeValue}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <ChartRenderer type={item.chartType as ChartType} />
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
