import {
  FaHandshake,
  FaBookOpen,
  FaFilm,
  FaBolt,
  FaBriefcase,
  FaLayerGroup,
  FaProjectDiagram,
  FaFingerprint,
} from "react-icons/fa";

const WHY_KOLOSAL = [
  {
    title: "Creative Partner Mindset",
    desc: "We collaborate closely with you to shape ideas, not just execute instructions.",
    icon: FaHandshake,
  },
  {
    title: "Story-First Approach",
    desc: "Every visual is built on narrative, purpose, and meaning, not trends alone.",
    icon: FaBookOpen,
  },
  {
    title: "Professional Execution",
    desc: "Cinema-grade production standards applied consistently across all projects.",
    icon: FaFilm,
  },
  {
    title: "Youth-Driven Perspective",
    desc: "Adaptive, culturally relevant, and aligned with today’s digital audience.",
    icon: FaBolt,
  },
  {
    title: "Proven Field Experience",
    desc: "Trusted to handle major events and brands under real-world pressure.",
    icon: FaBriefcase,
  },
  {
    title: "Integrated Visual Thinking",
    desc: "We consider where your content lives and how it performs, not just aesthetics.",
    icon: FaLayerGroup,
  },
  {
    title: "Clear Workflow",
    desc: "Structured process, transparent communication, and aligned expectations.",
    icon: FaProjectDiagram,
  },
  {
    title: "Identity-Focused Results",
    desc: "Every output represents your brand in a memorable and authentic way.",
    icon: FaFingerprint,
  },
];

const WhyKolosal = () => {
  return (
    <section className="w-full bg-[#00030D] py-36">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 w-full flex flex-col justify-center items-center text-center">
          <span className="text-3xl md:text-5xl font-bold gradient-text tracking-tight text-white py-4">
            Why Kolosal Production
          </span>
          <p className="mt-4 text-white/60">
            More than a production house, we are a creative partner built on
            story, precision, and identity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {WHY_KOLOSAL.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-transparent
                  p-8
                  transition
                  hover:border-white/50
                  
                "
              >
                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    border border-white/10
                    flex items-center justify-center
                    mb-6
                  "
                >
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKolosal;
