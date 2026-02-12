import { SparklesCore } from "../../components/ui/sparkles";

export function Hero() {
  return (
    <div className="h-[30rem] relative w-full bg-[#00030D] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen opacity-50">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full "
          particleColor="#f7d07f"
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-5xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f7d07f] to-[#6c4120]">
          About Us
        </h1>
        <p className="text-white/60 cursor-default text-center text-xs md:text-sm max-w-7xl px-4">
          Kolosal Production is a multimedia production house driven by the energy and innovation of the younger generation. We are here as a creative partner, ready to help you capture every precious moment through aesthetic visual integration and functional digital solutions. With an adaptive youthful spirit, we are committed to transforming your ideas into tangible works that are not only beautiful, but also capable of representing your identity in a profound and memorable way.
          
          The quality of our work is backed by the experience of our Project Director, who has served as a photographer for various major events, such as BUMN, Netflix, and Byon Combat. We apply our field experience in handling documentation for these leading companies and events to every project. This ensures that every piece of work we deliver meets proven technical and professional standards.

        </p>
      </div>
    </div>
  );
}
