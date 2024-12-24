"use client";

import { useCallback } from "react";
import { useQueryState } from "nuqs";
import { Loader, PlusIcon } from "lucide-react";

import useProjectId from "@/features/projects/hooks/use-project-id";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TaskStatus } from "../types";
import useGetTasks from "../api/use-get-tasks";
import useTaskFilters from "../hooks/use-task-filters";
import useBulkUpdateTask from "../api/use-bulk-update-task";
import useCreateTaskModal from "../hooks/use-create-task-modal";
import { Separator } from "@/components/ui/separator";
import DataFilters from "./data-filters";

interface TaskViewSwticherProps {
  hideProjectFilter?: boolean;
}

export const TaskViewSwticher = ({
  hideProjectFilter,
}: TaskViewSwticherProps) => {
  const [{ assigneeId, dueDate, projectId, search, status }] = useTaskFilters();
  const [view, setView] = useQueryState("task-view", { defaultValue: "table" });

  const workspaceId = useWorkspaceId();
  const paramProjectId = useProjectId();
  const { open } = useCreateTaskModal();
  const { data: tasks, isLoading: isLoadingTasks } = useGetTasks({
    workspaceId,
    assigneeId,
    dueDate,
    projectId: paramProjectId || projectId,
    search,
    status,
  });
  const { mutate: bulkUpdate } = useBulkUpdateTask();

  const onKanbanChange = useCallback(
    (tasks: { $id: string; status: TaskStatus; position: number }[]) => {
      bulkUpdate({ json: { tasks } });
    },
    [bulkUpdate],
  );

  return (
    <Tabs
      className="w-full flex-1 rounded-lg border"
      defaultValue={view}
      onValueChange={setView}
    >
      <div className="flex h-full flex-col overflow-auto p-4">
        <div className="flex flex-col items-center justify-between gap-y-2 lg:flex-row">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger className="w-full lg:w-auto" value="table">
              Table
            </TabsTrigger>
            <TabsTrigger className="w-full lg:w-auto" value="kanban">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="w-full lg:w-auto" value="calendar">
              Calendar
            </TabsTrigger>
          </TabsList>
          <Button
            size="sm"
            className="w-full lg:w-auto"
            onClick={() => open(undefined)}
          >
            <PlusIcon className="mr-2 size-4" />
            New
          </Button>
        </div>

        <Separator className="my-4" />
        <DataFilters hideProjectFilter={hideProjectFilter} />
        <Separator className="my-4" />

        {isLoadingTasks ? (
          <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-lg border">
            <Loader className="size-5 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            <TabsContent value="table" className="mt-0">
              {/* <DataTable columns={columns} data={tasks?.documents ?? []} /> */}
            </TabsContent>

            <TabsContent value="kanban" className="mt-0">
              {/* <DataKanban
                data={tasks?.documents ?? []}
                onChange={onKanbanChange}
              /> */}
            </TabsContent>

            <TabsContent value="calendar" className="mt-0 h-full pb-4">
              {/* <DataCalendar data={tasks?.documents ?? []} /> */}
            </TabsContent>
          </>
        )}
      </div>
    </Tabs>
  );
};
