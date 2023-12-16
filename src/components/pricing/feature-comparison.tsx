"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";

import keyFeatures from "@/config/features";
import { cn } from "@/lib/utils";

import Heading from "../ui/heading";
import { Separator } from "../ui/separator";

export interface FeatureComparisonProps
  extends React.HTMLAttributes<HTMLElement> {}

const FeatureComparison = ({ className, ...props }: FeatureComparisonProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <div className="mb-12 flex flex-col gap-4">
        <Heading className="text-4xl lg:text-5xl">Feature Comparison</Heading>
        <p className="text-center text-muted-foreground">
          Compare the key features of each plan
        </p>
      </div>
      <div className="grid grid-cols-3">
        <Heading className="text-left text-2xl lg:text-3xl">Features</Heading>
        <Heading className="text-2xl lg:text-3xl">Free</Heading>
        <Heading className="text-2xl lg:text-3xl">Pro</Heading>
      </div>
      <Separator className="my-8" />
      <div className="grid grid-cols-3 gap-y-8">
        {keyFeatures.map((feature, key) => {
          return (
            <>
              <h1 className="text-lg">{feature.name}</h1>

              {feature.free.available ? (
                feature.free.quantity ? (
                  <h1 className="text-center text-muted-foreground">
                    {feature.free.quantity}
                  </h1>
                ) : (
                  <div className="flex justify-center">
                    <FaCheck />
                  </div>
                )
              ) : (
                <h1 className="text-center">-</h1>
              )}
              {feature.pro.available ? (
                feature.pro.quantity ? (
                  <h1 className="text-center text-[#ad52c8]">
                    {feature.pro.quantity}
                  </h1>
                ) : (
                  <div className="flex justify-center">
                    <FaCheck color="#ad52c8" />
                  </div>
                )
              ) : (
                <h1 className="text-center">-</h1>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureComparison;
