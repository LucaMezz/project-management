import React from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "bg-gradient-to-b from-muted-foreground via-[#222222] to-foreground bg-clip-text text-center text-5xl font-bold text-transparent dark:from-foreground dark:via-foreground dark:to-muted-foreground lg:text-6xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
