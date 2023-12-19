import React from "react";
import Link from "next/link";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

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
              <DropdownMenuItem>
                <IoPerson className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
            </Link>
            <Link href="/app/billing" className="bg-pink-100">
              <DropdownMenuItem>
                <FaCreditCard className="mr-2 h-4 w-4" />
                Billing
              </DropdownMenuItem>
            </Link>
            <Link href="/app/settings" className="bg-pink-100">
              <DropdownMenuItem>
                <IoIosSettings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <Link href="/" className="bg-pink-100">
            <DropdownMenuItem>
              <RiLogoutBoxRLine className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
