import Image from "next/image";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProjectAvatarProps {
  image?: string;
  name: string;
  className?: string;
  fallbackClassname?: string;
}

const ProjectAvatar = ({
  name,
  className,
  image,
  fallbackClassname,
}: ProjectAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("relative size-10 overflow-hidden rounded-md", className)}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-5 rounded-md", className)}>
      <AvatarFallback
        className={cn(
          "rounded-full bg-blue-600 text-xs font-semibold uppercase text-white",
          fallbackClassname,
        )}
      >
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProjectAvatar;
