import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import MemberList from "@/features/workspaces/components/member-list";

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/login");

  return (
    <div className="w-full lg:max-w-xl">
      <MemberList />
    </div>
  );
};

export default WorkspaceIdMembersPage;
