import React, { Suspense } from "react";
const CoreService = React.lazy(() => import("../../components/ui/3d-folder"));

const CoreServices = () => {
  return (
    <div className="w-full relative">
      {/* 2. Gunakan Suspense untuk menangani state saat komponen 3D sedang diunduh */}
      <Suspense
        fallback={
          <div className="w-full min-h-[400px] flex flex-col items-center justify-center bg-[#00030D] text-white/60">
            <span className="animate-pulse">Memuat elemen 3D...</span>
          </div>
        }
      >
        <CoreService />
      </Suspense>
    </div>
  );
};

export default CoreServices;
