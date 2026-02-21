"use client";

import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const Charts06 = ({ className }: { className?: string }) => {
  const IconData = [
    {
      icon: "solar:course-up-line-duotone",
      title: "$14,673",
      subtitle: "Total Sales",
      color: "bg-blue-500/20 text-blue-500",
      backcolor: "bg-blue-500/20",
    },
    {
      icon: "solar:dollar-minimalistic-line-duotone",
      title: "$9,281",
      subtitle: "Total Profit",
      color: "bg-orange-400/20 text-orange-400",
      backcolor: "bg-orange-400/20",
    },
    {
      icon: "solar:flag-2-line-duotone",
      title: "45.1k",
      subtitle: "Total Users",
      color: "bg-red-500/20 text-red-500",
      backcolor: "bg-red-500/20",
    },
    {
      icon: "solar:pie-chart-line-duotone",
      title: "$4,673",
      subtitle: "Total Expense",
      color: "bg-teal-400/20 text-teal-400",
      backcolor: "bg-teal-400/20",
    },
  ];

  const ordersData = [
    { month: "Jan", BTC: 3500, ETH: 3000 },
    { month: "Feb", BTC: 2500, ETH: 1500 },
    { month: "Mar", BTC: 4000, ETH: 3100 },
    { month: "Apr", BTC: 2500, ETH: 5000 },
    { month: "May", BTC: 5500, ETH: 3000 },
    { month: "Jun", BTC: 3500, ETH: 5500 },
    { month: "Jul", BTC: 2500, ETH: 3500 },
  ];

  const expensesData = [
    { month: "Aug", thisYear: 25, lastYear: 50 },
    { month: "Sep", thisYear: 13, lastYear: 35 },
    { month: "Oct", thisYear: 20, lastYear: 30 },
    { month: "Nov", thisYear: 40, lastYear: 20 },
    { month: "Dec", thisYear: 45, lastYear: 20 },
    { month: "Jan", thisYear: 50, lastYear: 30 },
    { month: "Feb", thisYear: 70, lastYear: 35 },
    { month: "Mar", thisYear: 30, lastYear: 40 },
  ];

  return (
    <>
      <Card className={className}>
        <div className="grid grid-cols-12 gap-7">
          <div className="md:col-span-8 col-span-12">
            <Tabs defaultValue="Orders" className="w-full">
              <div className="sm:flex items-start justify-between">
                <div>
                  <CardDescription className="font-normal text-muted-foreground">
                    Overall Balance
                  </CardDescription>
                  <CardTitle className="text-3xl font-semibold text-card-foreground my-1">
                    $2,538,942
                  </CardTitle>
                  <div className="flex gap-1 items-center">
                    <Badge className="h-auto py-0.5 px-2 gap-1 bg-chart-2/10 text-chart-2">
                      <TrendingUp width={16} height={16} />
                      16.3%
                    </Badge>
                    <small className="text-xs text-muted-foreground font-normal">
                      last 12 months
                    </small>
                  </div>
                </div>
                <div className="mb-4 sm:mt-0 mt-6">
                  <TabsList className="flex flex-wrap bg-muted rounded-full w-fit">
                    <TabsTrigger
                      value="Orders"
                      className="py-2 px-4 rounded-full min-w-[100px] text-xs font-semibold data-[state=active]:bg-background dark:data-[state=active]:bg-dark data-[state=active]:text-foreground
             data-[state=inactive]:text-muted-foreground cursor-pointer"
                    >
                      Orders
                    </TabsTrigger>

                    <TabsTrigger
                      value="Expenses"
                      className="py-2 px-4 rounded-full min-w-[100px] text-xs font-semibold data-[state=active]:bg-background dark:data-[state=active]:bg-dark data-[state=active]:text-foreground
             data-[state=inactive]:text-muted-foreground cursor-pointer"
                    >
                      Expenses
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <TabsContent value="Orders">
                <div className="h-[210px] mt-4 ">
                  <ChartContainer
                    className="h-full w-full"
                    config={{
                      BTC: { label: "BTC", color: "var(--chart-3)" },
                      ETH: { label: "ETH", color: "var(--color-border)" },
                    }}
                  >
                    <AreaChart
                      data={ordersData}
                      accessibilityLayer
                      margin={{
                        left: 10,
                        right: 10,
                      }}
                    >
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={0}
                        interval={0}
                      />
                      <YAxis hide />
                      <ChartTooltip content={<ChartTooltipContent />} />

                      <Area
                        type="monotone"
                        dataKey="BTC"
                        stroke="var(--color-BTC)"
                        fill="url(#fillBTC)"
                        strokeWidth={3}
                      />
                      <Area
                        type="monotone"
                        dataKey="ETH"
                        stroke="var(--color-ETH)"
                        fill="url(#fillETH)"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </TabsContent>

              <TabsContent value="Expenses">
                <div className="h-[210px] w-full  mt-4 ">
                  <ChartContainer
                    className="h-full w-full"
                    config={{
                      thisYear: {
                        label: "This Year",
                        color: "var(--chart-3)",
                      },
                      lastYear: {
                        label: "Last Year",
                        color: "var(--color-border)",
                      },
                    }}
                  >
                    <AreaChart data={expensesData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        domain={[0, 80]}
                        tickCount={8}
                        ticks={[0, 20, 40, 60, 80]}
                        tickLine={false}
                        axisLine={false}
                        width={30}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />

                      <Area
                        type="monotone"
                        dataKey="thisYear"
                        stroke="var(--color-thisYear)"
                        fill="var(--color-thisYear)"
                        fillOpacity={0.1}
                        strokeWidth={3}
                      />

                      <Area
                        type="monotone"
                        dataKey="lastYear"
                        stroke="transparent"
                        fill="transparent"
                        dot={false}
                        activeDot={false}
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="md:col-span-4 col-span-12 pb-5">
            <div className="flex flex-col gap-2">
              {IconData.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center rounded-xl ${item.backcolor} px-4 py-5`}
                >
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
                  >
                    <Icon icon={item.icon} height={24} />
                  </span>
                  <div>
                    <p className="text-xs font-normal text-muted-foreground">
                      {item.subtitle}
                    </p>
                    <h5 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Charts06;
