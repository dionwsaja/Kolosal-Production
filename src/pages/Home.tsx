import CoreServices from "../sections/Home/CoreServices";
import Testimonials from "../sections/Home/Testimonials";
import { ValueProposition } from "../sections/Home/ValueProposition";
import Accordion from "../sections/Home/Accordion";
import {Demo} from "../sections/Home/Demo";

const Home = () => {
  return (
    <div className="bg-[#00030D]">
      <Demo/>
      <CoreServices />
      <ValueProposition></ValueProposition>
      <Testimonials />
      <Accordion />
    </div>
  );
};

export default Home;
