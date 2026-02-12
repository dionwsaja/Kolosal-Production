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

// Web links mapping
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
  <>
    {/* Text only for Web page */}
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
          ((number >= 4 && number <= 6) ||
            (number >= 16 && number <= 18));

        const isCommercialPortrait = folder === "commercial";
        const isEvent = folder === "event";

        const imageElement = (
          <img
            src={img.src}
            alt={img.filename}
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
