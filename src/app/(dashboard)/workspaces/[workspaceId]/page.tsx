import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import WorkspaceIdClient from "./client";

const WorkspaceIdPage = async () => {
  const user = await getCurrent();

  if (!user) {
    redirect("/login");
  }

  return <WorkspaceIdClient />;
};

export default WorkspaceIdPage;
