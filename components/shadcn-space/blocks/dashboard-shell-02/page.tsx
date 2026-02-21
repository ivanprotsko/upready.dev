import AppSidebar from "@/components/shadcn-space/blocks/dashboard-shell-02/app-sidebar"


import EcommerceActionsCards from "@/components/shadcn-space/blocks/dashboard-shell-02/ecommerce-action"
import SalesReportChart from "@/components/shadcn-space/blocks/dashboard-shell-02/sales-report-chart"
import WeeklySales from "@/components/shadcn-space/blocks/dashboard-shell-02/weekly-sales"
import CourseWidget from "@/components/shadcn-space/blocks/dashboard-shell-02/course-widget"
import CampaignPerformance from "@/components/shadcn-space/blocks/dashboard-shell-02/campaign-performance"
import SellingProducts from "@/components/shadcn-space/blocks/dashboard-shell-02/selling-products"
import ActivityTimeline from "@/components/shadcn-space/blocks/dashboard-shell-02/activity-timeline"
import TopProjectsTable from "@/components/shadcn-space/blocks/dashboard-shell-02/top-projects-table"
export default function Page() {
    return (
        <AppSidebar>
            <div className="grid grid-cols-12 gap-6 p-6 max-w-7xl mx-auto">
                <div className="col-span-12">
                    <EcommerceActionsCards />
                </div>
                <div className="xl:col-span-8 col-span-12" >
                    <SalesReportChart />
                </div>
                <div className="xl:col-span-4 md:col-span-6 col-span-12">
                    <WeeklySales />
                </div>
                <div className="xl:col-span-4 md:col-span-6  col-span-12">
                    <CourseWidget />
                </div>
                <div className="xl:col-span-4  md:col-span-6 col-span-12">
                    <CampaignPerformance />
                </div>
                <div className="xl:col-span-4 md:col-span-6 col-span-12">
                    <SellingProducts />
                </div>
                <div className="xl:col-span-8 col-span-12">
                    <TopProjectsTable />
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <ActivityTimeline />
                </div>



            </div>
        </AppSidebar>
    )
}