"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import ProfileDropdown from "../../app/profile-dropdown";
import SearchMenu from "../../app/search-menu";

export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {}

const SiteHeader = ({ className, ...props }: SiteHeaderProps) => {
  const pathname = usePathname();
  const pageName: string[] = pathname
    .split("/")
    .map((page) => {
      return (
        page.charAt(0).toUpperCase() +
        page
          .toLowerCase()
          .replaceAll(/-(\w)/g, (substring: string, replacer: any[]) => {
            return ` ${replacer[0].toUpperCase()}`;
          })
          .slice(1)
      );
    })
    .slice(2);

  return (
    <div
      className={cn(
        className,
        "flex h-[4rem] w-full items-center justify-between border-b bg-background px-4"
      )}
      {...props}
    >
      <div className="flexitems-center justify-center gap-x-4">
        <h1 className="text-xl font-semibold">
          {pageName.length === 0
            ? "Dashboard"
            : pageName.map((path: string, index: number) => {
                return (
                  <>
                    <span>{path}</span>
                    {index !== pageName.length - 1 && (
                      <span className="font-normal"> / </span>
                    )}
                  </>
                );
              })}
        </h1>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <SearchMenu />
        <FaBell size={18} />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default SiteHeader;
