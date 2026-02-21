"use client";

import { TotalSalesCard } from "@/components/shadcn-space/blocks/statistics-05/total-sales-card";
import { MonthlySalesCard } from "@/components/shadcn-space/blocks/statistics-05/monthly-sales-card";
import { RevenueGrowthCard } from "@/components/shadcn-space/blocks/statistics-05/revenue-growth-card";

export default function StatisticsDemo() {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TotalSalesCard />
          <MonthlySalesCard />
          <RevenueGrowthCard />
        </div>
      </div>
    </div>
  );
}
