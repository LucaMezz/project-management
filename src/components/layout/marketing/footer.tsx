"use client";

import React from "react";

import { cn } from "@/lib/utils";

import SocialIcons from "../../misc/social-icons";
import { Separator } from "../../ui/separator";
import SiteLogo from "../site-logo";
import { ThemeToggle } from "../theme-toggle";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div className={cn(className, "container py-8")} {...props}>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2">
          <SiteLogo />
          <p className="w-[25rem] text-sm">
            Empowering teams to streamline their workflow.
          </p>
        </div>
        <SocialIcons />
      </div>

      <Separator className="my-8" />
      <div className="flex justify-between">
        <div></div>
        <p className="text-center text-muted-foreground">
          © Luca Mezzavilla 2023. All rights reserved.
        </p>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
