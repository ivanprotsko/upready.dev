"use client";

import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartConfig,
} from "@/components/ui/chart";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const Charts13 = ({ className }: { className?: string }) => {
    const dropdownItems = ["Action", "Another action", "Something else"];

    const chartData = [
        { year: "2019", sales: 13000, profit: 14000 },
        { year: "2020", sales: 16000, profit: 18000 },
        { year: "2021", sales: 19000, profit: 15000 },
        { year: "2022", sales: 18000, profit: 20000 },
        { year: "2023", sales: 15000, profit: 17000 },
    ];

    const chartConfig = {
        year: { label: "Year" },
        sales: { label: " Sales", color: "var(--color-blue-500)" },
        profit: { label: "Profit", color: "var(--color-border)" },
    } satisfies ChartConfig;

    return (
        <>
            <Card className={className}>
                <CardHeader className="px-0 flex justify-between align-baseline">
                    <CardTitle className="text-lg font-medium">Product Sales</CardTitle>
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
                </CardHeader>
                <CardContent className="px-0">
                    <div className="my-3">
                        <ChartContainer config={chartConfig} className=" h-72 w-full">
                            <LineChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="year"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={9}
                                />
                                <YAxis
                                    domain={[12000, 20000]}
                                    ticks={[12000, 14000, 16000, 18000, 20000]}
                                    tickFormatter={(value) => `${value / 1000}k`}
                                    tickLine={false}
                                    axisLine={false}
                                    width={30}
                                />

                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />
                                <Line
                                    dataKey="sales"
                                    type="monotone"
                                    stroke="var(--color-sales)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                                <Line
                                    dataKey="profit"
                                    type="monotone"
                                    stroke="var(--color-profit)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <div
                            className={`h-11 w-11 rounded-lg flex justify-center items-center bg-blue-500/20`}
                        >
                            <Icon
                                icon="solar:user-circle-outline"
                                height={25}
                                className="text-blue-500"
                            />
                        </div>
                        <div>
                            <h5 className="text-sm flex gap-2  font-semibold text-foreground ">
                                36,436
                                <Badge className="bg-teal-400/10 text-muted-foreground">
                                    +12%
                                </Badge>
                            </h5>
                            <p className="text-muted-foreground text-sm font-normal">
                                New Customer
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default Charts13;
