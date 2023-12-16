import React from "react";
import Link from "next/link";

import appConfig from "@/config/app";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import SiteLogo from "../site-logo";
import { MainNav } from "./main-nav";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div className={cn(className, "w-[13.5rem] border-r")} {...props}>
      <div className="justify-left flex h-[63px] w-full items-center bg-[#050506] p-4 invert dark:invert-0">
        <SiteLogo className="invert dark:invert-0" />
      </div>
      <div className="flex h-[calc(100%-7.5rem)] flex-col gap-y-4 border-t py-4">
        <MainNav items={appConfig.mainNav} />
      </div>
      <div className="flex h-[3.5rem] items-center justify-center px-4">
        <Button
          className="w-full bg-[rgb(157,67,243)] text-white hover:bg-[rgb(112,48,172)]"
          asChild
        >
          <Link href={"/pricing"}>Upgrade to Pro</Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
