"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WORKFLOW = [
  {
    step: "01",
    title: "Konsultasi Kebutuhan & Penyelarasan Konsep",
    desc: "Pengajuan kebutuhan dan konsultasi konsep untuk menyelaraskan alur kerja serta referensi proyek antara klien dan tim Kolosal.",
  },
  {
    step: "02",
    title: "Penawaran Resmi & Kesepakatan Kerja Sama",
    desc: "Pemberian quotation resmi yang dilanjutkan dengan pengajuan brief detail dan penandatanganan kesepakatan kerja sama (MoU).",
  },
  {
    step: "03",
    title: "Pembayaran Termin Awal (Down Payment)",
    desc: "Pembayaran termin pertama (DP) melalui invoice dengan pilihan skema fleksibel.",
  },
  {
    step: "04",
    title: "Pelaksanaan Produksi (Hari-H)",
    desc: "Eksekusi produksi pada hari-H oleh tim profesional Kolosal sesuai dengan konsep yang telah disepakati.",
  },
  {
    step: "05",
    title: "Pelunasan Pembayaran Akhir",
    desc: "Pelunasan tagihan akhir sesuai skema sebelum memasuki tahap akhir.",
  },
  {
    step: "06",
    title: "Tahap Pasca-Produksi",
    desc: "Proses pasca-produksi dengan estimasi pengerjaan [X] hari kerja sebelum hasil pertama diberikan kepada klien.",
  },
  {
    step: "07",
    title: "Review & Revisi Klien",
    desc: "Peninjauan hasil karya (review) oleh klien dengan batas maksimal 2x revisi (revisi tambahan akan dikenakan biaya).",
  },
  {
    step: "08",
    title: "Serah Terima Aset Akhir",
    desc: "Penyerahan seluruh aset akhir (soft file/hard file) melalui media yang disepakati sebagai tanda selesainya proyek secara resmi.",
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
            <span className="gradient-text text-5xl font-bold text-white">
              Our Workflow
            </span>
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
