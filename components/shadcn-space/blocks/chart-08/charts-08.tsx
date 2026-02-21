"use client";

import { Icon } from "@iconify/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartConfig,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Charts08 = ({ className }: { className?: string }) => {
    const dropdownItems = ["Action", "Another action", "Something else"];

    const chartDatas = [
        {
            color: "bg-sky-400",
            title: "36% Modernize",
        },
        {
            color: "bg-blue-500",
            title: "17% Spike",
        },
        {
            color: "bg-red-500/10",
            title: "22% Ample",
        },
        {
            color: "bg-primary/5",
            title: "31% MaterialM",
        },
    ];
    const chartData = [
        { name: "Modernize", value: 36, fill: "var(--color-sky-400)" },
        { name: "Spike", value: 10, fill: "var(--color-blue-500)" },
        {
            name: "Ample",
            value: 16,
            fill: "var(--color-red-500)",
            fillOpacity: 0.1,
        },
        {
            name: "MaterialM",
            value: 16,
            fill: "var(--color-primary)",
            fillOpacity: 0.05,
        },
        {
            name: "Extra 1",
            value: 16,
            fill: "var(--color-primary)",
            fillOpacity: 0.1,
        },
        { name: "Extra 2", value: 10, fill: "var(--color-teal-500)" },
    ];

    const chartConfig = {
        value: {
            label: "Sales",
        },
    } satisfies ChartConfig;

    const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <>
            <Card className={className}>
                <CardHeader className="flex items-center justify-between px-0">
                    <CardTitle className="text-lg text-foreground">
                        Product Sales
                    </CardTitle>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none">
                                <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-accent  hover:text-accent-foreground cursor-pointer">
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

                <div className="h-[220px] relative">
                    <ChartContainer config={chartConfig}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent />} />

                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    startAngle={180}
                                    endAngle={0}
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={0}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={index} fill={entry.fill} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>

                    <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                        <span className="text-2xl font-semibold text-foreground">
                            {total ? 8364 : total}
                        </span>
                    </div>
                </div>

                <div className="bg-teal-400/10 text-teal-400 mx-auto -mt-4 flex gap-1 items-center py-2 px-3 rounded-full w-fit justify-center text-xs font-medium">
                    <Icon icon="bi:lightning-charge-fill" />
                    Best Seller
                </div>

                <div className="grid grid-cols-12 gap-2 mt-7 border-b border-border pb-3">
                    {chartDatas.map((item, index) => (
                        <div className="sm:col-span-6  col-span-12" key={index}>
                            <div className="flex gap-2 items-center">
                                <span
                                    className={`rounded-full w-[18px] h-[10px] ${item.color}`}
                                ></span>
                                <h6 className="text-sm font-normal text-foreground">
                                    {item.title}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs font-normal text-muted-foreground max-w-3xs mx-auto">
                    This is overview of the sales happened this month for the material
                    website
                </p>
            </Card>
        </>
    );
};

export default Charts08;
