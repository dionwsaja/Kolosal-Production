import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import Marque from "../../components/ui/Marque";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import {Link} from "react-router-dom";
import { LiquidButton } from "../../components/liquid-glass-button";



export function Demo() {
     const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
      },
    );
  }, []);
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative min-h-screen flex flex-col items-center -mt-36 justify-center overflow-hidden w-full"
      >
        <div ref={ref} className="relative z-10 w-full px-4 mb-12  ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <span className="text-xl w-full md:w-auto md:text-5xl mb-2 font-bold leading-tight max-w-7xl md:max-w-6xl gradient-text">
            Let’s explore our contribution and witness <br className="hidden md:block"/> how we turn ideas into visual works that matter
          </span>
          <p className=" text-xs w-full md:w-auto md:text-lg text-white/60 max-w-6xl">
            Kolosal Production is a creative partner for brands, events, and
            individuals who value meaning behind every visual. Backed by real
            field experience across national-scale projects, we craft visuals
            that don’t just look good, but represent identity with purpose.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/services"
            >
              <LiquidButton className="w-full md:w-auto">
                View Our Services   
              </LiquidButton>
            </Link>
            <Link
              to="/portfolio"
              
            >
              <LiquidButton className="w-full md:w-auto">
                View Our Work   
              </LiquidButton>
            </Link>
          </div>  
        </div>
      </div>
        <Marque />
      </motion.div>
    </AuroraBackground>
  );
}
