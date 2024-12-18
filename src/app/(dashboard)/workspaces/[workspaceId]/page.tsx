import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const WorkspaceIdPage = async () => {
  const user = await getCurrent();

  if (!user) {
    redirect("/login");
  }
  return <>Yes</>;
};

export default WorkspaceIdPage;
