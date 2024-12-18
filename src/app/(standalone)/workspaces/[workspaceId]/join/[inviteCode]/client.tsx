"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import PageLoader from "@/components/page-loader";
import PageError from "@/components/page-error";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace-info";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

export const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: initalValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) return <PageLoader />;

  if (!initalValues) return <PageError message="Workspace not found" />;

  return <JoinWorkspaceForm initalValues={initalValues} />;
};
