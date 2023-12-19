import React from "react";
import Link from "next/link";
import { FaCrown } from "react-icons/fa";

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
          className="w-full bg-gradient-to-t from-[#7d3cb9] to-[#e26ed8] text-white hover:from-[#5e2494] hover:to-[#91458a]"
          asChild
        >
          <Link href={"/pricing"}>
            Upgrade to Pro
            <FaCrown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
