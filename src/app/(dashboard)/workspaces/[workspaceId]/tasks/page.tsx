import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { TaskViewSwticher } from "@/features/tasks/components/task-view-switcher";

const TasksPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/login");

  return (
    <div className="flex h-full flex-col">
      <TaskViewSwticher hideProjectFilter />
    </div>
  );
};

export default TasksPage;
