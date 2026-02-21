"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { name: "1W", value: 40 },
    { name: "2W", value: 40 },
    { name: "3W", value: 80 },
    { name: "4W", value: 80 },
    { name: "5W", value: 30 },
    { name: "6W", value: 30 },
    { name: "7W", value: 10 },
    { name: "8W", value: 10 },
    { name: "9W", value: 30 },
    { name: "10W", value: 30 },
    { name: "11W", value: 100 },
    { name: "12W", value: 100 },
    { name: "13W", value: 20 },
    { name: "14W", value: 20 },
    { name: "15W", value: 140 },
    { name: "16W", value: 140 },
];

const chartConfig = {
    value: {
        label: "Settlements",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig;

const Charts14 = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>
            <CardHeader className="flex gap-4 items-center mb-4 px-0">
                <span className="h-12 w-12 shrink-0 flex items-center justify-center bg-blue-500/20 rounded-lg">
                    <FaArrowTrendUp className="text-blue-500" />
                </span>
                <div>
                    <CardDescription className="text-sm text-muted-foreground font-normal">
                        Total settlements
                    </CardDescription>
                    <CardTitle className="text-2xl">$122,580</CardTitle>
                </div>
            </CardHeader>

            <CardContent className="h-76.25 w-full px-0">
                <ChartContainer className="h-full w-full" config={chartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <CartesianGrid strokeDasharray="4" vertical={false} />

                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                interval={1}
                                minTickGap={0}
                                tick={{
                                    fontSize: 10,
                                    fill: "#98A4AE",
                                    fontWeight: 600,
                                }}
                            />

                            <YAxis hide />

                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                            <defs>
                                <linearGradient
                                    id="fillSettlements"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-value)"
                                        stopOpacity={0.3}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-value)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="var(--chart-3)"
                                fill="var(--chart-3)"
                                strokeWidth={2}
                                fillOpacity={0.1}
                                dot={false}
                                activeDot={{
                                    r: 5,
                                    strokeWidth: 3,
                                    stroke: "var(--color-value)",
                                    fill: "#fff",
                                }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>

            <CardFooter className="grid grid-cols-12 mt-4 px-0">
                <div className="col-span-6 text-center">
                    <p className="text-sm font-normal mb-1 text-muted-foreground">
                        Total balance
                    </p>
                    <h5 className="text-lg text-foreground font-semibold">$122,580</h5>
                </div>
                <div className="col-span-6 text-center">
                    <p className="text-sm font-normal mb-1 text-muted-foreground">
                        Withdrawals
                    </p>
                    <h5 className="text-lg text-foreground font-semibold">$31,640</h5>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Charts14;
