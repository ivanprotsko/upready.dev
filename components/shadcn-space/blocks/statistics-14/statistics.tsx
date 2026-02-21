"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RadialBar, RadialBarChart } from "recharts";

const chartData = [
  { name: "red", value: 30, fill: "var(--chart-5)" },
  { name: "sky", value: 80, fill: "var(--color-sky-400)" },
  { name: "blue", value: 50, fill: "var(--chart-3)" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  blue: {
    label: "Blue",
    color: "var(--chart-3)",
  },
  sky: {
    label: "Sky",
    color: "var(--color-sky-400)",
  },
  red: {
    label: "Red",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const StatisticsBlock = () => {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <Card className="w-full max-w-2xs mx-auto ring-border shadow-none">
          <CardHeader className="gap-0">
            <CardTitle className="text-lg font-semibold">
              Sales Overview
            </CardTitle>
            <CardDescription className="text-sm font-normal text-muted-foreground">
              Last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex justify-center items-center">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-56 w-48"
            >
              <RadialBarChart
                data={chartData}
                startAngle={90}
                endAngle={-180}
                innerRadius="40%"
                outerRadius="100%"
                barSize={10}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <RadialBar background dataKey="value" cornerRadius={10} />
              </RadialBarChart>
            </ChartContainer>

            {/* Labels aligned with the chart markers */}
            <span className="absolute top-2 mx-auto left-0 right-0 w-8 text-xs font-normal text-muted-foreground text-center">
              0%
            </span>
            <span className="absolute top-1/2 -translate-y-1/2 right-6 w-8 text-xs font-normal text-muted-foreground text-center">
              25%
            </span>
            <span className="absolute bottom-2 mx-auto left-0 right-0 w-8 text-xs font-normal text-muted-foreground text-center">
              50%
            </span>
            <span className="absolute top-1/2 -translate-y-1/2 left-6 w-8 text-xs font-normal text-muted-foreground text-center">
              75%
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsBlock;
