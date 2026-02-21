import { Marquee } from "@/components/shadcn-space/animations/marquee";

export interface LogoCloud03Props {
  items: string[];
}

export default function LogoCloud03({ items }: LogoCloud03Props) {
  return (
    <section className="lg:py-20 sm:py-16 py-8">
      <div className="border-y overflow-hidden">
        <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4">
          <Marquee pauseOnHover className="[--duration:20s] py-0 [--gap:0px]">
            {items.map((label, index) => (
              <div
                key={index}
                className="w-48 shrink-0 h-40 flex items-center justify-center border-r px-8"
              >
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
