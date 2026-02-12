import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../../components/ui/glowing-effect";
import { cn } from "../../lib/utils";



export function ValueProposition() {
  return (
    <div className="max-w-7xl mx-auto pt-36 px-4">
      <div className="text-center flex flex-col items-center gap-y-4">
        <span className="gradient-text text-3xl md:text-5xl font-bold">
          Our Value Propositions
        </span>
        <p className="text-white/60 max-w-xl">
          The core values that define how we think, work, and create meaningful
          visual and digital experiences.
        </p>
      </div>

      <ul
        className="
          pt-16 max-w-7xl mx-auto grid grid-cols-1 gap-4
          md:grid-cols-12 md:grid-rows-[repeat(3,minmax(0,1fr))]
          xl:grid-rows-[repeat(2,minmax(0,1fr))]
        "
      >
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4" />}
          title="Integrated Visual & Digital Solutions"
          description="From aesthetic visual production to functional digital outputs, we create cohesive experiences, not fragmented deliverables."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4" />}
          title="Youth-Driven, Adaptive Mindset"
          description="Powered by the energy and perspective of the younger generation, we adapt fast, think fresh, and stay relevant in a dynamic creative landscape."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4" />}
          title="Creative Partner, Not Just a Vendor"
          description="We work as an extension of your team,translating ideas, identity, and vision into visual and digital works that truly represent who you are."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4" />}
          title="Proven Professional Standards"
          description="Our work is backed by real field experience handling major brands and large-scale events, ensuring reliable execution and technical excellence."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4" />}
          title="Identity-Focused Storytelling"
          description="Every project is designed to be more than just visually pleasing, it’s built to communicate identity in a strong, memorable, and meaningful way."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("h-full min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />

        

        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-transparent p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="flex flex-1 flex-col gap-4">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-[-0.04em] md:text-2xl text-foreground">
                {title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
