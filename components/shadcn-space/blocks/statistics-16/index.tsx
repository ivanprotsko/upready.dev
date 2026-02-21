import StatisticsBlock01 from "@/components/shadcn-space/blocks/statistics-16/statistics-block-01";
import StatisticsBlock02 from "@/components/shadcn-space/blocks/statistics-16/statistics-block-02";
import StatisticsBlock03 from "@/components/shadcn-space/blocks/statistics-16/statistics-block-03";
import StatisticsBlock04 from "@/components/shadcn-space/blocks/statistics-16/statistics-block-04";

export default function Statistic() {
  return (
    <div className="lg:py-20 sm:py-16 py-8">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
          <StatisticsBlock01 />
          <StatisticsBlock02 />
          <StatisticsBlock03 />
          <StatisticsBlock04 />
        </div>
      </div>
    </div>
  );
}
