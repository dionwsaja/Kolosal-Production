import Workflow  from "../sections/About/Workflow";
import Company from "../sections/About/Company";
import { Hero } from "../sections/About/Hero";

const About = () => {
  return (
    <div className="bg-[#00030D]">
      <Hero></Hero>
      <Company />
      <Workflow/>
    </div>
  );
};

export default About;
