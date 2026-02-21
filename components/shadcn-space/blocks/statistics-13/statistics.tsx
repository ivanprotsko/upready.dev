"use client";

import { Area, AreaChart, Bar, BarChart, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Layers, ChartLine, type LucideIcon } from "lucide-react";

interface StatData {
  name: string;
  total: number;
  subValue?: number;
}

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  icon: LucideIcon;
  chartType: "area" | "bar";
  data: StatData[];
  config: ChartConfig;
  className?: string;
  iconBoxClassName?: string;
  chartColor: string;
}

const StatCard = ({
  title,
  value,
  percentage,
  icon: Icon,
  chartType,
  data,
  config,
  className,
  iconBoxClassName,
  chartColor,
}: StatCardProps) => {
  return (
    <Card
      className={cn(
        "w-full max-w-2xs mx-auto ring-0 shadow-none overflow-hidden",
        className,
      )}
    >
      <CardContent className="flex flex-col gap-6">
        <div className="flex justify-between items-start gap-3">
          <div>
            <p className="text-sm font-normal text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-semibold text-card-foreground">
                {value}
              </p>
              <span className="text-sm font-normal text-muted-foreground">
                {percentage}
              </span>
            </div>
          </div>
          <div className={cn("p-3 rounded-lg", iconBoxClassName)}>
            <Icon className="size-5" />
          </div>
        </div>

        <div className="h-24 w-full">
          <ChartContainer config={config} className="h-full w-full">
            {chartType === "area" ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="fillColor" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor={chartColor}
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor={chartColor}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke={chartColor}
                    strokeWidth={2}
                    fill="url(#fillColor)"
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  barGap={0}
                >
                  <Bar
                    dataKey="subValue"
                    stackId="1"
                    fill={chartColor}
                    radius={[10, 10, 10, 10]}
                    fillOpacity={1}
                    barSize={9}
                  />
                  <Bar
                    dataKey="total"
                    stackId="1"
                    fill={chartColor}
                    radius={[10, 10, 10, 10]}
                    background={{ fill: "transparent" }}
                    fillOpacity={0.4}
                    barSize={9}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const usersData = [
  { name: "Jan", total: 100 },
  { name: "Feb", total: 150 },
  { name: "Mar", total: 120 },
  { name: "Apr", total: 180 },
  { name: "May", total: 140 },
  { name: "Jun", total: 160 },
];

const subscriptionsData = [
  { name: "Jan", total: 40, subValue: 30 },
  { name: "Feb", total: 30, subValue: 20 },
  { name: "Mar", total: 35, subValue: 25 },
  { name: "Apr", total: 45, subValue: 35 },
  { name: "May", total: 40, subValue: 30 },
  { name: "Jun", total: 42, subValue: 32 },
];

const usersConfig = {
  total: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const subConfig = {
  total: {
    label: "Subscriptions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const StatisticsBlock = () => {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-2xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard
            title="Users"
            value="14,872"
            percentage="+6.4%"
            icon={ChartLine}
            chartType="area"
            data={usersData}
            config={usersConfig}
            className="bg-sky-400/10"
            iconBoxClassName="bg-sky-400/20 text-sky-400"
            chartColor="var(--color-sky-400)"
          />
          <StatCard
            title="Subscriptions"
            value="78,298"
            percentage="-12%"
            icon={Layers}
            chartType="bar"
            data={subscriptionsData}
            config={subConfig}
            className="bg-orange-400/10"
            iconBoxClassName="bg-orange-400/20 text-orange-400"
            chartColor="var(--chart-5)"
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsBlock;
