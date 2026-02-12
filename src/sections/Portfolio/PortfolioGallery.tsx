import React from "react";

interface PortfolioGalleryProps {
  folder: "event" | "personal" | "commercial" | "web";
  columns: number;
}

// STATIC GLOB
const allImages = import.meta.glob(
  "../../assets/images/*/*.jpg",
  { eager: true, import: "default" }
) as Record<string, string>;

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

  return (
    <div
      className={`
        grid gap-4
        ${
          folder === "web"
            ? "grid-cols-2 md:grid-cols-4"
            : columns === 3
            ? "grid-cols-3"
            : "grid-cols-4"
        }
      `}
    >
      {images.map((img, index) => {
        const number = parseInt(img.filename.match(/(\d+)/)?.[1] || "0");

        const isPersonalPortrait =
          folder === "personal" &&
          ((number >= 4 && number <= 6) ||
            (number >= 16 && number <= 18));

        const isCommercialPortrait = folder === "commercial";
        const isEvent = folder === "event";
        const isWeb = folder === "web";

        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl group bg-black"
          >
            {/* EVENT FIXED LANDSCAPE */}
            {isEvent && (
              <div className="aspect-video">
                <img
                  src={img.src}
                  alt={img.filename}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* PERSONAL */}
            {folder === "personal" && (
              <img
                src={img.src}
                alt={img.filename}
                className={`
                  w-full
                  ${
                    isPersonalPortrait
                      ? "object-contain"
                      : "aspect-video object-cover"
                  }
                `}
              />
            )}

            {/* COMMERCIAL */}
            {isCommercialPortrait && (
              <img
                src={img.src}
                alt={img.filename}
                className="w-full object-contain"
              />
            )}

            {/* WEB */}
            {isWeb && (
              <a
                href={webLinks[img.filename]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img.src}
                  alt={img.filename}
                  className="w-full aspect-video object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-sm md:text-base font-semibold tracking-wide">
                    Visit Website
                  </span>
                </div>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioGallery;
