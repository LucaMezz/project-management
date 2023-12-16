import React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/layout/marketing/icons";

export interface SiteLogoProps extends React.HTMLAttributes<HTMLElement> {}

const SiteLogo = ({ className, ...props }: SiteLogoProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
};

export default SiteLogo;
