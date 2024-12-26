import Link from "next/link";
import Logo from "./logo";
import { Separator } from "@radix-ui/react-separator";
import Navigation from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";
import Projects from "./projects";

const Sidebar = () => {
  return (
    <aside className="h-full w-full bg-neutral-100 p-4">
      <div className="w-fit">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <Separator className="my-4" />
      <WorkspaceSwitcher />
      <Separator className="my-4" />
      <Navigation />
      <Separator className="my-4" />
      <Projects />
    </aside>
  );
};

export default Sidebar;
