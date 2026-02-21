import StatisticsBlock01 from "@/components/shadcn-space/blocks/statistics-07/statistics-block-01";
import StatisticsBlock02 from "@/components/shadcn-space/blocks/statistics-07/statistics-block-02";

export default function Statistic() {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex items-center lg:flex-row flex-col gap-6">
          <StatisticsBlock01 />
          <div className="flex flex-wrap lg:flex-nowrap items-center sm:justify-center gap-6 w-full">
            <StatisticsBlock02 />
          </div>
        </div>
      </div>
    </div>
  );
}
