"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as SmoothLink } from "react-scroll";

import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  itemClassName?: string;
}

export function MainNav({
  className,
  items,
  itemClassName,
  ...props
}: MainNavProps) {
  const pathname = usePathname();

  return (
    <>
      {items?.length ? (
        <nav className={cn("flex flex-col", className)} {...props}>
          {items?.map((item, index) => {
            if (item.separator) return <div className="h-4"></div>;
            return (
              item.href && (
                <Link
                  href={item.href}
                  className={cn(
                    itemClassName,
                    "px-6 py-2 text-lg hover:bg-[rgba(157,67,243,0.1)]",
                    pathname === item.href ? "bg-[rgba(157,67,243,0.1)]" : ""
                  )}
                >
                  {item.title}
                </Link>
              )
            );
          })}
        </nav>
      ) : null}
    </>
  );
}
