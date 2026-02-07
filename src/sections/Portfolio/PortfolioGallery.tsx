interface PortfolioGalleryProps {
  folder: string;
}

const uiLinks: Record<number, string> = {
  1: "https://profitara.vercel.app/",
  2: "https://minimiwaste.vercel.app/",
  3: "https://ricoanddiana.vercel.app/",
  4: "https://dionwsaja.github.io/ac_kw_2/",
};

const PortfolioGallery = ({ folder }: PortfolioGalleryProps) => {
  const imageModules = import.meta.glob(
    "/src/assets/images/Portfolio/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}",
    { eager: true }
  );

  const images = Object.keys(imageModules)
    .filter((path) => path.includes(`/Portfolio/${folder}/`))
    .map((path) => {
      const match = path.match(/\/(\d+)\.(jpg|jpeg|png|webp)$/i);
      const order = match ? Number(match[1]) : 0;

      
      const src = (imageModules[path] as { default: string }).default;

      return { path, src, order };
    })
    .sort((a, b) => a.order - b.order);

  if (images.length === 0) {
    return (
      <div className="text-center py-10 w-full text-white/50">
        No images found for {folder}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {images.map((img, index) => {
        const isUI = folder === "ui";
        const link = isUI ? uiLinks[img.order] : null;

        const ImageContent = (
          <img
            src={img.src}
            alt={`${folder} ${img.order}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        );

        return (
          <div
            key={img.path}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="overflow-hidden rounded-md aspect-[3/4] group"
          >
            {isUI && link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {ImageContent}
              </a>
            ) : (
              ImageContent
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioGallery;
