import { Marquee } from "@/components/shadcn-space/animations/marquee";

type BrandList = {
  image: string;
  name: string;
};

const brandList: BrandList[] = [
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logo-cloud3-01.svg",
    name: "Brand 1",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-3.svg",
    name: "Brand 2",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logo-cloud2-dark-2.svg",
    name: "Brand 3",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logo-cloud3-02.svg",
    name: "Brand 4",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logo-cloud3-03.svg",
    name: "Brand 5",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logo-cloud3-04.svg",
    name: "Brand 6",
  },
];

export default function LogoCloudDemo() {
  return (
    <section className="lg:py-20 sm:py-16 py-8">
      <div className="border-y overflow-hidden">
        <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 ">
          <Marquee pauseOnHover className="[--duration:20s] py-0 [--gap:0px]">
            {brandList.map((brand, index) => (
              <div
                key={index}
                className="
                w-48 shrink-0
                 h-40
                  flex items-center justify-center
                  border-r
                  px-8
                 
                "
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="dark:brightness-0 dark:invert"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
