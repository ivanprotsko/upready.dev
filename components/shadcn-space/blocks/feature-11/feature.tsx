import { ChartPie, ShieldCheck, Smartphone } from "lucide-react";

const Feature = () => {
  return (
    <section className="dark bg-background">
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 py-10 sm:py-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
            <div>
              <img
                src="https://images.shadcnspace.com/assets/feature/feature-11-img.png"
                alt="feature-11-img"
                width={564}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-6 sm:gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-xs text-foreground">
                  Crypto landing page
                  <span className="text-teal-400"> template</span>
                </p>
                <h2 className="text-4xl font-medium text-foreground">
                  Create your crypto currency portfolio today
                </h2>
                <p className="text-base font-normal text-muted-foreground">
                  Coinbase has a variety of features that make it the best place
                  to start trading.
                </p>
              </div>
              <div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="bg-border rounded-full p-2">
                      <ChartPie size={20} className="text-teal-400" />
                    </div>
                    <p className="text-sm font-normal text-foreground">
                      Manage your portfolio
                    </p>
                  </div>
                  <div className="h-px w-full bg-gray-800 my-4" />
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="bg-border rounded-full p-2">
                      <ShieldCheck size={20} className="text-teal-400" />
                    </div>
                    <p className="text-sm font-normal text-foreground">
                      Vault protection
                    </p>
                  </div>
                  <div className="h-px w-full bg-gray-800 my-4" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-border rounded-full p-2">
                    <Smartphone size={20} className="text-teal-400" />
                  </div>
                  <p className="text-sm font-normal text-foreground">
                    Mobile apps
                  </p>
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
