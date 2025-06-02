import React, { useState } from "react";



import image1 from '../Pages/images/image12.jpg';
import image17 from '../Pages/images/image18.jpg';
import image18 from '../Pages/images/image19.jpg';
import image19 from '../Pages/images/image17.jpg';
import image20 from '../Pages/images/image13.jpg';
import image21 from '../Pages/images/image14.jpg';

const galleryData = [
  {
    img: image1,
        title: "Why Choose us?",

    subtitle: "THE SUBTITLE",
    desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    img: image17,
        title: "Why Choose us?",

    subtitle: "THE SUBTITLE",
    desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    img: image18,
        title: "Why Choose us?",

    subtitle: "THE SUBTITLE",
    desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    img: image19,
        title: "Why Choose us?",

    subtitle: "THE SUBTITLE",
    desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    img: image20,
        title: "Why Choose us?",

    subtitle: "THE SUBTITLE",
    desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },

  {
    img: image21,
        title: "Why Choose us?",

    subtitle: "THE SUBTITLE",
    desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
];

const AutomationSection = () => {
  
const [currentIndex, setCurrentIndex] = useState(0);
  const current = galleryData[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  };

  return (
    <>
        <NavbarSection />

<section id="ContentSection" className="relative w-[90%] lg:w-[97%] lg:mx-auto h-[calc(100vh-210px)] lg:h-screen overflow-hidden text-white flex items-center justify-center m-[20px] rounded-2xl sm:mr-0 sm:p-15 sm:rounded-none">
      {/* Background Image */}
      <img
        src={current.img}
        alt="Slide Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-10" />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl font-bold hover:text-green-400"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl font-bold hover:text-green-400"
      >
        ❯
      </button>

      {/* Text Overlay */}
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between h-full">
        <div className="lg:ml-auto text-center lg:text-right max-w-xl">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            {current.title}
          </h2>
                    <h4 className="text-green-400 text-sm mb-2">{current.subtitle}</h4>

          <p className="mb-6">{current.desc}</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
            READ MORE
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-6 w-full flex justify-center items-center gap-2 z-30">
        {galleryData.map((item, idx) => (
          <img
            key={idx}
            src={item.img}
            alt={`Thumbnail ${idx}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-16 h-10 object-cover border-2 rounded cursor-pointer transition duration-200 ${currentIndex === idx ? "border-green-500" : "border-white"
              } hover:border-green-400`}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default AutomationSection;
