import { SparklesCore } from "../../components/ui/sparkles";

export function Hero() {
  return (
    <div className="h-[30rem]  relative w-full bg-[#00030D] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#f7d07f"
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#f7d07f] to-[#6c4120]">
          Our Services
        </h1>
        <p className="text-neutral-300 cursor-default text-center">
          From idea to Impact
        </p>
      </div>
    </div>
  );
}
