"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createWorkspaceSchema } from "../schemas";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { cn } from "@/lib/utils";

interface CreateWorkspaceFormProps {
  onCancel: () => void;
}
const CreateWorkspaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {
  const router = useRouter();
  const { mutate, isPending } = useCreateWorkspace();
  const form = useForm<z.infer<typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
    mutate(
      { form: values },
      {
        onSuccess: ({ data }) => {
          form.reset();
          router.push(`/workspaces/${data.$id}`);
        },
      },
    );
  };
  return (
    <Card className="h-full w-full border-none shadow-none">
      <CardHeader className="flex px-7">
        <CardTitle className="text-xl font-bold">
          Create a new workspace
        </CardTitle>
      </CardHeader>
      {/* <div className="px-7">
        <Separator />
      </div> */}
      <CardContent className="px-7 py-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter workspace name" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Button
                type="button"
                size="lg"
                variant="secondary"
                onClick={onCancel}
                disabled={isPending}
                className={cn(!onCancel && "invisible")}
              >
                Cancel
              </Button>

              <Button type="submit" size="lg" disabled={isPending}>
                Create Workspace
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateWorkspaceForm;
