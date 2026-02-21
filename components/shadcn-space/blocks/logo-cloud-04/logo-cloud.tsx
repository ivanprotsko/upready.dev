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
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud04-1.svg",
      alt: "Logo 1",
    },
    {
      id: "2",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-2.svg",
      alt: "Logo 2",
    },
    {
      id: "3",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud04-2.svg",
      alt: "Logo 3",
    },
    {
      id: "4",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud04-3.svg",
      alt: "Logo 4",
    },
    {
      id: "5",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud04-4.svg",
      alt: "Logo 5",
    },
    {
      id: "6",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-4.svg",
      alt: "Logo 5",
    },
    {
      id: "7",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud04-5.svg",
      alt: "Logo 8",
    },
    {
      id: "8",
      src: "https://images.shadcnspace.com/assets/brand-logo/logo-cloud3-01.svg",
      alt: "Logo 6",
    },
  ];

  return (
    <div className="lg:py-20 sm:py-16 py-8 relative overflow-hidden">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex md:flex-row flex-col xl:gap-34 md:gap-20 gap-8 justify-between">
          <div className="md:max-w-3xs w-full flex flex-col justify-between md:gap-0 gap-4">
            <div className="md:space-y-4 space-y-3">
              <h3 className="md:text-4xl text-3xl text-foreground font-semibold">
                Trusted by leading brands
              </h3>
              <p className="text-base text-muted-foreground lg:pe-5">
                Trusted by fast-growing companies around the world
              </p>
            </div>
            <a
              href="#"
              className="underline hover:no-underline hover:text-primary underline-offset-4 text-base"
            >
              Read case studies
            </a>
          </div>

          <div className="grid grid-cols-2 md:gap-6 gap-4 md:grid-cols-3 lg:grid-cols-4 w-full">
            {brandList.map((item) => (
              <Card
                key={item.id}
                className="bg-muted flex items-center justify-center shadow-none border-0  rounded-lg text-center ring-0! px-5 py-0!"
              >
                <div className="lg:py-14 py-10">
                  <img
                    src={item.src}
                    alt={item.alt || "logo"}
                    className="dark:brightness-0 dark:invert max-h-10"
                  />
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
