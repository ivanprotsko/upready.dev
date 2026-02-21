"use client";

import { useState } from "react";
import SimpleBar from "simplebar-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Blocks, Calculator, FolderClosed, TabletSmartphone } from "lucide-react";

const TableComp = () => {
    const dropdownItems = ["Sep 2024", "Oct 2024", "Nov 2024"];
    const [activeTab, setActiveTab] = useState("App");

    const ProductTableData = [
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-1.jpg",
            project: "Minecraf App",
            name: "Jason Roy",
            progrsss: "73.2%",
            variant: "lightWarning",
            statustext: "Medium",
            money: "$3.5K",
            statuscolor: 'bg-teal-400/10 text-teal-400',
        },
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-2.jpg",
            project: "Web App Project",
            name: "Mathew Flintoff",
            progrsss: "73.2%",
            variant: "lightInfo",
            statustext: "Very High",
            money: "$24.5K",
            statuscolor: 'bg-red-500/10 text-red-500',
        },
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-3.jpg",
            project: "Modernize Dashboard",
            name: "Anil Kumar",
            progrsss: "73.2%",
            variant: "lightSuccess",
            statustext: "Low",
            money: "$12.8K",
            statuscolor: 'bg-teal-400/10 text-teal-400',
        },
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-4.jpg",
            project: "Dashboard Co",
            name: "George Cruize",
            progrsss: "73.2%",
            variant: "lightError",
            statustext: "High",
            money: "$2.4K",
            statuscolor: 'bg-amber-300/10 text-amber-300',
        },
    ];

    const ProductTableData2 = [
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-2.jpg",
            project: "Web App Project",
            name: "Mathew Flintoff",
            progrsss: "73.2%",
            variant: "lightError",
            statustext: "Very High",
            money: "$24.5K",
            statuscolor: 'bg-sky-400/10 text-sky-400',
        },
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-3.jpg",
            project: "Modernize Dashboard",
            name: "Anil Kumar",
            progrsss: "73.2%",
            variant: "lightSuccess",
            statustext: "Low",
            money: "$12.8K",
            statuscolor: 'bg-amber-300/10 text-amber-300',
        },
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-1.jpg",
            project: "Minecraf App",
            name: "Jason Roy",
            progrsss: "73.2%",
            variant: "lightWarning",
            statustext: "Medium",
            money: "$3.5K",
            statuscolor: 'bg-teal-400/10 text-teal-400',
        },
        {
            img: "https://images.shadcnspace.com/assets/products/dash-prd-4.jpg",
            project: "Dashboard Co",
            name: "George Cruize",
            progrsss: "73.2%",
            variant: "lightError",
            statustext: "High",
            money: "$2.4K",
            statuscolor: 'bg-red-500/10 text-red-500',
        },
    ];

    const renderTable = (data: any[]) => (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader className="border-b border-bordergray dark:border-darkborder">
                    <TableRow className="hover:bg-transparent!">
                        <TableHead className="py-2 px-3 ps-0 text-ld font-normal">
                            Assigned
                        </TableHead>
                        <TableHead className="text-ld font-normal">Progress</TableHead>
                        <TableHead className="text-ld font-normal">Priority</TableHead>
                        <TableHead className="text-ld font-normal">Budget</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-bordergray dark:divide-darkborder">
                    {data.map((item, index) => (
                        <TableRow key={index} className="hover:bg-transparent!">
                            <TableCell className="whitespace-nowrap ps-0">
                                <div className="flex gap-3 items-center">
                                    <img
                                        src={item.img}
                                        alt="icon"
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-lg"
                                    />
                                    <div className="truncate line-clamp-2 sm:text-wrap max-w-56">
                                        <h6 className="text-base! font-medium!">{item.project}</h6>
                                        <p className="text-sm font-medium text-muted-foreground">{item.name}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                                <p className="text-sm">{item.progrsss}</p>
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                                <Badge
                                    className={`text-xs font-medium ${item.statuscolor}`}>
                                    {item.statustext}
                                </Badge>
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                                <p>{item.money}</p>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

    return (
        <div className="lg:py-20 sm:py-16 py-8 max-w-4xl mx-auto">
            <Card className="p-7 pb-3 max-w-3xl mx-auto w-full border-0">
                <div className="sm:flex justify-between align-baseline">
                    <div>
                        <h5 className="text-lg font-semibold text-foreground">Revenue by Product</h5>
                    </div>
                    <Select defaultValue={dropdownItems[0]}>
                        <SelectTrigger className="w-fit sm:my-0 my-4 cursor-pointer">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {dropdownItems.map((item, index) => (
                                <SelectItem key={index} value={item} className="hover:bg-accent text-accent-foreground hover:dark:bg-accent/50 focus-visible:shadow-none!">
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Tabs */}
                <div className="overflow-x-auto">
                    <SimpleBar>
                        <div className="flex gap-4">
                            {["App", "Mobile", "SasS", "Others"].map((tab) => {
                                const TabIcon = tab === "App"
                                    ? Blocks
                                    : tab === "Mobile"
                                        ? TabletSmartphone
                                        : tab === "SasS"
                                            ? Calculator
                                            : FolderClosed;
                                return (
                                    <div
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`py-3 px-6 rounded-sm cursor-pointer text-dark text-sm font-semibold text-center flex gap-2 items-center dark:bg-dark hover:bg-lightprimary dark:hover:bg-lightprimary ${activeTab === tab
                                            ? "text-white bg-blue-500 hover:bg-blue-500"
                                            : "bg-muted dark:text-white hover:bg-blue-500/10 dark:hover:blue-500/10 hover:text-blue-500 dark:hover:text-blue-500"
                                            }`}
                                    >
                                        <TabIcon
                                            className={`${activeTab === tab ? "opacity-100" : "opacity-50"}`}
                                            size={16}
                                        />
                                        {tab}
                                    </div>
                                );
                            })}
                        </div>
                    </SimpleBar>
                </div>

                {/* Tab Content */}
                {activeTab === "App" && renderTable(ProductTableData)}
                {activeTab === "Mobile" && renderTable(ProductTableData2)}
                {activeTab === "SasS" && renderTable(ProductTableData)}
                {activeTab === "Others" && renderTable(ProductTableData2)}
            </Card>
        </div>
    );
};

export default TableComp;
