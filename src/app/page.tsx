import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/login");
  }
  return (
    <main>
      <div>
        <p>Hello World</p>
        <UserButton />
      </div>
    </main>
  );
}
