import React from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export interface SocialProofProps extends React.HTMLAttributes<HTMLElement> {}

const SocialProofIcons = ({ className, ...props }: SocialProofProps) => {
  return (
    <div
      className={cn(
        className,
        "flex h-16 animate-infinite-scroll items-center justify-center"
      )}
      {...props}
    >
      {siteConfig.socialProofs.map((socialProof, index) => {
        return (
          <Link
            key={index}
            href={socialProof.href}
            className="relative mx-4 h-full w-32 md:mx-8 md:w-48"
          >
            <Image
              src={socialProof.logo}
              alt={socialProof.name}
              fill
              className="object-fit"
            />
          </Link>
        );
      })}
    </div>
  );
};

const SocialProof = ({ className, ...props }: SocialProofProps) => {
  return (
    <div
      className={cn(
        className,
        "container flex overflow-x-hidden",
        "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      )}
      {...props}
    >
      <SocialProofIcons />
      <SocialProofIcons aria-hidden />
    </div>
  );
};

export default SocialProof;
