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
      <div className="flex flex-col items-center justify-center gap-4 pt-32 relative z-20">
        <h1 className="md:text-7xl text-5xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f7d07f] to-[#6c4120]">
          About Us
        </h1>
        <p className="text-white/60 cursor-default text-center text-xs md:text-sm max-w-2xl md:max-w-5xl px-4">
        Kolosal Production is a youth-driven multimedia house that blends aesthetic storytelling with functional digital solutions. We transform your ideas into professional, high-impact works that authentically capture your identity. Backed by a Project Director with field experience for industry leaders like BUMN, Netflix, and Byon Combat, we bring elite technical standards and a modern, adaptive energy to every project we handle.

        </p>
      </div>
    </div>
  );
}
