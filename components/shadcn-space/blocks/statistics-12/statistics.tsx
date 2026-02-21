"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Users,
  DollarSign,
  UserRound,
  BriefcaseBusiness,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  className?: string; // For background color
  iconClassName?: string; // For icon color/style
}

const StatSubCard = ({
  label,
  value,
  icon: Icon,
  className,
  iconClassName,
}: StatCardProps) => (
  <div
    className={cn(
      "relative flex flex-1 flex-col justify-between gap-2 p-4 rounded-xl",
      className,
    )}
  >
    <div className="flex justify-between items-start">
      <span className="text-sm font-normal">{label}</span>
      <Icon className={cn("size-4", iconClassName)} />
    </div>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);

const StatisticsBlock = () => {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <Card className="w-full max-w-md mx-auto ring-border gap-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-card-foreground">
              Total Assets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column - Taller Cards (1/2 height each) */}
              <div className="flex flex-col gap-4">
                <StatSubCard
                  label="Employees"
                  value="96"
                  icon={Users}
                  className="bg-teal-400/10 text-card-foreground"
                  iconClassName="text-teal-400"
                />
                <StatSubCard
                  label="Clients"
                  value="3,650"
                  icon={UserRound}
                  className="bg-orange-400/10 text-card-foreground"
                  iconClassName="text-orange-400"
                />
              </div>

              {/* Right Column - Shorter Cards (1/3 height each) */}
              <div className="flex flex-col gap-4">
                <StatSubCard
                  label="Projects"
                  value="356"
                  icon={BriefcaseBusiness}
                  className="bg-red-500/10 text-card-foreground"
                  iconClassName="text-red-500"
                />
                <StatSubCard
                  label="Payroll"
                  value="$96k"
                  icon={DollarSign}
                  className="bg-amber-300/10 text-card-foreground"
                  iconClassName="text-amber-300"
                />
                <StatSubCard
                  label="Events"
                  value="96"
                  icon={CalendarDays}
                  className="bg-sky-400/10 text-card-foreground"
                  iconClassName="text-sky-400"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsBlock;
