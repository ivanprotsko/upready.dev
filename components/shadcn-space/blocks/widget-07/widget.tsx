"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const data = [
    {
        name: "distribution",
        Product: 60,
        Service: 25,
        Other: 15,
    },
]
const chartConfig = {
    Product: {
        label: "Product Sales",
        color: "var(--color-blue-500)",
    },
    Service: {
        label: "Service Revenue",
        color: "var(--color-sky-400)",
    },
    Other: {
        label: "Other Income",
        color: "var(--color-teal-400)",
    },
} satisfies ChartConfig

export default function Widget() {
    return (
        <div className="lg:py-20 sm:py-16 py-8 px-6">
            <Card className="w-full max-w-sm mx-auto">
                <CardHeader className="flex flex-col gap-4">
                    <CardTitle className="text-lg font-semibold text-card-foreground">
                        Total Assets
                    </CardTitle>
                    <div className="flex flex-col gap-0.5">
                        <p className="text-2xl font-semibold text-card-foreground">
                            $478,230.90
                        </p>
                        <div className="flex items-center gap-1">
                            <Badge className="bg-teal-400/10 text-muted-foreground py-0.5 px-2 text-xs ">
                                +14.6%
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                                <span className="text-sm font-medium">+$65,000</span> compared to last year
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <p className="text-sm font-medium text-card-foreground">
                            Distribution
                        </p>
                        <ChartContainer config={chartConfig} className="w-full aspect-auto h-8">
                            <BarChart
                                data={data}
                                layout="vertical"
                            >
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" hide />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar
                                    dataKey="Product"
                                    stackId="a"
                                    fill="var(--color-Product)"
                                    radius={6}
                                    barSize={24}
                                    stroke="var(--card)"
                                    strokeWidth={4}
                                />
                                <Bar
                                    dataKey="Service"
                                    stackId="a"
                                    fill="var(--color-Service)"
                                    radius={6}
                                    barSize={24}
                                    stroke="var(--card)"
                                    strokeWidth={4}
                                />
                                <Bar
                                    dataKey="Other"
                                    stackId="a"
                                    fill="var(--color-Other)"
                                    radius={6}
                                    barSize={24}
                                    stroke="var(--card)"
                                    strokeWidth={4}
                                />
                            </BarChart>
                        </ChartContainer>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between gap-2 pb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <p className="text-sm font-medium text-card-foreground">Product Sales</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="text-sm font-medium text-card-foreground">
                                    $312,500.45
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    (65%)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 py-2 border-y border-border">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                                <p className="text-sm font-medium text-card-foreground">Service Revenue</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="text-sm font-medium text-card-foreground">
                                    $125,000.25
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    (26%)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                                <p className="text-sm font-medium text-card-foreground">Other Income</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="text-sm font-medium text-card-foreground">
                                    $125,000.25
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    (26%)
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}