import { lazy, Suspense } from "react";

// Trik khusus untuk lazy load "named export" (bukan export default)
const LandingAccordionItem = lazy(() =>
  import("../../components/interactive-image-accordion").then((module) => ({
    default: module.LandingAccordionItem,
  })),
);

export default function ServiceType() {
  return (
    <div className="w-full min-h-[400px]">
      {/* Suspense wajib ada buat nampilin loading saat komponen lagi di-download */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-[400px]">
            <span className="text-white/50 text-sm animate-pulse">
              Memuat layanan...
            </span>
          </div>
        }
      >
        <LandingAccordionItem />
      </Suspense>
    </div>
  );
}
