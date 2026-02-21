"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Widget16 = () => {
  return (
    <div className="lg:py-20 sm:py-16 py-8 max-w-7xl mx-auto md:px-0 px-4 ">
      <Card className="bg-blue-500/10 rounded-xl ring-0 shadow-none">
        <CardContent className="flex items-center justify-between md:flex-nowrap flex-wrap sm:gap-0 gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="relative bg-red-500 w-1.5 h-1.5 rounded-full">
                <div className="bg-red-500 absolute w-1.5 h-1.5 rounded-full animate-ping"></div>
              </div>
              <p className="text-sm font-medium">Update</p>
            </div>
            <p className="text-lg font-medium">
              Sales revenue increased 40% in 1 week
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-500/80"
          >
            See Statistics <ArrowRight />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default Widget16;
