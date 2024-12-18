"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useRouter } from "next/navigation";
import { useInviteCode } from "../hooks/use-invite-code";
import { useJoinWorkspace } from "../api/use-join-workspace";

interface JoinWorkspaceFormProps {
  initalValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({ initalValues }: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      },
    );
  };

  return (
    <Card className="h-full w-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{initalValues.name}</strong>{" "}
          workspace
        </CardDescription>
      </CardHeader>

      <CardContent className="p-7">
        <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
          <Button
            className="w-full lg:w-fit"
            variant="secondary"
            type="button"
            size="lg"
            disabled={isPending}
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button
            className="w-full lg:w-fit"
            size="lg"
            type="button"
            disabled={isPending}
            onClick={onSubmit}
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
