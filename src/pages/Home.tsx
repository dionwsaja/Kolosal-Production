import React, { Suspense } from "react";
import { Demo } from "../sections/Home/Demo";
import { ValueProposition } from "../sections/Home/ValueProposition";
import Testimonials from "../sections/Home/Testimonials";
import Accordion from "../sections/Home/Accordion";

// 1. Ubah import CoreServices menjadi lazy load
const CoreServices = React.lazy(() => import("../sections/Home/CoreServices"));

const Home = () => {
  return (
    <div className="bg-[#00030D]">
      <Demo />

      <Suspense
        fallback={
          <div className="min-h-[400px] flex items-center justify-center text-white/50 bg-[#00030D]">
            <span className="animate-pulse">Loading 3D Experience...</span>
          </div>
        }
      >
        <CoreServices />
      </Suspense>

      <ValueProposition />
      <Testimonials />
      <Accordion />
    </div>
  );
};

export default Home;
