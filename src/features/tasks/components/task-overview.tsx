import { PencilIcon } from "lucide-react";

import { snakeCaseToTitleCase } from "@/lib/utils";
import MemberAvatar from "@/features/members/components/member-avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Task } from "../types";
import TaskDate from "./task-date";
import OverviewProperty from "./overview-property";
import useEditTaskModal from "../hooks/use-edit-task-modal";

interface TaskOverviewProps {
  task: Task;
}

const TaskOverview = ({ task }: TaskOverviewProps) => {
  const { open } = useEditTaskModal();

  return (
    <div className="col-span-1 flex flex-col gap-y-4">
      <div className="rounded-lg bg-muted p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Overview</p>
          <Button size="sm" variant="secondary" onClick={() => open(task.$id)}>
            <PencilIcon className="mr-2 size-4" />
            Edit
          </Button>
        </div>
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Assignee">
            <MemberAvatar name={task.assignee.name} className="size-6" />
            <p className="text-sm font-medium">{task.assignee.name}</p>
          </OverviewProperty>

          <OverviewProperty label="Due Date">
            <TaskDate value={task.dueDate} className="text-sm font-medium" />
          </OverviewProperty>

          <OverviewProperty label="Status">
            <Badge variant={task.status}>
              {snakeCaseToTitleCase(task.status)}
            </Badge>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
