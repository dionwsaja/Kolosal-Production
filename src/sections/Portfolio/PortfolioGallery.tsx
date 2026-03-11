import React from "react";

interface PortfolioGalleryProps {
  folder: "event" | "personal" | "commercial" | "web";
  columns: number;
}

const allImages = import.meta.glob("../../assets/images/*/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const webLinks: Record<string, string> = {
  "1.jpg": "https://profitara.vercel.app",
  "2.jpg": "https://minimiwaste.vercel.app",
  "3.jpg": "https://fusionlab.vercel.app",
  "4.jpg": "https://ricoanddiana.vercel.app",
};

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  folder,
  columns,
}) => {
  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/images/${folder}/`))
    .map(([path, src]) => ({
      path,
      src,
      filename: path.split("/").pop() || "",
    }));

  images.sort((a, b) => {
    const numA = parseInt(a.filename.match(/(\d+)/)?.[1] || "0");
    const numB = parseInt(b.filename.match(/(\d+)/)?.[1] || "0");
    return numA - numB;
  });

  let groupSize = 3;
  let names: string[] = [];

  if (folder === "event") {
    names = [
      "BUMN",
      "BPDHMI",
      "Discover Nusantara",
      "Belfest",
      "Byon Combat",
      "Intac Base",
      "Muda-mudahan",
      "Sanfest",
      "Penutupan Kamaba",
    ];
  } else if (folder === "personal") {
    names = [
      "Mini Soccer",
      "Padel",
      "First Day Berjakun",
      "Public Proposal",
      "Recording Assistant",
      "Tiba-tiba Wisuda",
      "Personal Trip Documentation",
    ];
  } else if (folder === "commercial") {
    names = [
      "Crann Parfume",
      "Hez Parfume",
      "Food Photography",
      "Food Photography",
      "Graphic Design",
    ];
  } else if (folder === "web") {
    groupSize = 1;
    names = ["Profitara", "Minimiwaste", "Fusionlab", "Wedding Website"];
  }

  return (
    <>
      {folder === "web" && (
        <p className="text-sm text-white/60 mb-6 text-center">
          Click the websites below
        </p>
      )}

      <div
        className={`grid gap-4 ${
          folder === "web"
            ? "grid-cols-2 md:grid-cols-4"
            : columns === 3
              ? "grid-cols-3"
              : "grid-cols-4"
        }`}
      >
        {images.map((img, index) => {
          const number = parseInt(img.filename.match(/(\d+)/)?.[1] || "0");

          const isPersonalPortrait =
            folder === "personal" &&
            ((number >= 4 && number <= 6) || (number >= 16 && number <= 18));

          const isCommercialPortrait = folder === "commercial";
          const isEvent = folder === "event";

          let imageElement = (
            <img
              src={img.src}
              alt={img.filename}
              loading="lazy"
              decoding="async"
              className={`
                w-full
                ${isEvent ? "object-cover" : ""}
                ${
                  isPersonalPortrait || isCommercialPortrait
                    ? "object-contain"
                    : ""
                }
                hover:scale-105 transition duration-300
              `}
            />
          );

          const groupIndex = Math.floor(index / groupSize);
          const name = names[groupIndex] || "";

          if (name) {
            imageElement = (
              <div className="relative">
                {imageElement}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5 md:px-4 md:py-3 text-center">
                  <span className="block text-white font-medium text-[10px] sm:text-xs md:text-sm leading-[1.1] whitespace-normal break-normal">
                    {name}
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className="overflow-hidden rounded-xl bg-black">
              {folder === "web" ? (
                <a
                  href={webLinks[img.filename]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {imageElement}
                </a>
              ) : (
                imageElement
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PortfolioGallery;
