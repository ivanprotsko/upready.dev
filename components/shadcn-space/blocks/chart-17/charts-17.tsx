"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";

const data = [
    { month: "Jan", 2025: 200, gap: 5, 2026: 100 },
    { month: "February", 2025: 186, gap: 5, 2026: 200 },
    { month: "March", 2025: 237, gap: 5, 2026: 120 },
    { month: "April", 2025: 73, gap: 5, 2026: 190 },
    { month: "May", 2025: 209, gap: 5, 2026: 130 },
];

const chartConfig = {
    2025: {
        label: "2025",
        color: "var(--color-sky-400)",
    },
    2026: {
        label: "2026",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig;

const Charts17 = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>
            <CardHeader className="px-0">
                <CardTitle className="text-foreground font-semibold text-lg">
                    Revenue Updates
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground font-normal">
                    Overview of profit
                </CardDescription>
                <div className="flex gap-3 items-center mt-8">
                    <div className="flex items-center gap-2">
                        <Icon icon="tabler:point-filled" className="text-chart-3 text-lg" />
                        <p className="text-xs ">2026</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon icon="tabler:point-filled" className="text-sky-400 text-lg" />
                        <p className="text-xs  ">2025</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="px-0">
                <div>
                    <ChartContainer config={chartConfig} className="h-64 w-full ">
                        <BarChart
                            accessibilityLayer
                            data={data}
                            barGap={8}
                            barCategoryGap="30%"
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={4}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                tickLine={false}
                                tickMargin={4}
                                axisLine={false}
                                domain={[100, 400]}
                                ticks={[100, 200, 300, 400]}
                                width={30}
                            />
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />

                            <Bar
                                dataKey="2025"
                                stackId="a"
                                fill="var(--color-2025)"
                                radius={[5, 5, 5, 5]}
                                barSize={10}
                            />
                            <Bar dataKey="gap" stackId="a" fill="transparent" />
                            <Bar
                                dataKey="2026"
                                stackId="a"
                                fill="var(--color-2026)"
                                radius={[5, 5, 5, 5]}
                                barSize={10}
                            />
                        </BarChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default Charts17;
