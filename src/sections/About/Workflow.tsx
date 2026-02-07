"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WORKFLOW = [
  {
    step: "01",
    title: "Initial Inquiry",
    desc: "Client reaches out to discuss needs, goals, and project scope.",
  },
  {
    step: "02",
    title: "Creative Discussion",
    desc: "We explore ideas, references, and creative direction together.",
  },
  {
    step: "03",
    title: "Proposal & Planning",
    desc: "We define timeline, deliverables, and execution strategy.",
  },
  {
    step: "04",
    title: "Production Phase",
    desc: "Our team executes visuals, digital assets, or content production.",
  },
  {
    step: "05",
    title: "Review & Refinement",
    desc: "Client feedback is applied to refine the final output.",
  },
  {
    step: "06",
    title: "Final Delivery",
    desc: "Project is finalized and delivered ready for real-world use.",
  },
];

const CARD_WIDTH = 320; // px (penting buat geser 1 card pas)

const Workflow = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = WORKFLOW.length - 3; // karena md tampil 3 card

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="w-full bg-[#00030D] py-28 px-4">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-14 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-white">
              Our Workflow
            </h2>
            <p className="mt-3 max-w-xl text-white/60">
              A clear, structured process to ensure every project runs smoothly
              from idea to execution.
            </p>
          </div>

          {/* NAV (desktop only) */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-white/20
                text-white transition
                hover:bg-white/10
                disabled:opacity-30
              "
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-white/20
                text-white transition
                hover:bg-white/10
                disabled:opacity-30
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* MOBILE GRID */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {WORKFLOW.map((item) => (
            <WorkflowCard key={item.step} {...item} />
          ))}
        </div>

        {/* DESKTOP CAROUSEL */}
        <div className="relative hidden md:block overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * (CARD_WIDTH + 24)}px)`,
            }}
          >
            {WORKFLOW.map((item) => (
              <div
                key={item.step}
                style={{ width: CARD_WIDTH }}
                className="shrink-0"
              >
                <WorkflowCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

/* ================= CARD ================= */

const WorkflowCard = ({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className="
        h-full
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-sm
        transition
        hover:border-white/30
      "
    >
      <div className="text-sm font-semibold text-white/40">
        Step {step}
      </div>
      <h3 className="mt-3 text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        {desc}
      </p>
    </div>
  );
};
