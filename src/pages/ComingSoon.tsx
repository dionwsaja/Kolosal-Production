import React from "react";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  const upcomingFeatures = [
    {
      title: "Insights",
      description: "Our upcoming blog and news hub. Behind-the-scenes stories, industry updates, and creative tips from the heart of production.",
      tag: "Newsletter"
    },
    {
      title: "Careers",
      description: "A dedicated platform for creative talents. Browse active projects, find manpower opportunities, and join our production crew.",
      tag: "Hiring"
    },
    {
      title: "Kolosal Store",
      description: "The official e-commerce for exclusive Kolosal gear. High-quality outfits, caps, jackets, and production essentials.",
      tag: "E-Commerce"
    }
  ];

  return (
    <div className="min-h-screen bg-[#00030D] text-slate-300 font-sans selection:bg-red-900 selection:text-white flex flex-col items-center">
      
      <header className="pt-48 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium mb-4 block ">
            Future Expansion
          </span>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#6c4120] to-[#f7d07f] bg-clip-text text-transparent tracking-tight py-4">
            Coming Soon
          </h1>
          <p className="text-lg mt-6 text-white/80 max-w-2xl mx-auto">
            We are building new ways to connect, collaborate, and grow. Explore the upcoming features arriving at Kolosal Production.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {upcomingFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group"
          >
            <span className="text-[10px] uppercase tracking-widest text-[#f7d07f]/60 px-2 py-1 border border-[#f7d07f]/30 rounded mb-6 inline-block">
              {feature.tag}
            </span>
            <h2 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#f7d07f] transition-colors">
              {feature.title}
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </main>

      {/* Call to Action */}
      <footer className="pb-20 text-center">
        <p className="text-sm text-slate-500 mb-6 italic">Want to stay updated?</p>
        <button className="bg-gradient-to-r from-[#6c4120] to-[#f7d07f] text-white px-8 py-3 rounded-full hover:scale-105 transition cursor-pointer font-medium shadow-lg shadow-yellow-900/10">
          <Link to="/contact">Contact Our Team</Link>
        </button>
        <div className="mt-10">
            <Link to="/" className="text-xs text-slate-600 hover:text-white transition-colors">
                ← Back to Home
            </Link>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;