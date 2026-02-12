import { CardSpotlight } from "../../components/ui/card-spotlight";
import { Camera, Package, Monitor, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ServiceOverview() {
  const navigate = useNavigate();
  const services = [
    {
      id: "event",
      title: "Event Documentation",
      desc: "Comprehensive visual documentation for large-scale events. We handle technical logistics and multi-angle shooting with fast turnaround, delivering publication-ready high-quality video.",
      icon: Camera,
    },
    {
      id: "personal",
      title: "Personal Demand",
      desc: "Full-service documentation for your personal activities. We handle production and social media management, keeping your digital presence active and professional.",
      icon: UserRound,
    },
    {
      id: "commercial",
      title: "Commercial & Product Design",
      desc: "Commercial photo and video services to define your product identity. We create persuasive visuals that highlight product advantages, ready for any sales platform.",
      icon: Package,
    },
    {
      id: "web",
      title: "UI/UX & Web Development",
      desc: "User-focused website development with attractive visuals. We build professional, high-performance digital platforms to strengthen your online presence.",
      icon: Monitor,
    },
  ];

  return (
    <div className="max-w-7xl pt-16 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
      {services.map((service, index) => (
        <CardSpotlight
          key={index}
          className="h-full w-full p-6 cursor-pointer"
          onClick={() => navigate(`/portfolio?tab=${service.id}`)}
        >
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center pt-16 gap-4 w-full ">
            <service.icon className="w-16 h-16 text-white text-opacity-80 flex-shrink-0" />
            <h1 className="text-white text-md font-bold tracking-wide w-full flex items-center justify-center min-h-[2.5rem]">
              {service.title}
            </h1>
            <p className="text-white text-opacity-80 text-sm">{service.desc}</p>
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
}
