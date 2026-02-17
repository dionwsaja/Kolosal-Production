// import { BackgroundBeams } from "../../components/ui/background-beams";
import ContactSection from "./ContactSection";
import img from "../../assets/images/contact.png"

function Hero() {
  return (
    <section className="w-full bg-[#00030D] relative flex flex-col items-center justify-start antialiased overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 pt-48 pb-12 relative z-10 flex flex-col items-center justify-center">
        <img src={img} alt="img" className="w-full md:w-1/2 mb-16" />
        <ContactSection/>
      </div>
      {/* <BackgroundBeams className="absolute inset-0 z-0" /> */}
    </section>
  );
}

export { Hero };
