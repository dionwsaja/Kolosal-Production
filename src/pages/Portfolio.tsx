import { useState, useEffect } from "react";
import PortfolioGallery from "../sections/Portfolio/PortfolioGallery";
import QR from "../sections/Portfolio/QR";
import { useSearchParams } from "react-router-dom";


type TabType = "event" | "personal" | "commercial" | "web";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>("event");

  useEffect(() => {
    const tabParam = searchParams.get("tab") as TabType;
    if (tabParam && ["event", "personal", "commercial", "web"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const tabs = [
    { key: "event", label: "Event Documentation" },
    { key: "personal", label: "Personal Demand" },
    { key: "commercial", label: "Commercial & Product Visual" },
    { key: "web", label: "UI/UX & Web Development" },
  ];

  const renderGallery = () => {
    switch (activeTab) {
      case "event":
        return <PortfolioGallery folder="event" columns={3} />;
      case "personal":
        return <PortfolioGallery folder="personal" columns={3} />;
      case "commercial":
        return <PortfolioGallery folder="commercial" columns={3} />;
      case "web":
        return <PortfolioGallery folder="web" columns={4} />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#00030D] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">

        <div className="mb-12 pt-24">
          <span className="text-4xl gradient-text md:text-5xl font-bold">
            Our Portfolio
          </span>
          <p className="text-white/60 mt-2">
            Selected works based on our services
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 w-full max-w-4xl">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-[#f7d07f] to-[#f7d07f]/60 text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      
        <div className="w-full">
          {renderGallery()}
        </div>
        <QR />
      </div>
    </section>
  );
};

export default Portfolio;
