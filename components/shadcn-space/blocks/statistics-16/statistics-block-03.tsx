"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ArrowUp, ChartColumnBig } from "lucide-react";
import { Area, AreaChart } from "recharts";

const chartConfig = {
  customers: {
    label: "Customers",
    color: "var(--color-orange-400)",
  },
} satisfies ChartConfig;

const data = [
  { value: 40 },
  { value: 70 },
  { value: 85 },
  { value: 80 },
  { value: 70 },
  { value: 55 },
  { value: 45 },
  { value: 50 },
  { value: 90 },
  { value: 110 },
  { value: 75 },
  { value: 115 },
  { value: 125 },
  { value: 105 },
  { value: 130 },
  { value: 120 },
  { value: 135 },
];

const StatisticsBlock03 = () => {
  return (
    <Card className="gap-0">
      <CardContent className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <div className="p-2 rounded-lg bg-orange-400/20 w-fit">
            <ChartColumnBig className="text-orange-400" size={16} />
          </div>
          <div className="h-12 w-full">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <AreaChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-orange-400)"
                      stopOpacity={0.15}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-orange-400)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Area
                  type="natural"
                  dataKey="value"
                  stroke="var(--color-orange-400)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorOrange)"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
        <div>
        <div className="flex items-center gap-1.5">
            <div className="bg-teal-500/20 p-1 rounded-full w-fit">
                <ArrowUp className="text-teal-500" size={12}/>
            </div>
            <p className="text-lg font-semibold text-foreground">24%</p>
        </div>
        <span className="text-sm font-normal text-muted-foreground">Growth</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsBlock03;
