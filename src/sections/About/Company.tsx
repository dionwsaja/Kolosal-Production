import bg from "../../assets/images/pp.jpg";

const points = [
  {
    title: "Creative Partner, Not a Vendor",
    desc: "We collaborate from idea to execution",
  },
  {
    title: "Youth-Driven Production House",
    desc: "Powered by the energy, perspective, and adaptability of a new generation.",
  },
  {
    title: "Integrated Visual & Digital Solutions",
    desc: "Visual storytelling combined with functional digital execution.",
  },
  {
    title: "Proven Field Experience",
    desc: "Handled major events and brands with real-world production standards.",
  },
];

export default function Company() {
  return (
    <section className="relative w-full py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <img
              src={bg}
              alt="Kolosal Production"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black/30" /> */}
          </div>
          <div className="flex flex-col gap-10">
            <div className="space-y-4 w-full">
              <p className="text-3xl md:text-5xl gradient-text font-semibold  text-center md:text-left">
                Who We Are
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                A Production House Built on <br className="hidden md:block" />
                Ideas, Energy, and Execution
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {points.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              Kolosal Production exists to transform ideas into tangible visual
              works that are not only aesthetically strong, but also capable of
              representing identity in a memorable and meaningful way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
