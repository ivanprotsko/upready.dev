import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, Check, Flame } from "lucide-react";
import { Marquee } from "@/components/shadcn-space/animations/marquee";

const Pricing = () => {
  type PricingPlan = {
    plan_name: string;
    plan_tag?: string;
    plan_descp: string;
    plan_price: number;
    plan_feature: string[];
  };

  const pricingData: PricingPlan[] = [
    {
      plan_name: "Launch",
      plan_descp:
        "Ideal for startups and small businesses taking their first steps online.",
      plan_price: 699,
      plan_feature: [
        "Access to all core Shadcn UI blocks",
        "Copy-paste ready React Tailwind code",
        "Regular library updates",
        "Commercial use license",
        "Community support & documentation",
      ],
    },
    {
      plan_name: "Scale",
      plan_tag: "Most popular",
      plan_descp:
        "Perfect for growing brands needing more customization and flexibility.",
      plan_price: 1699,
      plan_feature: [
        "Everything in Launch Plan",
        "Premium templates & more sections",
        "Early access to new components",
        "Private Discord & priority support",
        "Monthly strategy & growth sessions",
      ],
    },
    {
      plan_name: "Elevate",
      plan_descp:
        "Best suited for established businesses wanting a fully tailored experience.",
      plan_price: 3499,
      plan_feature: [
        "Everything in Scale Plan",
        "Unlimited team seats",
        "Dedicated UI & integration support",
        "Custom component requests",
        "One-on-one implementation",
      ],
    },
  ];

  type BrandList = {
    image: string;
    lightimg: string;
    name: string;
  };

  const brandList: BrandList[] = [
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg",
      name: "Brand 1",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-2.svg",
      name: "Brand 2",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-3.svg",
      name: "Brand 3",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg",
      name: "Brand 4",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-5.svg",
      name: "Brand 5",
    },
  ];

  return (
    <section className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 xl:px-16 py-12 flex flex-col gap-8 md:gap-16 items-center justify-center overflow-hidden">
        <div className="flex flex-col gap-4 text-center items-center justify-center max-w-3xl">
          <Badge className="bg-background border border-border text-foreground text-sm font-normal px-3 py-1 h-auto">
            Pricing plan
          </Badge>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Affordable pricing
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-normal">
            A glimpse into our creativity—exploring innovative designs,
            successful collaborations, and transformative digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {pricingData.map((item, index) => {
            return (
              <Card
                key={index}
                className="bg-background shadow-xl gap-0 ring-0 rounded-3xl py-0"
              >
                <CardHeader className="relative overflow-hidden p-6 pb-8 m-1 rounded-t-3xl">
                  {item.plan_tag === "Most popular" && (
                    <>
                      <div className="bg-blue-500 w-2xs h-20 blur-[80px] absolute top-0 left-1/2" />
                      <div className="bg-amber-400 w-1/2 h-9 blur-[100px] absolute bottom-0 left-0 " />
                      <div className="bg-amber-400 w-1/2 h-9 blur-[100px] absolute bottom-0 right-0 " />
                    </>
                  )}
                  <div className="relative flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">
                          {item.plan_name}
                        </h3>
                        {item?.plan_tag && (
                          <Badge className="flex items-center gap-1.5  text-gray-200 px-3 py-1 rounded-full bg-blue-500 h-auto [&>svg]:size-4!">
                            <Flame size={16} />
                            <span className="text-sm font-normal">
                              {item.plan_tag}
                            </span>
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-semibold">
                          ${item.plan_price}
                        </span>
                        <span>/month</span>
                      </div>
                      <p className="text-base font-normal text-muted-foreground">
                        {item.plan_descp}
                      </p>
                    </div>
                    <Button
                      className={`relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-full overflow-hidden bg-foreground dark:bg-bg-gray-200 text-gray-200 dark:text-gray-950 hover:cursor-pointer`}
                    >
                      <span className={`relative z-10 transition-all duration-500 text-gray-200 dark:text-gray-950 group-hover:dark:text-gray-950`}>
                        Subscribe now
                      </span>
                      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </div>
                    </Button>
                  </div>
                </CardHeader>
                <div className="h-px w-full bg-border" />
                <CardContent className="flex flex-col gap-3 p-6 pt-8">
                  <p className="text-base font-normal text-muted-foreground">
                    What's Included:
                  </p>
                  {item.plan_feature.map((feature, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="p-1 rounded-full bg-foreground text-white dark:text-gray-950">
                          <Check size={8} />
                        </div>
                        <p className="text-base">{feature}</p>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-base font-normal">
            More than 487 trusted partners & clients
          </p>
          <Marquee pauseOnHover className="[--duration:20s] p-0 py-4">
            {brandList.map((brand, index) => (
              <div key={index}>
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-36 h-8 mr-6 lg:mr-20 dark:hidden"
                />
                <img
                  src={brand.lightimg}
                  alt={brand.name}
                  className="hidden dark:block w-36 h-8 mr-12 lg:mr-20"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
