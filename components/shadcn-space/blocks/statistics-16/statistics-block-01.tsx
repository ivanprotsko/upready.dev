"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowDown } from "lucide-react";
import { Area, AreaChart } from "recharts";

const chartConfig = {
  customers: {
    label: "Customers",
    color: "var(--color-sky-400)",
  },
} satisfies ChartConfig;

const data = [
  { date: "2025-01-01", customers: 186 },
  { date: "2025-01-02", customers: 305 },
  { date: "2025-01-03", customers: 201 },
  { date: "2025-01-04", customers: 273 },
  { date: "2025-01-05", customers: 191 },
  { date: "2025-01-06", customers: 320 },
  { date: "2025-01-07", customers: 240 },
];

const StatisticsBlock01 = () => {
  return (
        <Card className="gap-10">
          <CardHeader>
            <CardTitle className="text-sm font-normal text-muted-foreground">
              Customers
            </CardTitle>
            <CardDescription className="text-xl font-semibold text-foreground">
              36,358
            </CardDescription>
            <div>
              <div className="flex items-center gap-1">
                <div className="p-1 bg-red-500/10 rounded-full">
                  <ArrowDown size={12} className="text-red-500" />
                </div>
                <span className="text-sm font-normal text-muted-foreground">
                  +9%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-12 w-full">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart
                  data={data}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-sky-400)" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="var(--color-sky-400)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Area type="monotone" dataKey="customers" stroke="var(--color-sky-400)" strokeWidth={2} fillOpacity={1} fill="url(#colorCustomers)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
    );
};

export default StatisticsBlock01;
