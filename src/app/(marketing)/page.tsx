import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import Hero from "@/components/home/hero";
import SocialProof from "@/components/home/social-proof";

export default function IndexPage() {
  return (
    <section>
      <Hero />
    </section>
  );
}
