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
import { Bar, BarChart, XAxis } from "recharts";
import { cn } from "@/lib/utils";

const chartConfig = {
  paypal: {
    label: "Paypal",
    color: "var(--chart-3)",
  },
  creditCard: {
    label: "Credit Debit Card",
    color: "#3b82f61a",
  },
} satisfies ChartConfig;

const data = [
  { day: "M", paypal: 40, creditCard: 71 },
  { day: "T", paypal: 52, creditCard: 71 },
  { day: "W", paypal: 38, creditCard: 71 },
  { day: "T", paypal: 47, creditCard: 71 },
  { day: "F", paypal: 56, creditCard: 71 },
  { day: "S", paypal: 41, creditCard: 71 },
  { day: "S", paypal: 46, creditCard: 71 },
];

const StatisticsBlock04 = ({ className }: { className?: string }) => {
  return (
    <>
      <Card className={cn("ring-border shadow-none gap-8 justify-between", className)}>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="text-start">
            <CardTitle className="text-lg font-semibold text-card-foreground">
              Payments
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Last 7 days
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-base font-semibold text-card-foreground">
              12,389
            </p>
            <Badge className="bg-blue-500/10 text-muted-foreground px-3 leading-0">
              +26.5%
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div className="h-24 w-full">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar
                  dataKey="paypal"
                  stackId="a"
                  fill="var(--chart-3)"
                  radius={[10, 10, 10, 10]}
                  barSize={10}
                />
                <Bar
                  dataKey="creditCard"
                  stackId="a"
                  fill="#3b82f61a"
                  radius={[10, 10, 10, 10]}
                  barSize={10}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 rounded-lg w-5 h-2.5"></span>
              <p className="text-sm text-card-foreground">Paypal</p>
            </div>
            <p className="text-sm text-muted-foreground">52%</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="bg-blue-500/10 rounded-lg w-5 h-2.5"></span>
              <p className="text-sm text-card-foreground">Credit Debit Card</p>
            </div>
            <p className="text-sm text-muted-foreground">48%</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default StatisticsBlock04;
