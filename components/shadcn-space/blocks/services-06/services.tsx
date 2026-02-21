"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      key: "accounting",
      label: "Accounting",
      image:
        "https://images.shadcnspace.com/assets/services/service06-img1.webp",
      caption: "01 - Accounting",
      title: "Accounting & Book keeping services for growth",
      description:
        "With deep industry expertise and a commitment to accuracy, we provide reliable accounting services that give businesses complete financial clarity.",
      departmentsLeft: [
        "General Ledger Management",
        "Accounts Payable & Receivable",
        "Revenue",
      ],
      departmentsRight: [
        "Bank & Credit Card",
        "Budget Preparation",
        "Expense Tracking",
      ],
    },
    {
      key: "planning",
      label: "Planning",
      image:
        "https://images.shadcnspace.com/assets/services/service06-img2.webp",
      caption: "02 - Planning",
      title: "Strategic financial planning",
      description:
        "Plan confidently with tailored strategies designed to support long-term financial stability and growth.",
      departmentsLeft: ["Forecasting", "Cash Flow Planning"],
      departmentsRight: ["Risk Analysis", "Scenario Modeling"],
    },
    {
      key: "consulting",
      label: "Consulting",
      image:
        "https://images.shadcnspace.com/assets/services/service06-img3.webp",
      caption: "03 - Consulting",
      title: "Business consulting services",
      description:
        "Expert guidance to help organizations optimize operations and scale effectively.",
      departmentsLeft: ["Process Optimization", "Growth Strategy"],
      departmentsRight: ["Cost Reduction", "Performance Review"],
    },
    {
      key: "tax",
      label: "Tax Advisory",
      image:
        "https://images.shadcnspace.com/assets/services/service06-img1.webp",
      caption: "04 - Tax Advisory",
      title: "Smart tax advisory services",
      description:
        "Navigate complex tax regulations with confidence and clarity.",
      departmentsLeft: ["Tax Planning", "Compliance"],
      departmentsRight: ["Audit Support", "Advisory Services"],
    },
  ];

  return (
    <section ref={sectionRef}>
      <div className="md:py-20 py-10 flex flex-col md:gap-16 gap-8">
        <div className="mx-auto max-w-7xl w-full md:px-16 px-4 flex flex-col md:gap-10 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col justify-center text-center gap-4 max-w-3xl mx-auto"
          >
            <p className="uppercase text-sm font-medium text-foreground">
              services
            </p>
            <h2 className="text-3xl md:text-5xl font-medium text-foreground">
              Exceptional financial services with assurance of satisfaction
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Tabs
              defaultValue="accounting"
              className="w-full flex flex-col gap-10 overflow-hidden"  
            >
              {/* Tabs header */}
             
              <TabsList className="bg-transparent p-0 border-b  rounded-none mx-auto shadow-none">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.key}
                    value={service.key}
                    className=" 
    rounded-none
    px-4 pb-5
    text-base font-medium
    text-muted-foreground
    dark:bg-transparent!             
    border-b border-transparent
    shadow-none!
    dark:border-x-0!
    dark:border-t-0!
    focus-visible:ring-0
dark:data-[state=active]:bg-transparent
    data-[state=active]:text-foreground
group-data-[variant=default]/tabs-list:data-active:border-b
group-data-[variant=default]/tabs-list:data-active:border-b-foreground
dark:group-data-[variant=default]/tabs-list:data-active:border-b-white!
    data-[state=active]:shadow-none!
    hover:cursor-pointer
  "
                  >
                    {service.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              


              {/* Tabs content */}
              {services.map((service) => (
                <TabsContent key={service.key} value={service.key}>
                  <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-12 items-center md:rounded-2xl overflow-hidden">
                    {/* Image */}
                    <div className="overflow-hidden md:max-w-xl w-full md:rounded-none rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-fit object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-10 w-full">
                      <div className="space-y-6 lg:max-w-md w-full">
                        <div className="space-y-4">
                          <p className="text-sm text-foreground font-medium">
                            {service.caption}
                          </p>

                          <h2 className="md:text-3xl text-2xl font-medium">
                            {service.title}
                          </h2>

                          <p className="text-muted-foreground text-base">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <p className="text-sm text-foreground">
                            The Departments
                          </p>
                          <div className="grid sm:grid-cols-2 md:gap-6 gap-2">
                            <ul className="space-y-2 text-sm">
                              {service.departmentsLeft.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-2.5 text-sm text-foreground items-center"
                                >
                                  <span className="h-1 w-1 rounded-full bg-primary/50"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <ul className="space-y-2 text-sm">
                              {service.departmentsRight.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-2.5 text-sm text-foreground items-center"
                                >
                                  <span className="h-1 w-1 rounded-full bg-primary/50"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button className="p-5 rounded-md hover:cursor-pointer">Learn More</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
