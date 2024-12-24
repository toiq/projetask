import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRightIcon, TrashIcon } from "lucide-react";

import { Project } from "@/features/projects/types";
import ProjectAvatar from "@/features/projects/components/project-avatar";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { Button } from "@/components/ui/button";
import { useConfirm } from "@/hooks/use-confirm";

import { Task } from "../types";
import useDeleteTask from "../api/use-delete-task";

interface TaskBreadcrumbsProps {
  project: Project;
  task: Task;
}

const TaskBreadcrumbs = ({ project, task }: TaskBreadcrumbsProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();

  const [ConfirmDialog, confirm] = useConfirm(
    "Delete task",
    "This action cannot be undone.",
    "destructive",
  );

  const { mutate, isPending } = useDeleteTask();

  const onDelete = async () => {
    const ok = await confirm();
    if (!ok) return;

    mutate(
      { param: { taskId: task.$id } },
      {
        onSuccess: () => {
          router.push(`/workspaces/${workspaceId}/tasks`);
        },
      },
    );
  };

  return (
    <div className="flex items-center gap-x-2">
      <ConfirmDialog />
      <ProjectAvatar
        name={project.name}
        image={project.imageUrl}
        className="size-6 lg:size-8"
      />

      <Link
        href={`/workspaces/${workspaceId}/projects/${project.$id}`}
        className="text-sm font-semibold text-muted-foreground transition hover:opacity-75 lg:text-lg"
      >
        {project.name}
      </Link>

      <ChevronRightIcon className="size-4 text-muted-foreground lg:size-5" />

      <p className="text-sm font-semibold lg:text-lg">{task.name}</p>

      <Button
        className="ml-auto"
        variant="destructive"
        size="sm"
        onClick={onDelete}
        disabled={isPending}
      >
        <TrashIcon className="mr-2 size-4" />
        <span className="hidden lg:block">Delete Task</span>
      </Button>
    </div>
  );
};

export default TaskBreadcrumbs;
