"use client";

import React from "react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Heading from "../ui/heading";

export interface FAQProps extends React.HTMLAttributes<HTMLElement> {}

const FAQ = ({ className, ...props }: FAQProps) => {
  return (
    <div className={cn(className, " flex flex-col items-center")} {...props}>
      <div className="mb-12 flex flex-col gap-1">
        <Heading className="h-[70px] text-4xl lg:text-5xl">
          Frequently Asked Questions
        </Heading>
        <p className="text-center text-muted-foreground">
          Explore answers to common inquiries.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-2/3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Which payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent>
            You can see a list of the available payment methods by choosing one
            of the packages.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can I stop subscription payments?
          </AccordionTrigger>
          <AccordionContent>You can do this by...</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What happens when my subscription expires?
          </AccordionTrigger>
          <AccordionContent>
            Once your subscription expires, your account will be downgraded to a
            starter package.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I apply for a refund after purchasing?
          </AccordionTrigger>
          <AccordionContent>
            Yes, We provide a 30 day money back guarantee. See our Refund
            Policy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
