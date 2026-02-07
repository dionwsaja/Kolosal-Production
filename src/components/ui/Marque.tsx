import { motion } from "framer-motion";
import bumn from "../../assets/logo/marque/bumn.png";
import kemenbud from "../../assets/logo/marque/kemenbud.png";
import intac from "../../assets/logo/marque/intac.png";
import ui from "../../assets/logo/marque/ui.png";
import netflix from "../../assets/logo/marque/netflix.png";
import discover from "../../assets/logo/marque/discover.png";
import belfest from "../../assets/logo/marque/belfest.png";
import muda from "../../assets/logo/marque/mud.png";
import hmi from "../../assets/logo/marque/hmi.png";
import ggs from "../../assets/logo/marque/ggs.png";
import sanfest from "../../assets/logo/marque/sanfest.png";
import profitara from "../../assets/logo/marque/profitara.png";
import mw from "../../assets/logo/marque/mw.png";
import fusion from "../../assets/logo/marque/fusion.png";
import crann from "../../assets/logo/marque/crann.png";
import hez from "../../assets/logo/marque/hez.png";
import spartan from "../../assets/logo/marque/spartan.png";

export const logos = [
  { src: bumn, alt: "BUMN" },
  { src: kemenbud, alt: "Kementerian Budaya" },
  { src: intac, alt: "Intac" },
  { src: ui, alt: "Universitas Indonesia" },
  { src: netflix, alt: "Netflix" },
  { src: discover, alt: "Discover" },
  { src: belfest, alt: "Belfest" },
  { src: muda, alt: "Muda" },
  { src: hmi, alt: "HMI" },
  { src: ggs, alt: "GGS" },
  { src: sanfest, alt: "Sanfest" },
  { src: profitara, alt: "Profitara" },
  { src: mw, alt: "MW" },
  { src: fusion, alt: "Fusion" },
  { src: crann, alt: "Crann" },
  { src: hez, alt: "Hez" },
  { src: spartan, alt: "Spartan" },
];

const Marque = () => {
  return (
    <div className="absolute bottom-10 left-0 w-full overflow-hidden z-10">
      <motion.div
        className="flex w-max items-center gap-16 px-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 object-contain "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
