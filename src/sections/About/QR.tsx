import qrImage from "../../assets/images/Portfolio/qr2.png";

const QR = () => {

  const directDownloadLink = "https://drive.google.com/uc?export=download&id=1VKL8JoPvWQi_SmQ2x48rQXpg_N_NwlWA";

  return (
    <section className="pt-36 bg-[#00030D] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-xl md:text-3xl font-semibold gradient-text mb-8 tracking-tight">
          Scan QR Code Below to Access Company Profile (PDF)
        </h1>

        <a
          href={directDownloadLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block group"
          download
        >
          <div className="overflow-hidden rounded-xl flex items-center justify-center backdrop-blur-sm">
            <img
              src={qrImage}
              alt="Kolosal Portfolio QR"
              className="w-52 sm:w-64 md:w-72 rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <p className="mt-4 text-sm text-white/60 group-hover:text-white transition">
            Tap or scan to download our Company Profile (PDF)
          </p>
        </a>
      </div>
    </section>
  );
};

export default QR;