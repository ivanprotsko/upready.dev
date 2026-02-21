"use client";

import { Icon } from "@iconify/react";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { useState } from "react";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const Charts09 = ({ className }: { className?: string }) => {
    const [year, setYear] = useState<string | null>("2026");

    const ChartData = [
        { month: "Jan", sales: 32, visits: 25, revenue: 36 },
        { month: "Feb", sales: 27, visits: 35, revenue: 30 },
        { month: "Mar", sales: 27, visits: 20, revenue: 30 },
        { month: "Apr", sales: 30, visits: 20, revenue: 35 },
        { month: "May", sales: 25, visits: 20, revenue: 30 },
        { month: "Jun", sales: 25, visits: 20, revenue: 30 },
    ];

    const chartConfig = {
        revenue: {
            label: "Revenue",
            color: "var(--color-sky-500)",
        },

        sales: {
            label: "Sales",
            color: "var(--color-sky-400)",
        },
        visits: {
            label: "Visits",
            color: "var(--color-teal-400)",
        },
    } satisfies ChartConfig;

    return (
        <>
            <Card className={className}>
                <div className="sm:flex items-center justify-between">
                    <h5 className="text-lg font-semibold text-foreground">
                        Pipeline Analytics
                    </h5>
                    <div className="flex items-center gap-3 sm:mt-0 mt-4 justify-between">
                        <Select value={year} onValueChange={setYear}>
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2026">2026</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-7 items-center mt-4">
                    <div className="lg:col-span-7 col-span-12 h-[350px]">
                        <div className="lg:col-span-7 col-span-12 h-[350px]">
                            <ChartContainer className="h-full w-full" config={chartConfig}>
                                <RadarChart data={ChartData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="month" />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />

                                    <Radar
                                        name="Revenue"
                                        dataKey="revenue"
                                        stroke="var(--color-sky-500)"
                                        fill="var(--color-sky-500)"
                                        fillOpacity={0.1}
                                    />

                                    <Radar
                                        name="Sales"
                                        dataKey="sales"
                                        stroke="var(--color-sky-400)"
                                        fill="var(--color-sky-400)"
                                        fillOpacity={0.1}
                                    />

                                    <Radar
                                        name="Visits"
                                        dataKey="visits"
                                        stroke="var(--color-teal-400)"
                                        fill="var(--color-teal-400)"
                                        fillOpacity={0.1}
                                    />
                                </RadarChart>
                            </ChartContainer>
                        </div>
                    </div>
                    <div className="lg:col-span-5 col-span-12">
                        <div className="bg-blue-500/10 rounded-md px-5 py-4">
                            <Icon
                                icon="material-symbols:target"
                                className="text-blue-500 mb-2"
                                height="30"
                            ></Icon>
                            <h5 className="text-lg font-semibold text-foreground my-1">
                                Opportunities
                            </h5>
                            <p className="text-sm font-medium text-muted-foreground">
                                Q2 deals show strong growth potential!
                            </p>
                        </div>
                        <div className="flex gap-3 items-center mt-6">
                            <span className="rounded-sm w-[12px] h-[12px] bg-teal-400"></span>
                            <h6 className="text-base font-semibold text-foreground">22.3%</h6>
                            <p className="text-sm font-medium text-muted-foreground">
                                Lead Conversion Rate
                            </p>
                        </div>
                        <div className="flex gap-3 items-center mt-4">
                            <span className="rounded-sm w-[12px] h-[12px] bg-blue-500"></span>
                            <h6 className="text-base font-semibold text-foreground">14.2%</h6>
                            <p className="text-sm font-medium text-muted-foreground">
                                Opportunity Win Rate
                            </p>
                        </div>
                        <div className="flex gap-3 items-center mt-4">
                            <span className="rounded-sm w-[12px] h-[12px] bg-orange-400"></span>
                            <h6 className="text-base font-semibold text-foreground">11.6%</h6>
                            <p className="text-sm font-medium text-muted-foreground">
                                Churn Rate
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default Charts09;
