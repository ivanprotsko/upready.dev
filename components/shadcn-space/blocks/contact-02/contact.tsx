"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion, useInView } from "motion/react";

const Contact = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const socials = ["Dribble", "X/ Twitter", "LinkedIn"];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={containerRef} className="overflow-hidden">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 py-8 md:py-20 mx-auto">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-end justify-between border-b border-border pb-8 md:pb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">Contact Me</h2>
          <p className="text-foreground text-xl font-medium">(05)</p>
        </motion.div>

        <div className="pt-8 md:pt-12 pb-8 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            onSubmit={handleSubmit} 
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-muted-foreground text-sm font-normal">
                  Name*
                </Label>
                <Input id="name" name="Name" required className="rounded-lg dark:bg-background" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-muted-foreground text-sm font-normal">
                  Phone*
                </Label>
                <Input id="phone" name="Phone" required className="rounded-lg dark:bg-background" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-muted-foreground text-sm font-normal">
                Email*
              </Label>
              <Input id="email" name="Email" required className="rounded-lg dark:bg-background" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-muted-foreground text-sm font-normal">
                Message*
              </Label>
              <Textarea id="message" name="message" className="h-20 rounded-lg dark:bg-background" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            </div>
            <Button type="submit" size="lg" className="h-auto px-6 py-3.5 rounded-full w-fit text-sm font-medium hover:cursor-pointer">
              Send Now
            </Button>
          </motion.form>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-12 justify-between max-h-72 h-full"
          >
            <div className="flex flex-col gap-3 items-start md:items-end">
              {socials.map((social) => (
                <a key={social} href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-base font-normal">
                  {social}
                </a>
              ))}
            </div>
            <div className="flex justify-start md:justify-end gap-6">
                <a href="mailto:hello@shadcnspace.com" className="text-foreground/50 font-medium hover:text-foreground border-b border-foreground/50 pb-5">hello@shadcnspace.com</a>
                <a href="tel:+901 5588 2500" className="text-foreground/50 font-medium hover:text-foreground border-b border-foreground/50 pb-5">+901 5588 2500</a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
            <div className="w-full h-px bg-border"/>
            <img src={"https://images.shadcnspace.com/assets/logo/shadcn-logo.png"} width={64} height={64} alt="shadcnspace" className="dark:hidden"/>
            <img src={"https://images.shadcnspace.com/assets/logo/shadcn-white-logo.png"} width={64} height={64} alt="shadcnspace" className="hidden dark:block"/>
            <div className="w-full h-px bg-border"/>
        </motion.div>
        
        <motion.p 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-base font-normal text-foreground/50 mt-1 sm:text-left text-center"
        >
          Designed by shadcnspace
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
