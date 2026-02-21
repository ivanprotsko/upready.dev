"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  {
    name: "distribution",
    Asia: 65,
    USA: 26,
    Europe: 9,
  },
];
const chartConfig = {
  Asia: {
    label: "Asia",
    color: "var(--color-blue-500)",
  },
  USA: {
    label: "USA",
    color: "var(--color-orange-500)",
  },
  Europe: {
    label: "Europe",
    color: "var(--color-teal-500)",
  },
} satisfies ChartConfig;

const Statistics = () => {
  return (
    <div className="lg:py-20 sm:py-16 py-8 px-6">
      <Card className="w-full max-w-sm mx-auto shadow-xs border-border gap-0 rounded-xl">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="flex flex-col gap-3">
            <CardTitle className="text-lg font-medium text-card-foreground">
              Total Assets
            </CardTitle>
            <div className="flex flex-col gap-0.5">
              <p className="text-2xl font-medium text-foreground">
                $478,230.90
              </p>
              <div className="flex items-center gap-2">
                <Badge className="bg-teal-400/10 text-muted-foreground hover:bg-teal-400/20 border-none font-normal px-2 py-0.5 text-xs">
                  +14.6%
                </Badge>
                <div className="flex items-center gap-1.5">
                  <p>+$65,000</p>
                  <span className="text-xs font-normal text-muted-foreground">
                    compared to last year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2.5 pt-0">
          <div className="flex flex-col gap-1.5 mt-2">
            <ChartContainer
              config={chartConfig}
              className="w-full aspect-auto h-8"
            >
              <BarChart
                data={data}
                layout="vertical"
                margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
              >
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="Asia"
                  stackId="a"
                  fill="#3B82F6"
                  radius={4}
                  barSize={12}
                  stroke="var(--card)"
                  strokeWidth={4}
                />
                <Bar
                  dataKey="USA"
                  stackId="a"
                  fill="#FB923C"
                  radius={4}
                  barSize={12}
                  stroke="var(--card)"
                  strokeWidth={4}
                />
                <Bar
                  dataKey="Europe"
                  stackId="a"
                  fill="#2DD4BF"
                  radius={4}
                  barSize={12}
                  stroke="var(--card)"
                  strokeWidth={4}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-between w-full py-2 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <p className="text-sm font-medium text-foreground">Product Sales</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-normal text-foreground">$312,500.45</p>
                <span className="text-xs font-normal text-muted-foreground">(65%)</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full py-2 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <p className="text-sm font-medium text-foreground">Service Revenue</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-normal text-foreground">$125,000.25</p>
                <span className="text-xs font-normal text-muted-foreground">(26%)</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full py-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <p className="text-sm font-medium text-foreground">Other Income</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-normal text-foreground">$40,730.20</p>
                <span className="text-xs font-normal text-muted-foreground">(9%)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
