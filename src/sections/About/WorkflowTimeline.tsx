// import React from "react";
import { Timeline } from "../../components/ui/timeline";

export function WorkflowTimeline() {
  const data = [
    {
      title: "01",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Concept Consultation
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Needs assessment and concept consultation to align the workflow
            and project references between the client and the Kolosal team.
          </p>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Quotation & MoU
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Issuance of an official quotation, followed by submission of a
            detailed brief and the signing of a Memorandum of Understanding
            (MoU) as a formal cooperation agreement.
          </p>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Down Payment (DP)
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Payment of the first installment (down payment) via invoice,
            with flexible payment scheme options.
          </p>
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Production Day (D-Day Execution)
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Production execution on the scheduled day by the professional
            Kolosal team, based on the agreed concept.
          </p>
        </div>
      ),
    },
    {
      title: "05",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Final Payment
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Settlement of the remaining balance according to the agreed
            payment scheme before entering the final stage.
          </p>
        </div>
      ),
    },
    {
      title: "06",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Post-Production
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Post-production process with an estimated completion time of
            [X] working days before the first deliverables are submitted
            to the client.
          </p>
        </div>
      ),
    },
    {
      title: "07",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Review & Revision
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Client review of the deliverables with a maximum of 1–2 rounds
            of revisions as agreed (additional revisions will be subject
            to extra charges).
          </p>
        </div>
      ),
    },
    {
      title: "08",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-2">
            Final Delivery & Handover
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Delivery of all final assets (soft files / hard files) through
            the agreed media as official project completion.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full py-20 bg-[#00030D]">
      <div className="max-w-4xl mx-auto px-4 mb-16 text-center">
        <span className="text-3xl md:text-5xl gradient-text font-bold mb-4">
          Our Workflow Process
        </span>
        <p className="text-neutral-600 text-base md:text-lg">
          A structured and professional production pipeline from initial
          consultation to final delivery.
        </p>
      </div>

      <Timeline data={data} />
    </div>
  );
}
