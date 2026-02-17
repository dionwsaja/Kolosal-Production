import {WorkflowTimeline} from "../sections/About/WorkflowTimeline";
import Company from "../sections/About/Company";
import { Hero } from "../sections/About/Hero";
import QR from "../sections/About/QR";

const About = () => {
  return (
    <div className="bg-[#00030D] mx-auto px-4 flex flex-col items-center ">
      <Hero></Hero>
      <Company />
      <WorkflowTimeline/>
      <QR/>
    </div>
  );
};

export default About;
