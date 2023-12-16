"use client";

import React from "react";
import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import ProfileDropdown from "./profile-dropdown";
import SearchMenu from "./search-menu";

export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {}

const SiteHeader = ({ className, ...props }: SiteHeaderProps) => {
  return (
    <div
      className={cn(
        className,
        "flex h-[4rem] w-full items-center justify-between border-b px-4"
      )}
      {...props}
    >
      <div className="flexitems-center justify-center gap-x-4">
        <SearchMenu />
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <FaBell size={18} />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default SiteHeader;
