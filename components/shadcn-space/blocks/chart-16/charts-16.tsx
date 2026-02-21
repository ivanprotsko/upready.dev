"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
    { month: "Jan", y2026: 100, y2025: 50, y2024: 35 },
    { month: "Feb", y2026: 75, y2025: 60, y2024: 45 },
    { month: "Mar", y2026: 80, y2025: 30, y2024: 40 },
    { month: "Apr", y2026: 40, y2025: 55, y2024: 50 },
    { month: "May", y2026: 20, y2025: 75, y2024: 35 },
    { month: "Jun", y2026: 40, y2025: 60, y2024: 55 },
    { month: "Jul", y2026: 0, y2025: 40, y2024: 100 },
    { month: "Aug", y2026: 25, y2025: 50, y2024: 120 },
];

const chartConfig = {
    y2026: {
        label: "2026",
        color: "var(--chart-3)",
    },
    y2025: {
        label: "2025",
        color: "var(--chart-2)",
    },
    y2024: {
        label: "2024",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig;

const Charts16 = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                        <Icon
                            icon="solar:layers-linear"
                            className="text-blue-500"
                            height={24}
                        />
                    </span>
                    <div>
                        <CardTitle className="text-lg">Revenue Forecast</CardTitle>
                        <CardDescription>Overview of Profit</CardDescription>
                    </div>
                </div>

                <div className="mt-4 flex gap-5 md:mt-0">
                    <LegendDot color="bg-chart-5" label="2024" />
                    <LegendDot color="bg-chart-2" label="2025" />
                    <LegendDot color="bg-chart-3" label="2026" />
                </div>
            </CardHeader>

            <CardContent className="space-y-4 pr-6 pl-2">
                <ChartContainer config={chartConfig} className="h-[310px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ left: -10, right: 0 }}>
                            <CartesianGrid stroke="var(--color-muted)" vertical horizontal />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} />
                            <YAxis
                                ticks={[0, 20, 40, 60, 80, 100, 120]}
                                domain={[0, 120]}
                                tickLine={false}
                                axisLine={false}
                            />

                            <ChartTooltip content={<ChartTooltipContent />} />

                            <Area
                                type="monotone"
                                dataKey="y2026"
                                stroke="var(--chart-3)"
                                fill="var(--chart-3)"
                                fillOpacity={0.1}
                                strokeWidth={2}
                            />
                            <Area
                                type="monotone"
                                dataKey="y2025"
                                stroke="var(--chart-2)"
                                fill="var(--chart-2)"
                                fillOpacity={0.1}
                                strokeWidth={2}
                            />
                            <Area
                                type="monotone"
                                dataKey="y2024"
                                stroke="var(--chart-5)"
                                fill="var(--chart-5)"
                                fillOpacity={0.1}
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

const LegendDot = ({ color, label }: { color: string; label: string }) => (
    <div className="flex items-center gap-2 text-sm">
        <span className={`h-2 w-2 rounded-full ${color}`} />
        <span className="text-muted-foreground">{label}</span>
    </div>
);

export default Charts16;
