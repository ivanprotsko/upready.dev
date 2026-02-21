"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowUp } from "lucide-react";
import { Bar, BarChart } from "recharts";

const chartConfig = {
  projects: {
    label: "Projects",
    color: "var(--color-sky-400)",
  },
} satisfies ChartConfig;

const data = [
  { date: "2025-01-01", projects: 120 },
  { date: "2025-01-02", projects: 160 },
  { date: "2025-01-03", projects: 150 },
  { date: "2025-01-04", projects: 220 },
  { date: "2025-01-05", projects: 180 },
  { date: "2025-01-06", projects: 140 },
  { date: "2025-01-07", projects: 200 },
  { date: "2025-01-08", projects: 100 },
];

const StatisticsBlock02 = () => {
  return (
    <Card className="gap-10">
      <CardHeader>
        <CardTitle className="text-sm font-normal text-muted-foreground">
          Projects
        </CardTitle>
        <CardDescription className="text-xl font-semibold text-foreground">
          78,298
        </CardDescription>
        <div>
          <div className="flex items-center gap-1">
            <div className="p-1 bg-teal-400/10 rounded-full">
              <ArrowUp size={12} className="text-teal-500" />
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
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="projects"
                fill="var(--color-sky-400)"
                radius={4}
                barSize={12}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsBlock02;
