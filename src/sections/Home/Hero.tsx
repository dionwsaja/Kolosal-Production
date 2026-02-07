import { Link } from "react-router-dom";
import bg from "../../assets/images/bg.png";
import Marque from "../../components/ui/Marque";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={bg}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/0" />
      <div ref={ref} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <span className="text-3xl md:text-7xl font-bold leading-tight max-w-4xl gradient-text">
            Turning Ideas Into <br /> Visual Works That Matter
          </span>
          <p className="mt-6 text-md md:text-xl text-white/60 max-w-5xl">
            Kolosal Production is a creative partner for brands, events, and
            individuals who value meaning behind every visual. Backed by real
            field experience across national-scale projects, we craft visuals
            that don’t just look good, but represent identity with purpose.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <Link
              to="/services"
              className="relative inline-block rounded-full p-0.5
              bg-[linear-gradient(170deg,rgba(255,255,255,0.6),#050812,rgba(255,255,255,0.6))]
              bg-size-[200%_200%]
              bg-left hover:bg-right
              transition-[background-position] duration-700 ease-in-out"
            >
              <div className="px-8 py-4 rounded-full bg-[#050812] text-white backdrop-blur-md font-semibold">
                Get Started
              </div>
            </Link>
            <Link
              to="/portfolio"
              className="relative inline-block rounded-full p-0.5
              bg-[linear-gradient(170deg,rgba(255,255,255,0.6),#050812,rgba(255,255,255,0.6))]
              bg-size-[200%_200%]
              bg-left hover:bg-right
              transition-[background-position] duration-700 ease-in-out"
            >
              <div className="px-8 py-4 rounded-full bg-[#050812] text-white backdrop-blur-md font-semibold">
                View Our Work
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Marque />
    </section>
  );
};

export default Hero;
