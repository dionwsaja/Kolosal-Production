import { useState } from "react";
import PortfolioGallery from "../sections/Portfolio/PortfolioGallery";
import QR from "../sections/Portfolio/qr";

const tabs = [
  { key: "event", label: "Event Documentation" },
  { key: "personal", label: "Personal Demand" },
  { key: "commercial", label: "Commercial & Product" },
  { key: "ui", label: "UI/UX & Web Development" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("event");

  return (
    <section className="bg-[#00030D] text-white py-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-y-6 justify-center items-center text-center">
        <div className="mb-10">
          <span className="text-3xl gradient-text md:text-5xl font-bold">Our Portfolio</span>
          <p className="text-white/60">
            Selected works based on our services
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-md text-sm transition
                ${
                  activeTab === tab.key
                    ? "bg-linear-to-r  from-[#f7d07f] to-[#f7d07f]/60 text-white"
                    : "bg-white/10 hover:bg-white/20"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "event" && <PortfolioGallery folder="event" />}
        {activeTab === "personal" && <PortfolioGallery folder="personal" />}
        {activeTab === "commercial" && (
          <PortfolioGallery folder="commercial" />
        )}
        {activeTab === "ui" && <PortfolioGallery folder="ui" />}
      </div>
      <QR/>
    </section>
  );
};

export default Portfolio;
