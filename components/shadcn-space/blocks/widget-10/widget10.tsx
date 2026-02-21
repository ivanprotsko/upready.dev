"use client";
import { Area, AreaChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LucideIcon,
  Presentation,
  Star,
  MessageSquareMore,
} from "lucide-react";

const chartData = [
  { week: "Week 1", sales: 5 },
  { week: "Week 2", sales: 15 },
  { week: "Week 3", sales: 10 },
  { week: "Week 4", sales: 20 },
];

const chartConfig = {
  sales: {
    label: "Sales Per Week",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const widget = () => {
  interface SalesItem {
    icon: LucideIcon;
    key: string;
    title: string;
    subtitle: string;
    badgeColor: string;
    bgcolor: string;
  }

  const SalesData: SalesItem[] = [
    {
      icon: Presentation,
      key: "topSales",
      title: "Top Sales",
      subtitle: "Johnathan Doe",
      badgeColor: "bg-blue-500/10",
      bgcolor: "bg-sky-400/10 text-sky-400",
    },
    {
      icon: Star,
      key: "topSeller",
      title: "Best Seller",
      subtitle: "MaterialPro Admin",
      badgeColor: "bg-teal-400/10",
      bgcolor: "bg-teal-400/10 text-teal-400",
    },
    {
      icon: MessageSquareMore,
      key: "topCommented",
      title: "Most Commented",
      subtitle: "Ample Admin",
      badgeColor: "bg-orange-400/10",
      bgcolor: "bg-orange-400/10 text-orange-400",
    },
  ];

  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <Card className="h-full max-w-sm mx-auto">
        <CardContent className="flex flex-col justify-between h-full gap-6">
          {/* Header */}
          <div>
            <h5 className="text-lg font-semibold">Weekly Stats</h5>
            <p className="text-sm text-muted-foreground">Average sales</p>
          </div>

          {/* Chart */}
          <div>
            <ChartContainer config={chartConfig} className="h-[170px] w-full">
              <AreaChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-sales)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-sales)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Area
                  dataKey="sales"
                  type="natural"
                  fill="url(#colorSales)"
                  fillOpacity={0.4}
                  stroke="var(--color-sales)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </div>

          {/* Stats List with Scroll-Based Animation */}
          <div className="flex flex-col gap-4">
            {SalesData.map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`${item.bgcolor} h-10 w-10 flex justify-center items-center rounded-md`}
                  >
                    <item.icon width={16} height={16} />
                  </div>
                  <div>
                    <h6 className="text-base font-semibold">{item.title}</h6>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <Badge
                  className={`py-1.1 rounded-full text-sm h-auto text-muted-foreground ${item.badgeColor}`}
                >
                  +68
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default widget;
