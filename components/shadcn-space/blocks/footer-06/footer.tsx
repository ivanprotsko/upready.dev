"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Dribbble, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const socialLinks = [
  { icon: Dribbble, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // subtle cubic-bezier for premium feel
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border px-5 md:px-8 py-8 overflow-hidden" />
      </div>
      <div className="border-y border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
          <div className="border-x border-border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div 
                variants={itemVariants}
                className="flex flex-col gap-12 p-6 lg:p-12 border-b md:border-b-0 md:border-r border-border"
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground">
                  Ready to create something extraordinary? Let’s do it.
                </h2>
                <p className="text-base font-normal text-muted-foreground">
                  Let's create together
                </p>
              </motion.div>
              <div className="flex flex-col justify-between">
                <motion.div variants={itemVariants} className="p-6 lg:p-12">
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="relative flex items-center">
                        <img
                          src="https://images.shadcnspace.com/assets/profiles/hero-4-img.png"
                          alt="user-img"
                          width={80}
                          height={80}
                          className="rounded-full relative z-10"
                        />
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                              },
                            },
                          }}
                          className="flex items-center gap-1 ml-2 relative z-0"
                        >
                          <motion.div
                            variants={{
                              hidden: { x: 40, opacity: 0 },
                              visible: { x: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-10 h-20 overflow-hidden shrink-0 -rotate-180"
                          >
                            <div className="w-20 h-20 rounded-full bg-orange-400" />
                          </motion.div>
                          <motion.div
                            variants={{
                              hidden: { x: 60, opacity: 0 },
                              visible: { x: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-7 h-20 overflow-hidden shrink-0 -rotate-180"
                          >
                            <div className="w-20 h-20 rounded-full bg-orange-400" />
                          </motion.div>
                          <motion.div
                            variants={{
                              hidden: { x: 80, opacity: 0 },
                              visible: { x: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-3.5 h-20 overflow-hidden shrink-0 -rotate-180"
                          >
                            <div className="w-20 h-20 rounded-full bg-orange-400" />
                          </motion.div>
                        </motion.div>
                      </div>
                      <div>
                        <p className="text-xl font-medium text-foreground">
                          Bianca Doe
                        </p>
                        <p className="text-lg font-normal text-muted-foreground">
                          Front-end Developer
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 lg:gap-3">
                      <p className="text-base text-muted-foreground font-normal">
                        Contact me
                      </p>
                      <a href="mailto:info@shadcnspace.com" className="text-2xl lg:text-3xl font-medium text-foreground hover:text-foreground/80">
                        info@shadcnspace.com
                      </a>
                    </div>
                    <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden hover:cursor-pointer">
                      <span className="relative z-10 transition-all duration-500">
                        Book a Call
                      </span>
                      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </div>
                    </Button>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="grid grid-cols-4 min-h-20 border-t border-border">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} className={cn(
                        "py-8 lg:py-12 flex items-center justify-center hover:bg-muted/50 transition-colors",
                        index !== socialLinks.length - 1 && "border-r border-border"
                      )}>
                      <link.icon />
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
            <motion.div 
              variants={itemVariants}
              className="border-t border-border flex flex-col md:flex-row items-center justify-between gap-1 px-6 lg:px-12 py-8"
            >
                <a href="#"><Logo/></a>
                <p className="text-sm font-normal text-muted-foreground">© 2026 shadcnspace. All Rights Reserved.</p>
                <div className="flex items-center gap-1.5 text-sm font-normal text-muted-foreground">
                    <p>Designed by</p>
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={"https://images.shadcnspace.com/assets/profiles/hero-4-img.png"} />
                        <AvatarFallback>{"SS"}</AvatarFallback>
                    </Avatar>
                    <p>Shadcnspace</p>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="border-x border-border px-5 md:px-8 py-8 overflow-hidden" />
      </div>
    </motion.footer>
  );
};

export default Footer;
