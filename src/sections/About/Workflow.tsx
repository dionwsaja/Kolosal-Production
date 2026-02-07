"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WORKFLOW = [
  {
    step: "01",
    title: "Project Requirement Submission & Concept Alignment",
    desc: "Submission of requirements and concept consultation to align workflows and project references between the client and the Kolosal team.",
  },
  {
    step: "02",
    title: "Quotation Issuance & Agreement Formalization (MoU)",
    desc: "Provision of an official quotation followed by the submission of a detailed brief and the signing of a memorandum of understanding (MoU).",
  },
  {
    step: "03",
    title: "Initial Payment & Project Confirmation",
    desc: "Payment of the first installment (DP) via invoice with flexible payment options.",
  },
  {
    step: "04",
    title: "Production Execution",
    desc: "Production execution on the appointed day by Kolosal's professional team in accordance with the agreed concept.",
  },
  {
    step: "05",
    title: "Final Payment Settlement",
    desc: "Final payment settlement according to the scheme before entering the final stage.",
  },
  {
    step: "06",
    title: "Post-Production Process",
    desc: "Post-production process with an estimated [X] working days before the first results are delivered to the client..",
  },
  {
    step: "07",
    title: "Client Review & Revision Phase",
    desc: "Review of the work by the client with a maximum of 2 revisions (additional revisions will incur additional costs).",
  },
  {
    step: "08",
    title: "Final Asset Delivery & Project Completion",
    desc: "Delivery of all final assets (soft files/hard files) via the agreed medium as a sign of the official completion of the project.",
  },
];

const CARD_WIDTH = 320; 

const Workflow = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = WORKFLOW.length - 3; 

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="w-full bg-[#00030D] py-36">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 flex text-center md:text-left items-center justify-between">
          <div>
            <span className="gradient-text text-5xl font-bold text-white">
              Our Workflow
            </span>
            <p className="mt-3 max-w-sm md:max-w-xl text-white/60">
              A clear, structured process to ensure every project runs smoothly
              from idea to execution.
            </p>
          </div>

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

        <div className="grid grid-cols-2 gap-4 md:hidden">
          {WORKFLOW.map((item) => (
            <WorkflowCard key={item.step} {...item} />
          ))}
        </div>

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
