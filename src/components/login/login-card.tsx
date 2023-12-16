"use client";

import React from "react";
import Image from "next/image";

import authenticationConfig from "@/config/authentication";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import LoginForm from "./login-form";

export interface LoginCardProps extends React.HTMLAttributes<HTMLElement> {}

const LoginCard = ({ className, ...props }: LoginCardProps) => {
  return (
    <div
      className={cn(
        className,
        "flex h-[36rem] w-[30rem] flex-col gap-2 rounded-lg border p-12"
      )}
      {...props}
    >
      <h1 className="text-3xl font-semibold">Log in</h1>
      <p className="mb-4 text-muted-foreground">
        New user?{" "}
        <span className="text-blue-400 underline">Create an account.</span>
      </p>
      <LoginForm />
      <p className="mt-2 text-center text-blue-400 underline">
        Forgot password
      </p>
      <p className="mt-4 text-center">OR</p>
      <Separator className="mb-2" />
      <div className="flex flex-col gap-y-4">
        {authenticationConfig.signOnMethods.map((signOnMethod, index) => {
          return (
            <Button
              className={cn(
                "flex h-14 items-center justify-center gap-x-4 rounded-full border p-4",
                signOnMethod.colour
              )}
            >
              <Image
                src={signOnMethod.logoURL}
                alt={signOnMethod.name}
                width={25}
                height={25}
              />
              <p>{`Continue with ${signOnMethod.name}`}</p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default LoginCard;
