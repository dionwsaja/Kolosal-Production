import bg from "../../assets/images/frame.png"

export function InFrame() {
  return (
    <div className="w-full h-full">
      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col items-center">
        <span className="text-center gradient-text text-xl md:text-5xl py-16">
          In Frame With Kolosal
        </span>
        <img src={bg} alt="frame" className="w-full h-auto" />
      </div>
    </div>
  );
}
