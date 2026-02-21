"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { BadgeCheck, Bolt } from 'lucide-react';
import { motion } from "motion/react";

// Chart data for business growth
const businessData = [
    { value: 500 },
    { value: 800 },
    { value: 1200 },
    { value: 1800 },
    { value: 2500 },
    { value: 3570 },
];

// Chart configuration
const chartConfig = {
    value: {
        label: "Value",
        color: "var(--chart-1) ",
    },
} satisfies ChartConfig;

export default function AboutUs05() {
    return (
        <section className="lg:py-20 sm:py-16 py-8 bg-muted dark:bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
                <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-4 mb-12">
                    <Badge className="text-sm font-medium py-1 px-3 bg-background border-border text-primary h-auto">
                        About Us
                    </Badge>
                    <h2 className="sm:text-5xl text-3xl font-semibold text-center">
                        Powering the future of intelligent software product
                    </h2>
                    <p className="text-center text-muted-foreground sm:text-xl text-base ">
                        We help organizations move faster with reliable, scalable technology built for modern teams. Our platform combines powerful automation, actionable insights, and enterprise-grade security to simplify complex workflows.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <Card className="py-8 ring-transparent dark:ring-border shadow-none">
                        <CardHeader className="px-8">
                            <CardTitle className="sm:text-5xl font-medium text-foreground text-4xl">
                                3570+
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-lg">
                                Businesses trust our platform to run mission-critical operations
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8">
                            <ChartContainer config={chartConfig} className="h-64 w-full">
                                <BarChart accessibilityLayer data={businessData}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Bar dataKey="value" radius={8}>
                                        {businessData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                className="fill-primary dark:fill-white"
                                                fillOpacity={index === businessData.length - 1 ? 1 : 0.1}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col gap-6">
                        <Card className="py-8 ring-transparent dark:ring-border shadow-none relative overflow-hidden">
                            <CardHeader className="px-8 gap-2 pt-9">
                                <div className="absolute -top-2/5 -right-1/4">
                                    <div className="relative w-fit">
                                        <motion.div
                                            className="border-dashed border border-primary/20 dark:border-white/20 p-10 rounded-full w-fit"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        >
                                            <motion.div
                                                className="border-dashed border border-primary/20 dark:border-white/20 p-10 rounded-full w-fit"
                                                animate={{ rotate: -720 }}
                                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                            >
                                                <motion.div
                                                    className="border-dashed border border-primary/20 dark:border-white/20 p-10 rounded-full w-fit"
                                                    animate={{ rotate: 720 }}
                                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                                />
                                            </motion.div>
                                        </motion.div>
                                        <BadgeCheck
                                            className="text-primary dark:text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </div>
                                <CardTitle className="sm:text-5xl text-4xl font-medium text-foreground ">
                                    650+
                                </CardTitle>
                                <CardDescription className="text-muted-foreground text-lg">
                                    Advanced features designed to streamline workflows
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="pb-8 pt-6 ring-transparent dark:ring-border shadow-none relative">
                            <CardHeader className="ps-8 pe-6 gap-2">
                                <div className="flex justify-end">
                                    <Bolt
                                        className="text-primary"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <CardTitle className="sm:text-5xl text-4xl font-medium text-foreground ">
                                    650+
                                </CardTitle>
                                <CardDescription className="text-muted-foreground text-lg">
                                    Advanced features designed to streamline workflows
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                    <Card className="py-0 gap-0">
                        <img src="https://images.shadcnspace.com/assets/backgrounds/about-5-card-bg.png" alt="viola group stock image" className="w-full h-full object-cover" />
                        <CardContent className="bg-foreground dark:bg-background py-8 flex flex-col gap-2">
                            <CardTitle className="sm:text-5xl text-4xl font-medium text-white">
                                50+
                            </CardTitle>
                            <CardDescription className="text-white/50 text-lg">
                                Experts dedicated to security, performance, and innovation
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}