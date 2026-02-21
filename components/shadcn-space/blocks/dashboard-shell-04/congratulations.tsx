"use client";

import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, Handbag, FileText, ClipboardList } from "lucide-react";

export interface ItemProps {
    icon: LucideIcon;
    colors: string;
    orders: string;
    status: string;
}

const items: ItemProps[] = [
    {
        icon: Handbag,
        colors: "bg-teal-400/10 text-teal-400",
        orders: "64 new orders",
        status: "Processing",
    },
    {
        icon: FileText,
        colors: "bg-blue-500/10 text-blue-500",
        orders: "4 orders",
        status: "On hold",
    },
    {
        icon: ClipboardList,
        colors: "bg-orange-400/10 text-orange-400",
        orders: "12 orders",
        status: "Delivered",
    },
];

const Congratulations = () => {
    return (

        <Card className="w-full h-full">
            <CardContent className="flex items-center justify-between sm:flex-row flex-col sm:gap-0 gap-6">
                <div className="flex flex-col gap-6">
                    <div>
                        <CardTitle className="text-lg font-semibold ">
                            Congratulations Jonathan
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                            You have done 38% more sales
                        </CardDescription>
                    </div>
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className={cn("p-3 rounded-lg", item.colors)}>
                                <item.icon width={16} height={16} />
                            </div>
                            <div>
                                <p className="text-sm font-medium">{item.orders}</p>
                                <p className="text-xs text-muted-foreground">{item.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <img src="https://images.shadcnspace.com/assets/widgets/widget-09-img.webp" />
                </div>
            </CardContent>
        </Card>

    );
};

export default Congratulations;
