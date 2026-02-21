import AppSidebar from "@/components/shadcn-space/blocks/dashboard-shell-04/app-sidebar"
import Congratulations from "@/components/shadcn-space/blocks/dashboard-shell-04/congratulations"
import Customer from "@/components/shadcn-space/blocks/dashboard-shell-04/customer-widget"
import Products from "@/components/shadcn-space/blocks/dashboard-shell-04/products"
import LatestDeal from "@/components/shadcn-space/blocks/dashboard-shell-04/latest-deal"
import Payments from "@/components/shadcn-space/blocks/dashboard-shell-04/payments"
import TotalSales from "@/components/shadcn-space/blocks/dashboard-shell-04/total-sales"
import ProductTable from "@/components/shadcn-space/blocks/dashboard-shell-04/product-table"
import AnnualProfit from "@/components/shadcn-space/blocks/dashboard-shell-04/annual-profit"
import LatestReview from "@/components/shadcn-space/blocks/dashboard-shell-04/latest-review"




export default function Page() {
    return (
        <AppSidebar>
            <div className="grid grid-cols-12 gap-6 p-6 max-w-7xl mx-auto">
                <div className="xl:col-span-6  col-span-12">
                    <Congratulations />
                </div>
                <div className="xl:col-span-3 md:col-span-6 col-span-12">
                    <Customer />
                </div>
                <div className="xl:col-span-3 md:col-span-6 col-span-12">
                    <Products />
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <TotalSales />
                </div>
                <div className="xl:col-span-3 md:col-span-6 col-span-12">
                    <LatestDeal />
                </div>
                <div className="xl:col-span-3 md:col-span-6 col-span-12">
                    <Payments />
                </div>
                <div className="xl:col-span-8 col-span-12">
                    <ProductTable />
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <AnnualProfit />
                </div>
                <div className=" col-span-12">
                    <LatestReview />
                </div>

            </div>
        </AppSidebar>
    )
}

