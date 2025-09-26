"use client";

import { Dna, FlaskConical, Shield, Package, Users, FileText, ArrowRightLeft, Building2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { useMobileScrollGlow } from "@/hooks/use-mobile-scroll-glow";
export function GlowingEffectDemo() {
  const { activeItems, registerElement, isMobile } = useMobileScrollGlow();
  
  return <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Development Model
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            From concept to commercial scale, our integrated approach covers every stage of lipid-based drug delivery development.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GridItem index={0} number="01" icon={<Dna className="h-7 w-7" />} title="Design of Lipid-Based Drug Delivery Systems" description="We engineer proprietary LBDDS platforms to address solubility, stability, and absorption challenges — enabling oral delivery of small molecules and biologics." isActive={activeItems.has(0)} isMobile={isMobile} registerElement={registerElement} />
          <GridItem index={1} number="02" icon={<FlaskConical className="h-7 w-7" />} title="Preclinical Validation" description="Our delivery systems are rigorously validated through in vitro and in vivo studies, including pharmacokinetic modeling and intestinal barrier assays." isActive={activeItems.has(1)} isMobile={isMobile} registerElement={registerElement} />
          <GridItem index={2} number="03" icon={<Shield className="h-7 w-7" />} title="Patent Protection" description="We implement strategic, international IP frameworks to secure exclusivity and long-term commercial value for each technology." isActive={activeItems.has(2)} isMobile={isMobile} registerElement={registerElement} />
          <GridItem index={3} number="04" icon={<Package className="h-7 w-7" />} title="Development of Xenira's Own Products" description="We apply our platforms to create a pipeline of pharmaceutical raw materials and super generics — enhancing established APIs with improved bioavailability." isActive={activeItems.has(3)} isMobile={isMobile} registerElement={registerElement} />
          <GridItem index={4} number="05" icon={<Users className="h-7 w-7" />} title="Partner-Driven Innovation" description="We collaborate with pharmaceutical companies to turn their active agents into novel, commercially attractive oral therapies using Xenira's proprietary technologies." isActive={activeItems.has(4)} isMobile={isMobile} registerElement={registerElement} />
          <GridItem index={5} number="06" icon={<FileText className="h-7 w-7" />} title="Regulatory Strategy & Registration" description="Once proof-of-concept is achieved, we prepare CTD dossiers in line with ICH guidelines — ready to support registration with EMA and other global regulators." isActive={activeItems.has(5)} isMobile={isMobile} registerElement={registerElement} />
          <GridItem index={6} number="07" icon={<ArrowRightLeft className="h-7 w-7" />} title="Licensing & Technology Transfer" description="We offer flexible out-licensing models — with or without technology transfer — allowing partners to advance product development using validated, IP-secured platforms." isActive={activeItems.has(6)} isMobile={isMobile} registerElement={registerElement} />
          <GridItem index={7} number="08" icon={<Building2 className="h-7 w-7" />} title="EU-GMP Manufacturing" description="Our in-house cleanroom facility, built to EU-GMP standards, enables contract manufacturing for clinical batches, validation, and commercial production." isActive={activeItems.has(7)} isMobile={isMobile} registerElement={registerElement} />
        </ul>
      </div>
    </div>;
}
interface GridItemProps {
  index: number;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  isMobile: boolean;
  registerElement: (element: HTMLElement | null, index: number) => void;
}
const GridItem = ({
  index,
  number,
  icon,
  title,
  description,
  isActive,
  isMobile,
  registerElement
}: GridItemProps) => {
  return <li 
    className="min-h-[14rem] list-none"
    ref={(el) => registerElement(el, index)}
  >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect 
          spread={40} 
          glow={true} 
          disabled={isMobile ? !isActive : false} 
          proximity={64} 
          inactiveZone={0.01} 
          borderWidth={3} 
        />
        <div className="relative flex h-full flex-col justify-center items-center gap-3 overflow-hidden rounded-xl border-[0.75px] bg-background p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-5">
          <div className="relative flex flex-col items-center gap-3 text-center">
            <div className="flex items-center justify-between w-full">
              <div className="text-red-500">
                {icon}
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {number}
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="pt-0.5 leading-[1.2rem] font-semibold font-sans tracking-[-0.04em] text-balance text-foreground text-left text-lg">
                {title}
              </h3>
              <p className="font-sans leading-[1.1rem] text-left text-sm font-light text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>;
};