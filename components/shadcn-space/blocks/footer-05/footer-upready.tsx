"use client";

import { Separator } from "@/components/ui/separator";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Footer05() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6">
          <Separator orientation="horizontal" />
          <div className="flex items-center justify-between">
            <p className="text-sm font-normal text-muted-foreground">
              © 2026 Upready. All rights reserved.
            </p>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
