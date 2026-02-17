import { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/services/1.jpg';
import img2 from '../assets/images/services/2.jpg';
import img3 from '../assets/images/services/3.jpg';
import img4 from '../assets/images/services/4.jpg';


interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}

const accordionItems = [
  {
    id: 1,
    title: 'Event Documentation',
    imageUrl: img1,
  },
  {
    id: 2,
    title: 'Personal Demand',
    imageUrl: img2,
  },
  {
    id: 3,
    title: 'Commercial & Product Visual',
    imageUrl: img3,
  },
  {
    id: 4,
    title: 'UI/UX & Web Development',
    imageUrl: img4,
  },
];

const AccordionItem = ({ item, isActive, onMouseEnter, onClick }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out bg-gray-100
        ${isActive 
          ? 'md:w-[400px] md:h-[450px] w-full h-[300px]' 
          : 'md:w-[60px] md:h-[450px] w-full h-[80px]'
        }
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
        }}
      />
      <div className={`
        absolute inset-0 transition-opacity duration-500
        ${isActive ? 'bg-black/5' : 'bg-black/30'}
      `}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>

      <span
        className={`
          absolute text-white font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'text-lg md:text-xl bottom-6 left-1/2 -translate-x-1/2 rotate-0'  
              : 'text-sm md:text-lg bottom-1/2 translate-y-1/2 md:bottom-24 left-1/2 -translate-x-1/2 rotate-0 md:rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-transparent font-sans">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold gradient-text leading-tight tracking-tighter">
              View Serve The best services at the best price
            </h1>
            <p className="mt-6 text-lg text-white max-w-xl mx-auto md:mx-0">
              We offer a wide range of services to meet your needs. From video production to web development, we have you covered.
            </p>
            <div className="mt-8">
              <Link
                to="/portfolio"
                className="bg-gradient-to-r from-[#6c4120] to-[#f7d07f] text-white px-8 py-3 rounded-full hover:scale-105 transition cursor-pointer font-medium shadow-lg shadow-yellow-900/10"
              >
                Our Portfolio
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
