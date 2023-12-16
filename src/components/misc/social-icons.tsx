import React from "react";

import { cn } from "@/lib/utils";

export interface SocialIconProps extends React.HTMLAttributes<HTMLElement> {}

const SocialIcons = ({ className, ...props }: SocialIconProps) => {
  return <div className={cn(className, "")} {...props}></div>;
};

export default SocialIcons;
