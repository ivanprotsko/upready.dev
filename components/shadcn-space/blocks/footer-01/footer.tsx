"use client";

import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = ({
  copyright = "©2026 upready. All Rights Reserved",
}: {
  copyright?: string;
} = {}) => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 px-6 xl:px-0">
            <a href="#">
              <Logo />
            </a>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            <p className="text-sm font-normal text-muted-foreground">
              {copyright}
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
};

export default Footer;
