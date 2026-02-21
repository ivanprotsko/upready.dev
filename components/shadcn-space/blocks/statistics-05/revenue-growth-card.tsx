"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LineChart } from "lucide-react";

export function RevenueGrowthCard() {
  return (
    <Card className="bg-sky-400/20 ring-0 shadow-none">
      <CardContent className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <p className="text-lg font-semibold text-card-foreground">
            Revenue Growth
          </p>
          <div className="p-3 bg-blue-500 rounded-full">
            <LineChart className="size-4 text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="text-3xl font-semibold text-card-foreground">+24%</p>
          <p className="text-sm text-muted-foreground">
            Compared to Last Month
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
