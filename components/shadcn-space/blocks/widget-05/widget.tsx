"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const RecentTransactionData = [
    {
        title: "09:46",
        subtitle: "Payment received from John Doe of $385.90",
        textcolor: "outline-blue-500",
        line: true,
        link: "",
        url: "",
    },
    {
        title: "09:46",
        subtitle: "New sale recorded",
        textcolor: "outline-teal-400",
        line: true,
        link: "#ML-3467",
        url: "",
    },
    {
        title: "09:46",
        subtitle: "Payment was made of $64.95 to Michael",
        textcolor: "outline-orange-400",
        line: true,
        link: "",
        url: "",
    },
    {
        title: "09:46",
        subtitle: "New sale recorded",
        textcolor: "outline-teal-400",
        line: true,
        link: "#ML-3467",
        url: "",
    },
    {
        title: "09:46",
        subtitle: "Project meeting",
        textcolor: "outline-destructive",
        line: true,
        link: "",
        url: "",
    },
    {
        title: "09:46 ",
        subtitle: "Payment received from John Doe of $385.90",
        textcolor: "outline-amber-300",
        line: true,
        link: "",
        url: "",
    },
    {
        title: "09:46",
        subtitle: "New sale recorded",
        textcolor: "outline-sky-400",
        line: false,
        link: "#ML-3467",
        url: "",
    },
];

const Widget08 = () => {
    return (
        <div className='lg:py-20 sm:py-16 py-8 px-6'>
            <Card className="w-full max-w-sm gap-5 border-0 mx-auto">
                <CardHeader>
                    <CardTitle className="text-lg font-medium text-foreground">
                        Daily activities
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <motion.div
                        className="mt-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.12 },
                            },
                        }}
                    >
                        {RecentTransactionData.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-x-3"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.35 }}
                            >
                                {/* Time */}
                                <div className="w-1/6 text-end">
                                    <span className="text-sm font-medium text-card-foreground">
                                        {item.title}
                                    </span>
                                </div>

                                {/* Dot + line */}
                                <div className="relative">
                                    <motion.div
                                        className="relative z-10 w-7 h-5 flex justify-center items-center"
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div
                                            className={`h-3 w-3 bg-card rounded-full outline-2 ${item.textcolor}`}
                                        ></div>
                                    </motion.div>

                                    {item.line ? (
                                        <div className="border-s border-ld h-full -mt-2 ms-3.5"></div>
                                    ) : (
                                        <div className="border-0"></div>
                                    )}
                                </div>

                                {/* Text Content */}
                                <div className={cn("w-1/4 grow pt-0.5", i !== RecentTransactionData.length - 1 && "pb-5")}>
                                    <p className="text-sm text-muted-foreground">
                                        {item.subtitle}{" "}
                                        {item.link ? (
                                            <a href={item.url} className="text-blue-500">
                                                {item.link}
                                            </a>
                                        ) : null}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Widget08;
