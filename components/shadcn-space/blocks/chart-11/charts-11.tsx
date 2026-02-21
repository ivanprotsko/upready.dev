"use client";

import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";

const Charts11 = ({ className }: { className?: string }) => {
    const dropdownItems = ["Action", "Another action", "Something else"];


    const chartData = [
        { month: "Jan", profit: 60, expenses: 15 },
        { month: "Feb", profit: 40, expenses: 30 },
        { month: "Mar", profit: 37, expenses: 15 },
        { month: "Apr", profit: 35, expenses: 35 },
        { month: "May", profit: 35, expenses: 25 },
        { month: "Jun", profit: 20, expenses: 30 },
        { month: "Jul", profit: 30, expenses: 30 },
        { month: "Aug", profit: 20, expenses: 40 },
    ];


    const chartConfig = {
        profit: {
            label: "Profit",
            color: "var(--color-blue-500)",
        },
        expenses: {
            label: "Expenses",
            color: "var(--color-sky-400)",
        },
    } satisfies ChartConfig;
    const stats = [
        {
            title: "$63,489.50",
            subtitle: "Earning this year",
            color: "bg-sky-400/10 text-sky-500",
            profit: false,
            icon: "mynaui:dollar-solid",
        },
        {
            title: "$48,820.00",
            subtitle: "Profit this year",
            color: "bg-blue-500/10 text-blue-500",
            profit: true,
            icon: "solar:dollar-linear",
            badge: "+26.5%",
        },
        {
            title: "$103,582.50",
            subtitle: "Overall earnings",
            color: "bg-muted text-foreground",
            profit: false,
            icon: "solar:archive-up-minimlistic-bold",
        },
    ];
    return (
        <>
            <Card className={className}>
                <CardHeader className="flex justify-between align-baseline px-0">
                    <CardTitle className="text-lg text-foreground">
                        Profit & Expenses
                    </CardTitle>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none">
                                <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                    <Icon
                                        icon="solar:menu-dots-bold"
                                        width={22}
                                        height={22}
                                        className="rotate-90"
                                    />
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {dropdownItems.map((items, index) => {
                                    return (
                                        <DropdownMenuItem
                                            key={index}
                                            className="font-normal cursor-pointer"
                                        >
                                            {items}
                                        </DropdownMenuItem>
                                    );
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>

                <CardContent className="grid grid-cols-12 gap-6 px-0">
                    <div className="md:col-span-8 col-span-12">
                        <div className="mt-3 rounded-bars -ms-3 h-[300px]">
                            <ChartContainer config={chartConfig} className="h-[300px] w-full">
                                <BarChart accessibilityLayer data={chartData}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={10}
                                        domain={[0, 125]}
                                        ticks={[0, 25, 50, 75, 100, 125]}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel indicator="line" />}
                                    />
                                    <Bar
                                        dataKey="profit"
                                        stackId="a"
                                        fill="var(--color-profit)"
                                        radius={[6, 6, 6, 6]}
                                        barSize={10}
                                    />
                                    <Bar
                                        dataKey="expenses"
                                        stackId="a"
                                        fill="var(--color-expenses)"
                                        radius={[6, 6, 6, 6]}
                                        barSize={10}
                                    />
                                </BarChart>
                            </ChartContainer>
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 pt-8 pe-4">
                        <div className="flex flex-col gap-7">
                            {stats.map((item, index) => (
                                <div className="flex items-center gap-3" key={index}>
                                    <div
                                        className={`h-10 w-10 rounded-full flex justify-center items-center ${item.color}`}
                                    >
                                        <Icon icon={item.icon} height="22" />
                                    </div>

                                    <div className="items-center gap-4">
                                        <div className="items-center gap-2 flex-row flex">
                                            <h5 className="text-base font-semibold text-foreground flex gap-2 items-baseline">
                                                {item.title}{" "}
                                            </h5>
                                            {item.badge ? (
                                                <Badge className="bg-teal-400/10 text-muted-foreground">
                                                    {item.badge}
                                                </Badge>
                                            ) : null}
                                        </div>
                                        <p className="text-sm font-normal text-muted-foreground">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <Button className="bg-blue-500 hover:bg-blue-500/90 text-white rounded-full cursor-pointer">
                                View Full Report
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default Charts11;
