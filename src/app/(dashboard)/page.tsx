import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/login");
  }
  return (
    <main>
      <div>
        <p>This is the workspace</p>
      </div>
    </main>
  );
}
