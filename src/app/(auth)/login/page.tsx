import { getCurrent } from "@/features/auth/actions";
import LoginCard from "@/features/auth/components/login-card";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const user = await getCurrent();

  if (user) {
    redirect("/");
  }
  return <LoginCard />;
};

export default LoginPage;
