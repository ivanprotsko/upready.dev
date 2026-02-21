"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Box,
  CirclePlus,
  EllipsisVertical,
  Handbag,
  LucideIcon,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Action = {
  icon: LucideIcon;
  listtitle: string;
};

type Statistics = {
  icon: LucideIcon;
  title: string;
  value: string;
  badgeColor: string;
  badgeValue: string;
  chartType: ChartType;
};

type ChartType = "stackedBar" | "line" | "pie";

const chartConfig = {
  followers: {
    label: "Followers",
    color: "var(--color-blue-500)",
  },
  income: {
    label: "Income",
    color: "var(--color-sky-400)",
  },
  balance: {
    label: "Balance",
    color: "var(--color-teal-400)",
  },
} satisfies ChartConfig;

function ChartRenderer({ type }: { type: ChartType }) {
  const barData = [
    { name: "P1", value: 40, total: 100 },
    { name: "P2", value: 70, total: 100 },
    { name: "P3", value: 30, total: 100 },
    { name: "P4", value: 80, total: 100 },
    { name: "P5", value: 50, total: 100 },
    { name: "P6", value: 90, total: 100 },
  ];

  const lineData = [
    { income: 40 },
    { income: 65 },
    { income: 45 },
    { income: 80 },
    { income: 55 },
    { income: 75 },
    { income: 70 },
  ];

  const pieData = [
    { name: "Filled", value: 75 },
    { name: "Empty", value: 25 },
  ];

  switch (type) {
    case "stackedBar":
      const stackedData = barData.map((d) => ({
        ...d,
        // Ensure value is at least 2 so we don't have negative numbers
        followers: Math.max(0, d.value - 2),
        visitors: d.total - d.value,
      }));
      return (
        <ChartContainer
          config={chartConfig}
          className="w-24 h-24 min-h-0 aspect-auto"
        >
          <BarChart
            data={stackedData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            
            <Bar
              dataKey="followers"
              stackId="a"
              fill="var(--color-followers)"
              radius={[10, 10, 10, 10]}
              barSize={6}
            />
            <Bar
              dataKey="visitors"
              stackId="a"
              fill="var(--color-followers)"
              className="opacity-40"
              radius={[10, 10, 10, 10]}
              barSize={6}
            />
          </BarChart>
        </ChartContainer>
      );

    case "line":
      return (
        <ChartContainer
          config={chartConfig}
          className="w-32 h-24 min-h-0 aspect-auto"
        >
          <LineChart 
          data={lineData}
          margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      );

    case "pie":
      return (
        <ChartContainer
          config={chartConfig}
          className="w-24 h-24 min-h-0 aspect-auto"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={35}
              outerRadius={42}
              startAngle={-160}
              endAngle={650}
              stroke="none"
              cornerRadius={10}
            >
              <Cell fill="var(--color-balance)" />
              <Cell fill="var(--color-balance)" className="opacity-20" />
            </Pie>
          </PieChart>
        </ChartContainer>
      );
  }
}

export default function Statistic() {
  const Action: Action[] = [
    {
      icon: CirclePlus,
      listtitle: "Add",
    },
    {
      icon: Pencil,
      listtitle: "Edit",
    },
    {
      icon: Trash2,
      listtitle: "Delete",
    },
  ];

  const statisticsData: Statistics[] = [
    {
      icon: Handbag,
      title: "Total Followers",
      value: "4,562",
      badgeColor: "bg-teal-400/10",
      badgeValue: "+23%",
      chartType: "stackedBar",
    },
    {
      icon: Box,
      title: "Total Income",
      value: "$6,280",
      badgeColor: "bg-blue-500/10",
      badgeValue: "+18%",
      chartType: "line",
    },
    {
      icon: Star,
      title: "Current Balance",
      value: "$2,529",
      badgeColor: "bg-teal-400/10",
      badgeValue: "+42%",
      chartType: "pie",
    },
  ];

  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {statisticsData.map((item, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="p-0 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full outline w-fit">
                    <item.icon size={16} />
                  </div>
                  <p className="text-base font-semibold text-muted-foreground">
                    {item.title}
                  </p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" size="icon-xs">
                        <EllipsisVertical
                          size={16}
                          className="shrink-0 size-4"
                        />
                      </Button>
                    }
                  />
                  <DropdownMenuContent className="p-1">
                    {Action.map((items, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="flex items-center gap-2 font-normal cursor-pointer"
                      >
                        <items.icon size={16} />
                        <span className="text-xs">{items.listtitle}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-card-foreground">
                      {item.value}
                    </p>
                    <Badge
                      className={cn(
                        "font-normal text-muted-foreground",
                        item.badgeColor,
                      )}
                    >
                      {item.badgeValue}
                    </Badge>
                  </div>
                  <ChartRenderer type={item.chartType as ChartType} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
