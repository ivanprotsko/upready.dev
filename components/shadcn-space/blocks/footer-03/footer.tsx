import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubFooter from "@/components/shadcn-space/blocks/footer-03/subfooter";
import { upreadyData } from "./data.upready";

const Footer = () => {
  return (
    <footer className="lg:pt-20 sm:pt-16 pt-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto ">
        <div className="flex flex-col gap-6 sm:gap-12 md:mb-12 mb-8">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <Separator orientation="horizontal" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 lg:gap-x-8 gap-y-10">
            <div className="col-span-full lg:col-span-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium text-foreground">
                  {upreadyData.newsletter_heading}
                </h3>
                <p className="text-base text-muted-foreground">
                  {upreadyData.newsletter_description}
                </p>
                <form className="flex items-center gap-3 pt-4">
                  <Input
                    type="email"
                    placeholder={upreadyData.email_placeholder}
                    className="py-2 px-4 rounded-full text-sm"
                  />
                  <Button
                    type="submit"
                    className="rounded-full py-2 px-4 h-auto text-sm font-medium"
                  >
                    {upreadyData.subscribe_button}
                    <ArrowRight width={16} height={16} />
                  </Button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-3 lg:block hidden" />
            <div className="lg:col-span-4 col-span-12 grid grid-cols-2 gap-6 gap-y-10">
              {upreadyData.linkColumns.map((column, index) => (
                <div key={index}>
                  <ul className="flex flex-col gap-3">
                    {column.links.map(({ title, href }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className="text-base font-normal text-foreground hover:opacity-80 duration-200"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-6">
            <p className="text-base font-normal text-muted-foreground">
              {upreadyData.copyright}
            </p>
            <div className="flex sm:items-center items-start sm:flex-row flex-col gap-3">
              <Link
                href={upreadyData.terms_href}
                className="text-muted-foreground text-base font-normal hover:text-primary duration-200"
              >
                {upreadyData.terms_link}
              </Link>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50 sm:block hidden" />
              <Link
                href={upreadyData.privacy_href}
                className="text-muted-foreground text-base font-normal hover:text-primary duration-200"
              >
                {upreadyData.privacy_link}
              </Link>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50 sm:block hidden" />
              <Link
                href={upreadyData.sitemap_href}
                className="text-muted-foreground text-base font-normal hover:text-primary duration-200"
              >
                {upreadyData.sitemap_link}
              </Link>
            </div>
          </div>
        </div>
        <SubFooter />
      </div>
    </footer>
  );
};

export default Footer;
