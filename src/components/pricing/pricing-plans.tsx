"use client";

import React from "react";
import FadeIn from "react-fade-in";

import { cn } from "@/lib/utils";

import Heading from "../ui/heading";

export interface PricingPlansProps extends React.HTMLAttributes<HTMLElement> {}

const PricingPlans = ({ className, ...props }: PricingPlansProps) => {
  return (
    <section
      id="pricing"
      className={cn(className, "flex flex-col gap-12")}
      {...props}
    >
      <FadeIn className="flex flex-col gap-4">
        <p className="text-center text-muted-foreground">PRICING</p>
        <Heading className="h-[70px] text-4xl lg:text-5xl">
          Get the ball rolling!
        </Heading>
      </FadeIn>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1ONrJzI7LItsbVfj25kiYEO6"
        publishable-key="pk_test_51ONrAII7LItsbVfjqWAoJ1TZuXXNb5AKovZnPp1Lm4l5MnytasSy9jxeSPWTRfl8oJOjJi1iwuvlhkMT7FpvqndI0057LLuK8n"
      ></stripe-pricing-table>
    </section>
  );
};

export default PricingPlans;
