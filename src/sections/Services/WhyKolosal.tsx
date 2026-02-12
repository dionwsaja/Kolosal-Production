const WHY_KOLOSAL = [
  {
    title: "Creative Partner Mindset",
    desc: "We collaborate closely with you to shape ideas, not just execute instructions.",
  },
  {
    title: "Story-First Approach",
    desc: "Every visual is built on narrative, purpose, and meaning — not trends alone.",
  },
  {
    title: "Professional Execution",
    desc: "Cinema-grade production standards applied consistently across all projects.",
  },
  {
    title: "Youth-Driven Perspective",
    desc: "Adaptive, culturally relevant, and aligned with today’s digital audience.",
  },
  {
    title: "Proven Field Experience",
    desc: "Trusted to handle major events and brands under real-world pressure.",
  },
  {
    title: "Integrated Visual Thinking",
    desc: "We consider where your content lives and how it performs, not just aesthetics.",
  },
  {
    title: "Clear Workflow",
    desc: "Structured process, transparent communication, and aligned expectations.",
  },
  {
    title: "Identity-Focused Results",
    desc: "Every output represents your brand in a memorable and authentic way.",
  },
];

const WhyKolosal = () => {
  return (
    <section className="w-full bg-[#00030D] py-36">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 w-full flex flex-col justify-center items-center text-center ">
          <span className="text-3xl md:text-4xl font-bold gradient-text tracking-tight text-white py-4">
            Why Kolosal Production
          </span>
          <p className="mt-4 text-white/60">
            More than a production house, we are a creative partner built on
            story, precision, and identity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {WHY_KOLOSAL.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-white/10
                bg-transparent
                backdrop-blur-sm
                p-6
                transition
                hover:border-white/20
                hover:bg-white/[0.04]
              "
            >
              <h3 className="text-base font-semibold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKolosal;
