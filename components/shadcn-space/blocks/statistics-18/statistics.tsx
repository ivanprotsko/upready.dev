"use client";
import { Button } from "@/components/ui/button";
import SimpleBar from "simplebar-react";
import { Card } from "@/components/ui/card";
import "./style.css";
import { BadgeDollarSign, Banknote, CircleDollarSign, List, Repeat2, Wallet } from "lucide-react";

const ColorboxData = [
    {
        bg: "primary-gradient",
        icon: CircleDollarSign,
        color: "bg-blue-500",
        title: "Total Orders",
        price: "16,689",
        link: "#",
        btnTxt: "View Orders"
    },
    {
        bg: "orange-gradient",
        icon: List,
        color: "bg-orange-400",
        title: "Return Item",
        price: "148",
        link: "#",
        btnTxt: "Product Detail"
    },
    {
        bg: "teal-gradient",
        icon: Wallet,
        color: "bg-teal-400",
        title: "Annual Budget",
        price: "$156K",
        link: "#",
        btnTxt: "Budget Overview"
    },
    {
        bg: "red-gradient",
        icon: Repeat2,
        color: "bg-red-500",
        title: "Cancel Orders",
        price: "64",
        link: "#",
        btnTxt: "View All"
    },
    {
        bg: "warning-gradient",
        icon: BadgeDollarSign,
        color: "bg-amber-300",
        title: "Total Income ",
        price: "$36,715",
        link: "#",
        btnTxt: "View Balance"
    },
    {
        bg: "sky-gradient",
        icon: Banknote,
        color: "bg-sky-400",
        title: "Expense",
        price: "$36,715",
        link: "#",
        btnTxt: "View Details"
    },
];

const Statistics = () => {
  return (
    <div className='lg:py-20 sm:py-16 py-8 px-6'>
            <Card className="p-7 w-full gap-5 border-0 ring-0 shadow-none">
                <div className="overflow-x-auto">
                    <SimpleBar>
                        <div className="flex gap-6">
                            {ColorboxData.map((item, index) => (
                                <div className="lg:basis-1/5 md:basis-1/4 basis-full lg:shrink shrink-0" key={index}>
                                    <div className={`text-center p-6 rounded-xl ${item.bg}`}>
                                        <span className={`h-12 w-12 mx-auto flex items-center justify-center rounded-lg ${item.color}`}>
                                            <item.icon
                                                className="text-white"
                                                height={24}
                                            />
                                        </span>
                                        <p className="text-sm font-normal text-foreground mt-4 mb-2">
                                            {item.title}
                                        </p>
                                        <h4 className="text-xl font-medium text-foreground">{item.price}</h4>
                                        <Button
                                            size="sm"
                                            className="w-fit mx-auto mt-4 bg-white hover:bg-neutral-800 text-ld font-semibold hover:text-white shadow-xs py-1.5 px-3 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                        >
                                            <a href={item.link}>{item.btnTxt}</a>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SimpleBar>
                </div>
            </Card>
        </div>
  )
}

export default Statistics