import { BackgroundBeams } from "../../components/ui/background-beams";
import ContactSection from "./ContactSection";

function Hero() {
  return (
    <section className="w-full bg-[#00030D] relative flex flex-col items-center justify-start antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-54 pb-12 relative z-10">
        <h1 className="text-2xl md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-[#f7d07f] to-[#6c4120] text-center font-sans font-bold">
          Contact Us
        </h1>
        
        <ContactSection/>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0" />
    </section>
  );
}

export { Hero };
