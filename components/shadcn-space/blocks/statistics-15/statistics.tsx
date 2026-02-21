"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const chartData = [
  { day: 1, current: 0, previous: 0 },
  { day: 2, current: 20, previous: 8 },
  { day: 3, current: 15, previous: 19 },
  { day: 4, current: 19, previous: 13 },
  { day: 5, current: 14, previous: 26 },
  { day: 6, current: 25, previous: 16 },
  { day: 7, current: 30, previous: 25 },
];

const chartConfig = {
  current: {
    label: "Current",
    color: "var(--color-blue-500)",
  },
  previous: {
    label: "Previous",
    color: "#3b82f61a",
  },
} satisfies ChartConfig;

const StatisticsBlock = () => {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-2xl xl:px-16 lg:px-8 px-4 mx-auto">
        <Card className="w-full max-w-2xs mx-auto ring-border shadow-none">
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle className="text-lg font-semibold">Customers</CardTitle>
              <CardDescription className="text-sm font-normal text-muted-foreground">
                Last 7 days
              </CardDescription>
            </div>
            <Badge className="px-3 text-sm font-normal text-muted-foreground bg-teal-400/10">
              +26.5%
            </Badge>
          </CardHeader>

          <CardContent>
            <ChartContainer config={chartConfig} className="h-28 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ left: 0, right: 0 }}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="var(--color-blue-500)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#3b82f633"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                <p className="text-sm font-normal text-card-foreground">
                  April 07 - April 14
                </p>
              </div>
              <p className="text-sm font-normal text-muted-foreground">6,380</p>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500/20" />
                <span className="text-sm font-normal text-card-foreground">
                  Last Week
                </span>
              </div>
              <span className="text-sm font-normal text-muted-foreground">
                4,298
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsBlock;
