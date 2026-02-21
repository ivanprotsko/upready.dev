"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";
import { Icon } from "@iconify/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const stats = [
    {
        label: "Total",
        value: "$96,640",
        icon: "solar:pie-chart-2-linear",
        iconBg: "bg-muted",
        iconColor: "",
    },
    {
        label: "Profit",
        value: "$48,820",
        icon: "solar:dollar-minimalistic-linear",
        iconBg: "bg-teal-400/10",
        iconColor: "text-teal-500",
    },
    {
        label: "Earnings",
        value: "$48,820",
        icon: "solar:wallet-outline",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
    },
];

const yearlyProfit = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep"],
    series: [
        {
            name: "2026",
            data: [1.0, 2.6, 0.8, 3.4, 1.9, 2.6, 2.1, 1.1, 2.4],
        },
        {
            name: "2025",
            data: [-2.6, -1.0, -2.3, -1.3, -2.1, -1.7, -0.9, -2.0, -1.1],
        },
    ],
};

const chartData = yearlyProfit.categories.map((month, index) => {
    const row: any = { month };
    yearlyProfit.series.forEach((s) => {
        row[s.name] = s.data[index];
    });
    return row;
});

const chartConfig = {
    "2026": {
        label: "2026",
        color: "var(--color-blue-500)",
    },
    "2025": {
        label: "2025",
        color: "var(--color-teal-400)",
    },
} satisfies ChartConfig;

const Charts15 = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-wrap justify-between items-center px-0">
                <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                        Revenue Forecast
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                        Overview of Profit
                    </CardDescription>
                </div>
                <div className="flex gap-5 items-center md:mt-0 mt-4">
                    <div className="flex gap-2 text-sm   items-center">
                        <span className="bg-teal-400 rounded-full h-2 w-2"></span>
                        <span className="text-muted-foreground">2025</span>
                    </div>
                    <div className="flex gap-2 text-sm text-ld items-center">
                        <span className="bg-blue-500 rounded-full h-2 w-2"></span>
                        <span className="text-muted-foreground">2026</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-0">
                <ChartContainer config={chartConfig} className="w-full h-[300px]">
                    <BarChart
                        data={chartData}
                        barSize={10}
                        barGap={6}
                        stackOffset="sign"
                        margin={{ left: -20, right: 0 }}
                    >
                        <CartesianGrid
                            vertical
                            horizontal
                            stroke="var(--color-muted-foreground)"
                            strokeOpacity={0.08}
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={12}
                        />

                        <YAxis
                            domain={[-5, 5]}
                            ticks={[-5, -2.5, 0, 2.5, 5]}
                            tickFormatter={(value) => value.toFixed(1)}
                            axisLine={false}
                            tickLine={false}
                        />

                        <ChartTooltip
                            content={<ChartTooltipContent />}
                            cursor={{ fill: "transparent" }}
                        />

                        {yearlyProfit.series.map((s) => (
                            <Bar
                                key={s.name}
                                dataKey={s.name}
                                stackId="profit"
                                fill={chartConfig[s.name as keyof typeof chartConfig].color}
                                radius={[6, 6, 6, 6]}
                            />
                        ))}
                    </BarChart>
                </ChartContainer>
            </CardContent>

            <div className="grid md:grid-cols-3 gap-6">
                {stats.map(({ label, value, icon, iconBg, iconColor }) => (
                    <div key={label} className="flex items-center gap-4">
                        <span
                            className={`h-12 w-12 flex items-center justify-center rounded-lg ${iconBg}`}
                        >
                            <Icon icon={icon} height={24} className={iconColor} />
                        </span>

                        <div>
                            <p className="text-sm text-muted-foreground">{label}</p>
                            <h5 className="text-lg font-semibold">{value}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Charts15;
