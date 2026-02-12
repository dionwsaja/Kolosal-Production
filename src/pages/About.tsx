import {WorkflowTimeline} from "../sections/About/WorkflowTimeline";
import Company from "../sections/About/Company";
import { Hero } from "../sections/About/Hero";

const About = () => {
  return (
    <div className="bg-[#00030D]">
      <Hero></Hero>
      <Company />
      <WorkflowTimeline/>
    </div>
  );
};

export default About;
