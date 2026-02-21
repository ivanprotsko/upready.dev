"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import { Bar, BarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--color-sky-400)",
  },
  target: {
    label: "Target",
    color: "#38bdf833",
  },
} satisfies ChartConfig;

const data = [
  { name: "P1", sales: 10, target: 30 },
  { name: "P2", sales: 30, target: 50 },
  { name: "P3", sales: 25, target: 35 },
  { name: "P4", sales: 15, target: 25 },
];

export function MonthlySalesCard() {
  return (
    <Card className="bg-blue-500 text-white ring-0 shadow-none">
      <CardContent className="flex flex-col justify-between h-full">
        <p className="text-lg font-semibold">Monthly Sales</p>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-semibold">$36,890</p>
            <div className="flex items-center gap-1.5">
              <p className="text-white/50 text-sm">vs last month</p>
              <Badge className="bg-white text-gray-950 text-sm font-regular gap-1.5">
                <ArrowUp size={16} className="size-4! shrink-0!" />
                +18.4%
              </Badge>
            </div>
          </div>

          <div className="h-auto w-24">
            <ChartContainer
              config={chartConfig}
              className="w-24 h-24 min-h-0 aspect-auto"
            >
              <BarChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                barGap={-8}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="target"
                  fill="var(--color-target)"
                  radius={[10, 10, 10, 10]}
                  barSize={8}
                />
                <Bar
                  dataKey="sales"
                  fill="var(--color-sales)"
                  radius={[10, 10, 10, 10]}
                  barSize={8}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
