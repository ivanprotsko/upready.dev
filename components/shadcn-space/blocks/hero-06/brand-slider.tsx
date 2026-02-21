"use client";
import { Marquee } from "@/components/shadcn-space/animations/marquee";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border px-4 sm:px-16">
          <div className="flex flex-col gap-6 xl:px-12">
            {brandList && brandList.length > 0 && (
              <div className="py-14">
                <Marquee pauseOnHover className="[--duration:20s] p-0">
                  {brandList.map((brand, index) => (
                    <div key={index}>
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-36 h-8 mr-6 lg:mr-14 dark:hidden"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
