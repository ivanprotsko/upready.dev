"use client";
import Logo from "@/assets/logo/logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <header className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
              sticky
                ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
                : "bg-transparent border-transparent",
            )}
          >
            <Link href="/">
              <Logo />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
