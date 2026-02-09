import { BackgroundBeams } from "../../components/ui/background-beams";
import ContactSection from "./ContactSection";

function Hero() {
  return (
    <section className="w-full bg-[#00030D] relative flex flex-col items-center justify-start antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-54 pb-12 relative z-10">
        <span className="text-3xl md:text-5xl gradient-text mb-8  font-bold text-center flex justify-center items-center">
          Contact Us
        </span>
        
        <ContactSection/>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0" />
    </section>
  );
}

export { Hero };
