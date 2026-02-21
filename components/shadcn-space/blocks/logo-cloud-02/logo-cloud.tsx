import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/shadcn-space/animations/marquee";

type LogoItem = {
  id: string;
  src?: string;
  title?: string;
  description?: string;
};

const LogoCloudDemo = () => {
  const brandList: LogoItem[] = [
    {
      id: "1",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-1.svg",
    },
    {
      id: "2",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-2.svg",
    },
    {
      id: "3",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-3.svg",
    },
    {
      id: "4",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-2.svg",
    },
    {
      id: "5",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-4.svg",
    },

    {
      id: "6",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-5.svg",
    },
    {
      id: "7",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-8.svg",
    },
    {
      id: "8",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-6.svg",
    },
    {
      id: "9",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-4.svg",
    },
    {
      id: "10",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-8.svg",
    },
    {
      id: "11",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-9.svg",
    },
  ];

  const firstRow = brandList.slice(0, 6);
  const secondRow = brandList.slice(6, 12);

  return (
    <section className="bg-muted">
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto space-y-6">
          {/* ROW 1 — LEFT */}
          <div className="overflow-hidden">
            <Marquee
              pauseOnHover
              className="[--duration:35s] py-0 [--gap:24px]"
            >
              {[...firstRow, ...firstRow].map((item, i) => (
                <div key={item.id + i} className="w-48 shrink-0">
                  <Card className="relative h-42 flex items-center justify-center rounded-lg overflow-hidden shadow-none ring-0 hover:z-10">
                    {/* Logo */}
                    <div>
                      <img
                        src={item.src}
                        alt="brand logo"
                        className="max-h-10 transition-opacity duration-300 hover:opacity-0 dark:brightness-0 dark:invert"
                      />
                    </div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center opacity-0 bg-card transition-opacity duration-300 hover:opacity-100">
                      <h3 className="text-base font-medium text-foreground">
                        Shadcn Space
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        dummy text lorem ipsum logo text
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </Marquee>
          </div>

          {/* ROW 2 — RIGHT */}
          <div className="overflow-hidden">
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:35s] py-0  [--gap:24px]"
            >
              {[...secondRow, ...secondRow].map((item, i) => (
                <div key={item.id + i} className="w-48 shrink-0">
                  <Card className="relative h-42 flex items-center justify-center rounded-lg overflow-hidden shadow-none ring-0 hover:z-10">
                    {/* Logo */}
                    <div>
                      <img
                        src={item.src}
                        alt="brand logo"
                        className="max-h-10 transition-opacity duration-300 hover:opacity-0 dark:brightness-0 dark:invert"
                      />
                    </div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center opacity-0 bg-card transition-opacity duration-300 hover:opacity-100">
                      <h3 className="text-base font-medium text-foreground">
                        Shadcn Space
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        dummy text lorem ipsum logo text
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloudDemo;
