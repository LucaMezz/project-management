"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Button } from "../../../ui/button";
import { Separator } from "../../../ui/separator";
import SignupForm from "./signup-form";

export interface SignupCardProps extends React.HTMLAttributes<HTMLElement> {}

const SignupCard = ({ className, ...props }: SignupCardProps) => {
  return (
    <div
      className={cn(
        className,
        "flex h-max w-[28rem] flex-col gap-2 rounded-lg border p-12"
      )}
      {...props}
    >
      <h1 className="text-3xl font-semibold">Sign Up</h1>
      <p className="mb-4 text-muted-foreground">
        Already a user?{" "}
        <span className="text-blue-400 underline">
          <Link href={"/login"}>Login.</Link>
        </span>
      </p>
      <SignupForm />
      <p className="mt-4 text-center">OR</p>
      <Separator className="mb-2" />
      <div className="flex flex-col gap-y-4">
        <Button
          className={cn(
            "flex h-14 items-center justify-center gap-x-4 rounded-full border bg-white p-4 hover:bg-slate-300"
          )}
        >
          <Image
            src={"/brands/google.svg"}
            alt="Google"
            width={25}
            height={25}
          />
          <p className={cn("text-black")}>Signup with Google</p>
        </Button>
        <Button
          className={cn(
            "flex h-14 items-center justify-center gap-x-4 rounded-full border bg-black p-4 hover:bg-slate-900 dark:hover:bg-border"
          )}
        >
          <FaGithub size={25} color="white" />
          <p className={cn("text-white")}>Signup with Github</p>
        </Button>
      </div>
    </div>
  );
};

export default SignupCard;
