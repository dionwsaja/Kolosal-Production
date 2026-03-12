import { Demo } from "../sections/Home/Demo";
import CoreServices from "../sections/Home/CoreServices";
import { ValueProposition } from "../sections/Home/ValueProposition";
import Testimonials from "../sections/Home/Testimonials";
import Accordion from "../sections/Home/Accordion";

const Home = () => {
  return (
    <div className="bg-[#00030D]">
      <Demo />
      <CoreServices />
      <ValueProposition></ValueProposition>
      <Testimonials />
      <Accordion />
    </div>
  );
};

export default Home;
