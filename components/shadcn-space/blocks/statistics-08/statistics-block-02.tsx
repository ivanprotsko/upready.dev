"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import { cn } from "@/lib/utils";

const chartConfig = {
  value: {
    label: "Share",
  },
  year2024: {
    label: "2024",
    color: "var(--chart-3)",
  },
  year2023: {
    label: "2023",
    color: "var(--chart-2)",
  },
  year2022: {
    label: "2022",
    color: "var(--muted)",
  },
} satisfies ChartConfig;

const data = [
  { year: "2024", value: 70, fill: "var(--chart-3)" },
  { year: "2023", value: 18, fill: "var(--chart-2)" },
  { year: "2022", value: 12, fill: "var(--muted)" },
];

const StatisticsBlock02 = ({ className }: { className?: string }) => {
  return (
    <>
      <Card className={cn("ring-border shadow-none justify-between", className)}>
        <CardHeader className="flex flex-row items-center justify-between text-start">
          <div>
            <CardTitle className="text-lg font-semibold text-card-foreground">
              Products
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Last 7 days
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-base font-semibold text-card-foreground">
              12,389
            </p>
            <Badge className="bg-teal-400/10 text-muted-foreground font-normal">
              +26.5%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-44 w-full">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-full"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="year"
                  innerRadius={55}
                />
              </PieChart>
            </ChartContainer>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm font-medium text-muted-foreground text-center">
            $18k Profit more than last month
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default StatisticsBlock02;
