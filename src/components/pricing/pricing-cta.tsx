import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link as SmoothLink } from "react-scroll";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import Heading from "../ui/heading";

export interface PricingCTAProps extends React.HTMLAttributes<HTMLElement> {}

const PricingCTA = ({ className, ...props }: PricingCTAProps) => {
  return (
    <section
      className="bg-[radial-gradient(80%_89.55%_at_50%_100%,rgba(157,67,243,0.8)_0%,rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(80%_89.55%_at_50%_100%,rgba(157,67,243,0.15)_0%,rgba(9,9,11,1)_100%)]"
      {...props}
    >
      <div className="my-32 flex flex-col items-center justify-center gap-y-8">
        <Heading className="h-[70px]">Optimize your Workflow</Heading>
        <Button
          className="bg-gradient-to-t from-[#7d3cb9] to-[#e26ed8] text-foreground hover:underline"
          asChild
        >
          <SmoothLink
            to="pricing"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className={cn(
              "flex items-center text-sm font-medium text-white",
              "cursor-pointer"
            )}
          >
            Buy Now <FaArrowRight className="ml-4" />
          </SmoothLink>
        </Button>
      </div>
    </section>
  );
};

export default PricingCTA;
