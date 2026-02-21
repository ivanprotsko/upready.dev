"use client";

import { Icon } from "@iconify/react";

import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const Charts12 = ({ className }: { className?: string }) => {
  const chartData = [
    { month: "04 Apr", salary: 20 },
    { month: "05 May", salary: 15 },
    { month: "06 June", salary: 30 },
    { month: "07 July", salary: 25 },
    { month: "08 Aug", salary: 10 },
    { month: "09 Sept", salary: 15 },
  ];


  const chartConfig = {
    month: {
      label: "Month",
    },
    salary: {
      label: "Salary",
      color: "var(--color-blue-500)",
    },
  } satisfies ChartConfig;

  const COLORS = {
    active: "var(--chart-3)",
    inactive: "oklch(62.31% 0.1881 259.83 / 10%)",
  };

  return (
    <>
      <Card className={className}>
        <CardHeader className="px-0">
          <CardTitle className="text-foreground text-lg font-medium">
            Employee Salary
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Every month
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div>
            <ChartContainer config={chartConfig} className="h-71.25 w-full">
              <BarChart
                accessibilityLayer
                data={chartData}
                barSize={30}
                barGap={0}
                barCategoryGap="40%"
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => value}
                />
                <YAxis hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel indicator="line" />}
                />
                <Bar dataKey="salary" radius={[8, 8, 8, 8]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.month === "06 June"
                          ? COLORS.active
                          : COLORS.inactive
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="bg-blue-500/10  h-10 w-10 flex justify-center items-center rounded-md">
                <Icon
                  icon="tabler:grid-dots"
                  className="text-blue-500 text-xl"
                />
              </div>
              <div>
                <p className="text-muted-foreground text-sm ">Total Sales</p>
                <h6 className="text-base text-foreground font-semibold">
                  $36,358
                </h6>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-muted  h-10 w-10 flex justify-center items-center rounded-md">
                <Icon
                  icon="tabler:grid-dots"
                  className="opacity-70 dark:opacity-100 text-xl text-muted-foreground"
                />
              </div>
              <div>
                <p className="text-muted-foreground text-sm ">Expenses</p>
                <h6 className="text-base text-foreground font-semibold">
                  $5,296
                </h6>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Charts12;
