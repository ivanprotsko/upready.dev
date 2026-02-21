import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { ArrowUpRight } from "lucide-react";

type NewsletterType = {
  category: string;
  count: string;
  image: string;
};

const newsletterList: NewsletterType[] = [
  {
    category: "Traveling",
    count: "08",
    image:
      "https://images.shadcnspace.com/assets/newsletter/newsletter-beach.webp",
  },
  {
    category: "Photography",
    count: "65",
    image:
      "https://images.shadcnspace.com/assets/newsletter/newsletter-human.webp",
  },
  {
    category: "Food",
    count: "30",
    image:
      "https://images.shadcnspace.com/assets/newsletter/newsletter-nature.webp",
  },
  {
    category: "Ideas",
    count: "08",
    image:
      "https://images.shadcnspace.com/assets/newsletter/newsletter-buddha.webp",
  },
  {
    category: "Vlog",
    count: "06",
    image:
      "https://images.shadcnspace.com/assets/newsletter/newsletter-animal.webp",
  },
];

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto sm:py-20 py-8">
        <div className="bg-teal-400/20 sm:py-20 py-12 rounded-3xl">
          <div className="flex flex-col gap-12">
            {/* title */}
            <h2 className="sm:text-4xl text-3xl font-medium text-center sm:max-w-max max-w-xs mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
              Subscribe to Newsletter
            </h2>
            {/* marquee */}
            <div>
              <Marquee
                pauseOnHover
                className="[--duration:25s] [--gap:0.5rem] p-0"
              >
                {newsletterList.map((item, index) => (
                  <div key={index} className="relative">
                    <img
                      src={item.image}
                      alt={item.category}
                      width={320}
                      height={200}
                      className="rounded-xl"
                    />
                    <div className="absolute bottom-2 left-2">
                      <div className="bg-white rounded-full h-10 p-1 ps-3 w-fit flex items-center gap-2">
                        <p className="text-base font-regular text-gray-950">
                          {item.category}
                        </p>
                        <span className="w-8 h-8 text-sm font-normal text-white bg-gray-950 rounded-full flex items-center justify-center">
                          {item.count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
            {/* form */}
            <div className="px-4">
              <InputGroup className="bg-background! rounded-full overflow-hidden max-w-xl mx-auto flex items-center gap-6 w-full h-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 ease-in-out fill-mode-both p-2 ps-0">
                <InputGroupInput
                  type="email"
                  placeholder="Email address"
                  className="ps-8"
                />
                <InputGroupAddon align="inline-end" className="p-0 pe-1">
                  <InputGroupButton className="relative bg-primary text-primary-foreground text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden hover:cursor-pointer">
                    <span className="relative z-10 transition-all duration-500">
                      Subscribe
                    </span>
                    <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
