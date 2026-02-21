"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="overflow-hidden">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 py-8 md:py-20 mx-auto">
        <div className="bg-gray-950 dark:bg-white rounded-2xl px-4 py-8 md:px-6 md:py-9 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 xl:gap-12 xl:pr-12"
          >
            <div className="flex flex-col gap-4">
              <Badge className="h-auto bg-background text-foreground px-3 py-1 text-sm font-normal">
                Our locations
              </Badge>
              <h2 className="text-3xl md:text-4xl font-medium text-white dark:text-gray-950">
                Let's discuss about your project and take it the next level.
              </h2>
              <p className="text-base font-normal text-white/50 dark:text-gray-950/50">
                We proudly serve many local communities. Check if we're in your area.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row">
              <img
                src="https://images.shadcnspace.com/assets/backgrounds/contact-4-img-1.webp"
                alt="contact-img"
                width={250}
                height={204}
                className="rounded-lg w-full max-h-52 object-cover"
              />
              <div className="flex flex-col gap-4 text-white dark:text-gray-950 px-0 py-6 xl:p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={20} />
                  <div className="flex-1">
                    <p>202 Willow Creek Rd, Round Rock, TX 78664</p>
                    <a href="#" className="underline underline-offset-4 hover:opacity-80">
                      View on map
                    </a>
                  </div>
                </div>
                <a href="mailto:info@shadcnspace.com" className="flex items-start gap-3 hover:opacity-80">
                  <Mail size={20} />
                  <p>info@shadcnspace.com</p>
                </a>
                <a href="tel:+15122030405" className="flex items-start gap-3 hover:opacity-80">
                  <Phone size={20} />
                  <p>(512) 203-0405</p>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-background px-5 py-6 md:p-8 rounded-xl flex flex-col gap-6 max-w-md w-full"
          >
            <p className="text-2xl font-semibold text-foreground">Get a free quote</p>
            <form className="flex flex-col gap-4">
              <Input placeholder="Username *" className="dark:bg-background" type="text" id="name" />
              <Input placeholder="Phone number *" className="dark:bg-background" type="number" id="phone" />
              <Input placeholder="Email address *" className="dark:bg-background" type="email" id="email" />
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <Checkbox id="Web design services" required className="dark:bg-background" />
                  <Label htmlFor="Web design services" className="text-sm font-normal text-primary select-none">
                    Web design services
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="Web development" required className="dark:bg-background" />
                  <Label htmlFor="Web development" className="text-sm font-normal text-primary select-none">
                    Web development
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="Branding & marketing" required className="dark:bg-background" />
                  <Label htmlFor="Branding & marketing" className="text-sm font-normal text-primary select-none">
                    Branding & marketing
                  </Label>
                </div>
              </div>
              <Button type="submit" className="rounded-lg w-fit px-5 py-2.5 h-auto mt-2">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
