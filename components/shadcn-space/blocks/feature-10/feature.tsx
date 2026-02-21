import { Command, Funnel, Presentation, Rocket } from "lucide-react";
import "./style.css";

const Feature = () => {
  return (
    <section className="dark bg-background">
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 py-10 sm:py-16 overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-12 lg:gap-16">
            <div className="flex flex-col items-center justify-center text-center gap-4 max-w-5xl mx-auto">
              <p className="text-foreground">
                We deliver{" "}
                <span className="text-teal-400">best solution.</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground">
                One application with multiple options to give you freedom of
                buying & selling
              </h2>
            </div>

            <div className="relative w-full flex flex-col items-center">
              <div className="relative mb-12 lg:mb-0">
                <img
                  src="https://images.shadcnspace.com/assets/feature/feature-10-img-1.png"
                  alt="feaure-img"
                  width={690}
                  height={707}
                  className="w-full h-auto max-w-2xl relative z-10"
                />
                <div className="feature-10-micro" />
              </div>

              <div className="grid grid-cols-2 lg:block gap-x-3.5 gap-y-8 sm:gap-10 lg:gap-0 lg:absolute lg:inset-0 w-full">
                <div className="lg:absolute lg:top-40 lg:left-0 xl:left-16 flex items-start gap-4 lg:flex-row-reverse w-full lg:w-fit">
                  <div className="bg-teal-400/10 rounded-full p-1.5 sm:p-3 w-fit shrink-0">
                    <Command className="text-teal-400 size-3.5 sm:size-6" />
                  </div>
                  <div className="flex flex-col items-start lg:items-end text-start lg:text-end gap-0.5">
                    <p className="text-xs sm:text-xl font-medium text-foreground">
                      Planning
                    </p>
                    <p className="text-xs sm:text-base font-normal text-muted-foreground lg:max-w-52">
                      Map the crypto projects scope with framer template
                    </p>
                  </div>
                </div>

                <div className="lg:absolute lg:top-32 lg:right-0 xl:right-10 flex items-start gap-4 w-full lg:w-fit">
                  <div className="bg-teal-400/10 rounded-full p-1.5 sm:p-3 w-fit shrink-0">
                    <Funnel className="text-teal-400 size-3.5 sm:size-6" />
                  </div>
                  <div className="flex flex-col items-start text-start gap-0.5">
                    <p className="text-xs sm:text-xl font-medium text-foreground">
                      Refinement
                    </p>
                    <p className="text-xs sm:text-base font-normal text-muted-foreground lg:max-w-52">
                      Refine & improve your crypto landing page
                    </p>
                  </div>
                </div>

                <div className="lg:absolute lg:bottom-40 lg:left-0 xl:left-20 flex items-start gap-4 lg:flex-row-reverse w-full lg:w-fit">
                  <div className="bg-teal-400/10 rounded-full p-1.5 sm:p-3 w-fit shrink-0">
                    <Presentation className="text-teal-400 size-3.5 sm:size-6" />
                  </div>
                  <div className="flex flex-col items-start lg:items-end text-start lg:text-end gap-0.5">
                    <p className="text-xs sm:text-xl font-medium text-foreground">
                      Prototype
                    </p>
                    <p className="text-xs sm:text-base font-normal text-muted-foreground lg:max-w-52">
                      Build crypto website test for your product
                    </p>
                  </div>
                </div>

                <div className="lg:absolute lg:bottom-32 lg:right-4 xl:right-10 flex items-start gap-4 w-full lg:w-fit">
                  <div className="bg-teal-400/10 rounded-full p-1.5 sm:p-3 w-fit shrink-0">
                    <Rocket className="text-teal-400 size-3.5 sm:size-6" />
                  </div>
                  <div className="flex flex-col items-start text-start gap-0.5">
                    <p className="text-xs sm:text-xl font-medium text-foreground">
                      Scale and support
                    </p>
                    <p className="text-xs sm:text-base font-normal text-muted-foreground lg:max-w-52">
                      Deploy product live and ensure expert support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
