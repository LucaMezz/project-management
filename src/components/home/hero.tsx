"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import Heading from "../ui/heading";
import SocialProof from "./social-proof";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <section className="bg-[radial-gradient(80%_89.55%_at_50%_100%,rgba(157,67,243,0.8)_0%,rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(80%_89.55%_at_50%_100%,rgba(157,67,243,0.15)_0%,rgba(9,9,11,1)_100%)]">
      <FadeIn
        className={cn(
          className,
          "container flex h-[calc(100vh-5rem)] flex-col items-center gap-y-8 pt-10 md:pt-28"
        )}
        {...props}
      >
        <div className="flex flex-col items-center">
          <Heading className="h-[100px] whitespace-pre-wrap bg-gradient-to-r from-[#9c42f5] via-[#b85687] to-[#f56e14] bg-clip-text text-center text-5xl font-bold text-transparent dark:from-[#9c42f5] dark:via-[#b85687] dark:to-[#f56e14] md:h-[52px] md:whitespace-normal lg:h-[66px] lg:text-6xl">
            Project{"\n"}Management
          </Heading>
          <Heading className="">has never been easier</Heading>
        </div>
        <p className="text-center text-lg text-muted-foreground">
          An all in one project management solution tailor-made for teams
        </p>
        <div className="mb-20 flex gap-x-4">
          <Button
            className="bg-gradient-to-t from-[#7d3cb9] to-[#e26ed8] text-white"
            asChild
          >
            <Link href={"/app"}>Get Started</Link>
          </Button>
          <Button>Book Demo</Button>
        </div>

        <p className="text-[#1e2227] dark:text-[#576068]">TRUSTED BY</p>
        <SocialProof />
      </FadeIn>
    </section>
  );
};

export default Hero;
