"use client";

import { cn } from "@/lib/utils";

const icons = [
  // Left side
  {
    name: "React",
    url: "https://images.shadcnspace.com/assets/svgs/react.svg",
    className: "top-[15%] left-[5%]",
    height: 32,
    width: 36,
  },
  {
    name: "Microsoft",
    url: "https://images.shadcnspace.com/assets/svgs/microsoft.svg",
    className: "top-[35%] -left-[5%] scale-105",
    height: 36,
    width: 36,
  },
  {
    name: "Python",
    url: "https://images.shadcnspace.com/assets/svgs/python.svg",
    className: "bottom-[40%] left-[15%]",
    height: 32,
    width: 32,
  },
  {
    name: "Azure",
    url: "https://images.shadcnspace.com/assets/svgs/azure.svg",
    className: "bottom-[15%] left-[5%]",
    height: 32,
    width: 33,
  },
  // Right side
  {
    name: "VS Code",
    url: "https://images.shadcnspace.com/assets/svgs/vscode.svg",
    className: "top-[20%] right-[5%]",
    height: 32,
    width: 32,
  },
  {
    name: "Google Cloud",
    url: "https://images.shadcnspace.com/assets/svgs/google-cloud.svg",
    className: "top-[50%] right-[15%] scale-125",
    height: 50,
    width: 50,
  },
  {
    name: "Swift",
    url: "https://images.shadcnspace.com/assets/svgs/swift.svg",
    className: "bottom-[25%] -right-[5%]",
    height: 32,
    width: 32,
  },
  {
    name: "Android",
    url: "https://images.shadcnspace.com/assets/svgs/android.svg",
    className: "bottom-[0%] right-[5%]",
    height: 32,
    width: 32,
  },
];

const TechIcons = () => {
  return (
    <div className="absolute inset-x-0 top-0 bottom-0 z-0 pointer-events-none overflow-hidden select-none hidden lg:block">
      <div className="max-w-7xl mx-auto h-full relative">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className={cn(
              "absolute p-4 rounded-full bg-background dark:bg-muted! border border-border/50 backdrop-blur-[2px] shadow-sm flex items-center justify-center",
              icon.className,
            )}
          >
            <img
              src={icon.url}
              alt={icon.name}
              className="size-6 md:size-8 hover:scale-110 transition-all duration-300"
              height={icon.height}
              width={icon.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
