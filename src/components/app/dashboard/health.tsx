"use client";

import React from "react";

import healthConfig from "@/config/dashboard/health";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export interface HealthProps extends React.HTMLAttributes<HTMLElement> {}

const Health = ({ className, ...props }: HealthProps) => {
  return (
    <div className={cn(className, "gap-4 bg-background p-4")} {...props}>
      <h1 className="mb-2 text-lg font-semibold">Health</h1>
      {healthConfig.stats.map((stat, index) => {
        return (
          <>
            <div key={index} className="flex justify-between pr-8">
              <h1 className="w-32">{stat.displayName}</h1>
              <p className="grow text-muted-foreground">0</p>
            </div>
            {index !== healthConfig.stats.length - 1 && (
              <Separator className="my-1" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Health;
