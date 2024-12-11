import { getCurrent } from "@/features/auth/actions";
import RegisterCard from "@/features/auth/components/register-card";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const user = await getCurrent();

  if (user) {
    redirect("/");
  }
  return <RegisterCard />;
};

export default RegisterPage;
