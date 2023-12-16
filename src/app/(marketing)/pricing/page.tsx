"use client";

import * as React from "react";
import { NextPage } from "next";
import FadeIn from "react-fade-in/lib/FadeIn";

import Heading from "@/components/ui/heading";
import FAQ from "@/components/pricing/faq";
import FeatureComparison from "@/components/pricing/feature-comparison";
import PricingCTA from "@/components/pricing/pricing-cta";
import PricingPlans from "@/components/pricing/pricing-plans";

type Props = {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const Pricing: NextPage<Props> = ({}: Props) => {
  return (
    <div className="container flex flex-col gap-12 py-24">
      <PricingPlans />
      <FeatureComparison className="mt-[4.8rem]" />
      <FAQ className="mt-24" />
      <PricingCTA className="mt-24" />
    </div>
  );
};

export default Pricing;
