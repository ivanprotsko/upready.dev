import { Card } from "@/components/ui/card";
type LogoItem = {
  id: string;
  src?: string;
  alt?: string;
};

const LogoCloudDemo = () => {
  const brandList: LogoItem[] = [
    {
      id: "1",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-1.svg",
      alt: "Logo 1",
    },
    {
      id: "2",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-2.svg",
      alt: "Logo 2",
    },
    {
      id: "3",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-3.svg",
      alt: "Logo 3",
    },

    {
      id: "4",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-4.svg",
      alt: "Logo 4",
    },
    {
      id: "5",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-5.svg",
      alt: "Logo 5",
    },
    {
      id: "6",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-6.svg",
      alt: "Logo 5",
    },
    {
      id: "7",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-7.svg",
      alt: "Logo 8",
    },
    {
      id: "8",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-8.svg",
      alt: "Logo 6",
    },
    {
      id: "9",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-9.svg",
      alt: "Logo 9",
    },
    {
      id: "10",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud05-10.svg",
      alt: "Logo 10",
    },
  ];

  const row1 = brandList.slice(0, 3);
  const row2 = brandList.slice(3, 7);
  const row3 = brandList.slice(7, 10);
  return (
    <div className="lg:py-20 sm:py-16 py-8 relative overflow-hidden">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto flex flex-col md:gap-12 gap-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="md:text-5xl text-4xl text-foreground font-medium">
            Trusted by the world's leading brands/partners
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Over the years, we've cultivated strong partnerships with leading
            brands worldwide, ensuring top-tier service and innovative
            solutions.
          </p>
        </div>
        <div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-0 justify-center `}
          >
            {row1.map((item, index) => (
              <Card
                key={item.id}
                className="flex items-center justify-center shadow-none border-s sm:border-e-0 border-e sm:last:border-e overflow-visible rounded-none text-center px-5 ring-0 border-t h-50 relative transition-all hover:bg-muted"
              >
                <div>
                  <img
                    src={item.src}
                    alt={item.alt || "logo"}
                    className="mx-auto dark:brightness-0 dark:invert"
                  />
                </div>

                {index === 0 && (
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1 z-10 sm:block hidden"></div>
                )}

                {index !== 0 && (
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1 z-10 sm:block hidden"></div>
                )}

                {index === row1.length - 1 && (
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1 z-10 sm:block hidden"></div>
                )}

                <div className="sm:hidden">
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -left-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1 z-10" />
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 justify-center">
            {row2.map((item, index) => (
              <Card
                key={item.id}
                className="flex items-center justify-center shadow-none border-s sm:border-e-0 border-e last:border-e overflow-visible rounded-none text-center px-5 ring-0 sm:border-y  border-t last:border-b h-50 relative  transition-all hover:bg-muted"
              >
                <div>
                  <img
                    src={item.src}
                    alt={item.alt || "logo"}
                    className="mx-auto dark:brightness-0 dark:invert"
                  />
                </div>

                <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1 z-10 sm:block hidden" />

                {index === row2.length - 1 && (
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1 z-10 sm:block hidden" />
                )}

                {index === 0 && (
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -left-1 z-10 sm:block hidden" />
                )}

                <div className="sm:hidden">
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -left-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1 z-10" />
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-0 justify-center">
            <div className="hidden md:block" />

            {row3.map((item, index) => (
              <Card
                key={item.id}
                className="flex items-center justify-center shadow-none border-s sm:border-e-0 border-e last:border-e overflow-visible rounded-none text-center px-5 ring-0 border-b h-50 relative  transition-all hover:bg-muted"
              >
                <div>
                  <img
                    src={item.src}
                    alt={item.alt || "logo"}
                    className="mx-auto dark:brightness-0 dark:invert"
                  />
                </div>

                <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1 z-10 sm:block hidden" />

                <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -left-1 z-10 sm:block hidden" />

                {index === row3.length - 1 && (
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1 z-10 sm:block hidden" />
                )}

                {index === row3.length - 1 && (
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1 z-10 sm:block hidden" />
                )}

                <div className="sm:hidden">
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -left-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -top-1 -right-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -left-1 z-10" />
                  <div className="h-2 w-2 rounded-full bg-border absolute -bottom-1 -right-1 z-10" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloudDemo;
