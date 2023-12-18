import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ProfileDropdownProps
  extends React.HTMLAttributes<HTMLElement> {}

const ProfileDropdown = ({ className, ...props }: ProfileDropdownProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-full bg-transparent p-[1px] hover:bg-black hover:dark:bg-white">
            <Avatar>
              <AvatarImage src="https://github.com/LucaMezz.png" />
              <AvatarFallback>W</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="m-4 w-72">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuLabel>
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/LucaMezz.png" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <div>
                <p>LucaMezz</p>
                <p className="text-xs">lucamezza4@gmail.com</p>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/app/profile" className="bg-pink-100">
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link href="/app/billing" className="bg-pink-100">
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </Link>
            <Link href="/app/settings" className="bg-pink-100">
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <Link href="/" className="bg-pink-100">
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
