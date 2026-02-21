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
import { EllipsisVertical } from "lucide-react";

const data = [
  {
    name: "distribution",
    Asia: 60,
    USA: 25,
    Europe: 15,
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
          <div className="flex flex-col gap-4">
            <CardTitle className="text-xl font-bold text-card-foreground">
              Key Insights
            </CardTitle>
            <div className="flex flex-col gap-1">
              <p className="text-base font-normal text-muted-foreground">
                All-time Revenue
              </p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-medium text-foreground">$395.7k</p>
                <Badge className="bg-teal-400/10 text-muted-foreground hover:bg-teal-400/20 border-none font-normal px-2 py-0.5 text-xs">
                  +2.7%
                </Badge>
              </div>
            </div>
          </div>
          <button className="p-1 hover:bg-muted rounded-full transition-colors">
            <EllipsisVertical size={16} className="text-foreground" />
          </button>
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
                  barSize={10}
                  stroke="var(--card)"
                  strokeWidth={4}
                />
                <Bar
                  dataKey="USA"
                  stackId="a"
                  fill="#FB923C"
                  radius={4}
                  barSize={10}
                  stroke="var(--card)"
                  strokeWidth={4}
                />
                <Bar
                  dataKey="Europe"
                  stackId="a"
                  fill="#2DD4BF"
                  radius={4}
                  barSize={10}
                  stroke="var(--card)"
                  strokeWidth={4}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <p className="text-xs font-normal text-foreground">Asia</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
              <p className="text-xs font-normal text-foreground">USA</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
              <p className="text-xs font-normal text-foreground">Europe</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
