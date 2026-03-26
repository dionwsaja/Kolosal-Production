import React, { Suspense } from "react";
import { ServiceOverview } from "../sections/Services/ServiceOverview";
import { Hero } from "../sections/Services/Hero";
import { InFrame } from "../sections/Services/InFrame";
import ServiceType from "../sections/Services/ServiceType";

const WhyKolosal = React.lazy(() => import("../sections/Services/WhyKolosal"));

const Services = () => {
  return (
    <div className="bg-[#00030D]">
      <Hero />
      <ServiceType />
      <ServiceOverview />

      <Suspense
        fallback={
          <div className="h-64 flex items-center justify-center text-white">
            Loading Why Kolosal...
          </div>
        }
      >
        <WhyKolosal />
      </Suspense>

      <InFrame />
    </div>
  );
};

export default Services;
