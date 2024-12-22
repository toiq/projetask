import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { ProjectIdClient } from "./client";

const ProjectIdPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/login");

  return <ProjectIdClient />;
};

export default ProjectIdPage;
