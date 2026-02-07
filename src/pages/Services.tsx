// import React from "react";
import { ServiceOverview } from "../sections/Services/ServiceOverview";
import { Hero } from "../sections/Services/Hero";
// import CTA  from "../sections/Services/CTA";
import WhyKolosal from "../sections/Services/WhyKolosal";

const Services = () => {
  return (
    <div className="bg-[#00030D]">
      <Hero></Hero>
      <ServiceOverview></ServiceOverview> 
      {/* <CTA/> */}
      <WhyKolosal/>
    </div>
  );
};

export default Services;
