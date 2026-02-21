"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pie, PieChart, Cell } from "recharts";

const chartConfig = {
  value: {
    label: "Share",
  },
} satisfies ChartConfig;

const data = [
  { name: "Blue", value: 60, color: "#3b82f6" },
  { name: "Orange", value: 20, color: "#fb923c" },
  { name: "Teal", value: 20, color: "#2dd4bf" },
];

const StatisticsBlock04 = () => {
  return (
    <Card className="gap-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">
          $10,230
        </CardTitle>
        <CardDescription className="text-sm font-medium text-muted-foreground">
          Expense
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="h-auto w-full">
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
                nameKey="name"
                innerRadius={35}
                outerRadius={55}
                strokeWidth={0}
                paddingAngle={0}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsBlock04;