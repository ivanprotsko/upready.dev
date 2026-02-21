"use client";

import { Icon } from "@iconify/react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { PieChart, Pie, Cell, Label } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart";

const Statistics29 = ({ className }: { className?: string }) => {
    const dropdownItems = ["Action", "Another action", "Something else"];

    const MarketingData = [
        {
            icon: "solar:course-up-line-duotone",
            title: "+2.9k",
            subtitle: "Google Ads",
            color: "bg-red-500/10 text-red-500",
        },
        {
            icon: "ant-design:user-add-outlined",
            title: "1.22",
            subtitle: "Referral",
            color: "bg-teal-400/10 text-teal-300",
        },
        {
            icon: "solar:pie-chart-3-line-duotone",
            title: "0.83",
            subtitle: "Organic",
            color: "bg-blue-500/10 text-blue-500",
        },

    ];

    const pieData = [
        { name: "245", value: 20, color: "var(--color-red-500)", opacity: 0.2 },
        { name: "45", value: 20, color: "var(--color-blue-500)" },
        { name: "14", value: 20, color: "var(--color-teal-400)" },

    ];


    const chartConfig = {
        "245": {
            label: "Segment 245",
            color: "var(--color-red-500)",
        },
        "45": {
            label: "Segment 45",
            color: "var(--color-blue-500)",
        },
        "14": {
            label: "Segment 14",
            color: "var(--color-teal-400)",
        },

    } satisfies ChartConfig
    return (
        <>
            <Card className={className}>
                <CardHeader className="flex items-center justify-between px-0">
                    <CardTitle className="text-lg font-semibold text-foreground">
                        Marketing Report
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

                <div className="grid grid-cols-12 gap-6 mt-5 items-center">
                    <div className="sm:col-span-6  col-span-12 ">
                        <div className="flex flex-col gap-5">
                            {MarketingData.map((item, index) => (
                                <div key={index} className="flex gap-3 items-center">
                                    <span
                                        className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
                                    >
                                        <Icon icon={item.icon} height={24} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-normal text-muted-foreground">
                                            {item.subtitle}
                                        </p>
                                        <h4 className="text-xl font-semibold text-foreground">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:col-span-6 col-span-12">
                        <div className="text-center h-[200px]">

                            <ChartContainer className="aspect-square max-h-[250px]" config={chartConfig}>
                                <PieChart>
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />

                                    <Pie
                                        data={pieData}
                                        dataKey="value"
                                        nameKey="name"
                                        innerRadius={65}
                                        strokeWidth={50}
                                        paddingAngle={0}

                                    >
                                        <Label
                                            content={({ viewBox }) => {
                                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                    return (
                                                        <text
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            textAnchor="middle"
                                                            dominantBaseline="middle"
                                                        >

                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) + 8}
                                                                className="fill-foreground text-xl font-medium"
                                                            >
                                                                24.3k
                                                            </tspan>
                                                        </text>
                                                    )
                                                }
                                            }}
                                        />
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ChartContainer>


                        </div>
                    </div>
                </div>

                <div className="bg-sky-400/10 rounded-xl py-[18px] px-5 flex justify-between items-center mt-6">
                    <div className="w-3/4 flex gap-3 items-center">
                        <Icon
                            icon="ant-design:bulb-outlined"
                            height={40}
                            className="text-sky-400"
                        />
                        <p className="text-sm font-normal text-muted-foreground">
                            Learn insigs how to manage all aspects of your startup.
                        </p>
                    </div>

                    <a
                        href="/"
                        className="h-10 w-10 flex items-center justify-center bg-sky-400 text-white rounded-full"
                    >
                        <Icon icon="solar:play-linear" height="18"></Icon>
                    </a>
                </div>
            </Card>
        </>
    );
};

export default Statistics29;
