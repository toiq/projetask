import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import WorkspaceIdSettingsClient from "./client";

const WorkspaceIdSettingsPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/login");

  return <WorkspaceIdSettingsClient />;
};

export default WorkspaceIdSettingsPage;
