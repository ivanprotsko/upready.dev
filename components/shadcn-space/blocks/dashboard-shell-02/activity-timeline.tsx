"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
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

const ActivityTimeline = () => {
    return (

        <Card className="w-full gap-5 h-full">
            <CardHeader>
                <CardTitle className="text-lg font-medium text-foreground">
                    Daily activities
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mt-4">
                    {RecentTransactionData.map((item, i) => (
                        <div key={i} className="flex gap-x-3">
                            {/* Time */}
                            <div className="xl:w-1/6 text-end">
                                <span className="text-sm font-medium text-card-foreground">
                                    {item.title}
                                </span>
                            </div>

                            {/* Dot + line */}
                            <div className="relative">
                                <div className="relative z-10 w-7 h-5 flex justify-center items-center">
                                    <div
                                        className={`h-3 w-3 bg-card rounded-full outline-2 ${item.textcolor}`}
                                    ></div>
                                </div>

                                {item.line ? (
                                    <div className="border-s border-ld h-full -mt-2 ms-3.5"></div>
                                ) : (
                                    <div className="border-0"></div>
                                )}
                            </div>

                            {/* Text Content */}
                            <div
                                className={cn(
                                    "w-1/4 grow pt-0.5",
                                    i !== RecentTransactionData.length - 1 && "pb-8",
                                )}
                            >
                                <p className="text-sm text-muted-foreground">
                                    {item.subtitle}{" "}
                                    {item.link ? (
                                        <a href={item.url} className="text-blue-500">
                                            {item.link}
                                        </a>
                                    ) : null}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

    );
};

export default ActivityTimeline;
