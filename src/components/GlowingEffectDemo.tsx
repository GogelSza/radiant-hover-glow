"use client";

import { Dna, FlaskConical, Shield, Package, Users, FileText, ArrowRightLeft, Building2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Development Model
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            From concept to commercial scale, our integrated approach covers every stage of lipid-based drug delivery development.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GridItem
            number="01"
            icon={<Dna className="h-5 w-5" />}
            title="Design of Lipid-Based Drug Delivery Systems"
            description="We engineer proprietary LBDDS platforms to address solubility, stability, and absorption challenges — enabling oral delivery of small molecules and biologics."
          />
          <GridItem
            number="02"
            icon={<FlaskConical className="h-5 w-5" />}
            title="Preclinical Validation"
            description="Our delivery systems are rigorously validated through in vitro and in vivo studies, including pharmacokinetic modeling and intestinal barrier assays."
          />
          <GridItem
            number="03"
            icon={<Shield className="h-5 w-5" />}
            title="Patent Protection"
            description="We implement strategic, international IP frameworks to secure exclusivity and long-term commercial value for each technology."
          />
          <GridItem
            number="04"
            icon={<Package className="h-5 w-5" />}
            title="Development of Xenira's Own Products"
            description="We apply our platforms to create a pipeline of pharmaceutical raw materials and super generics — enhancing established APIs with improved bioavailability."
          />
          <GridItem
            number="05"
            icon={<Users className="h-5 w-5" />}
            title="Partner-Driven Innovation"
            description="We collaborate with pharmaceutical companies to turn their active agents into novel, commercially attractive oral therapies using Xenira's proprietary technologies."
          />
          <GridItem
            number="06"
            icon={<FileText className="h-5 w-5" />}
            title="Regulatory Strategy & Registration"
            description="Once proof-of-concept is achieved, we prepare CTD dossiers in line with ICH guidelines — ready to support registration with EMA and other global regulators."
          />
          <GridItem
            number="07"
            icon={<ArrowRightLeft className="h-5 w-5" />}
            title="Licensing & Technology Transfer"
            description="We offer flexible out-licensing models — with or without technology transfer — allowing partners to advance product development using validated, IP-secured platforms."
          />
          <GridItem
            number="08"
            icon={<Building2 className="h-5 w-5" />}
            title="EU-GMP Manufacturing"
            description="Our in-house cleanroom facility, built to EU-GMP standards, enables contract manufacturing for clinical batches, validation, and commercial production."
          />
        </ul>
      </div>
    </div>
  );
}

interface GridItemProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ number, icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[20rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="flex items-start justify-between">
              <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                {icon}
              </div>
              <span className="text-2xl font-bold text-red-500 opacity-60">
                {number}
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.25rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};