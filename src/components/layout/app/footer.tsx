import React from "react";

import { cn } from "@/lib/utils";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return <div className={cn(className, "")} {...props}></div>;
};

export default Footer;
