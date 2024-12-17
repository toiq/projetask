import Link from "next/link";
import Logo from "./logo";
import { Separator } from "@radix-ui/react-separator";
import Navigation from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";

const Sidebar = () => {
  return (
    <aside className="h-full w-full bg-neutral-100 p-4">
      <Link href="/">
        <Logo />
      </Link>
      <Separator className="my-4" />
      <WorkspaceSwitcher />
      <Separator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
