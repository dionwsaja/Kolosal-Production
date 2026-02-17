// import { ServiceOverview } from "../sections/Services/ServiceOverview";
import { Hero } from "../sections/Services/Hero";
import WhyKolosal from "../sections/Services/WhyKolosal";
import {InFrame} from "../sections/Services/InFrame";
import ServiceType from "../sections/Services/ServiceType";

const Services = () => {
  return (
    <div className="bg-[#00030D]">
      <Hero></Hero>
      <ServiceType></ServiceType>
      {/* <ServiceOverview></ServiceOverview>  */}
      <WhyKolosal/>
      <InFrame></InFrame>
    </div>
  );
};

export default Services;
