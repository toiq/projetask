import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import AnalyticsCard from "./analytics-card";
import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { Separator } from "./ui/separator";

const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="w-full shrink-0 whitespace-nowrap rounded-lg border">
      <ScrollBar orientation="horizontal" />
      <div className="flex w-full flex-row">
        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Total Tasks"
            value={data.taskCount}
            variant={data.taskDifference > 0 ? "up" : "down"}
            increaseValue={data.taskDifference}
          />
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Assigned Tasks"
            value={data.assignedTaskCount}
            variant={data.assignedTaskCount > 0 ? "up" : "down"}
            increaseValue={data.assignedTaskCount}
          />
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Completed Tasks"
            value={data.completedTaskCount}
            variant={data.completedTaskCount > 0 ? "up" : "down"}
            increaseValue={data.completedTaskCount}
          />
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Incomplete Tasks"
            value={data.inCompleteTaskCount}
            variant={data.inCompleteTaskCount > 0 ? "up" : "down"}
            increaseValue={data.inCompleteTaskCount}
          />
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Overdue Tasks"
            value={data.overDueTaskCount}
            variant={data.overDueTaskCount > 0 ? "up" : "down"}
            increaseValue={data.overDueTaskCount}
          />
          <Separator orientation="vertical" />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Analytics;
