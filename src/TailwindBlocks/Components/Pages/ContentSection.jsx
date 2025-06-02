import React, { useState } from "react";



<<<<<<< HEAD
import image1 from '../Pages/images/image12.jpg';
import image17 from '../Pages/images/image18.jpg';
import image18 from '../Pages/images/image19.jpg';
import image19 from '../Pages/images/image17.jpg';
import image20 from '../Pages/images/image13.jpg';
import image21 from '../Pages/images/image14.jpg';
=======
import image1 from '../Pages/woodimages/furniture13.jpg';
import image17 from '../Pages/images/image18.jpg';
import image18 from '../Pages/images/image19.jpg';
import image19 from '../Pages/images/image17.jpg';
import image20 from '../Pages/woodimages/furniture11.jpg';
import image21 from '../Pages/woodimages/bathtiles1.jpg';
import NavbarSection from "../NavbarSection";

>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)

const galleryData = [
  {
    img: image1,
        title: "Velvet Retreat",

    subtitle: "Luxury Living Room Design",
    desc: "A plush living space with deep jewel tones, marble accents, and warm lighting for a high-end, cozy ambiance.",
  },
  {
    img: image17,
        title: "Urban  Zen",

    subtitle: "Modern Minimalist Bedroom",
    desc: "Clean lines, neutral palettes, and natural textures creating a calm and balanced sleeping sanctuary.",
  },
  {
    img: image18,
        title: "Artisan Blend",

    subtitle: "Rustic-Modern Kitchen",
    desc: "Combines wooden textures, matte finishes, and smart appliances to merge traditional charm with modern utility.",
  },
  {
    img: image19,
        title: "Golden Nook",

    subtitle: "Elegant Reading Corner",
    desc: "A curated corner with gold accents, ambient lighting, and vintage décor for quiet luxury and comfort.",
  },
  {
    img: image20,
        title: "Midnight Luxe",

    subtitle: "Bold Dining Area",
    desc: "Dark walls, contemporary furniture, and metallic highlights offer a dramatic yet refined dining experience.",
  },

  {
    img: image21,
        title: "Terra Glow",

    subtitle: "Mediterranean-Inspired Bathroom",
    desc: "Earthy tiles, arched mirrors, and soft lighting evoke warmth and timeless Mediterranean style.",
  },
];


const ContentSection = () => {


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
<<<<<<< HEAD
    <div className="headingtext text-[35px] font-bold text-center mt-8 mb-9">
            Why choose us ?
          </div>
<section id="ContentSection" className="relative w-[90%] lg:w-[86.3%] lg:mx-auto h-[calc(100vh-210px)] lg:h-screen overflow-hidden text-white flex items-center justify-center m-[20px] rounded-2xl sm:mr-0 sm:p-15 sm:rounded-none">
=======

    <NavbarSection />

    <div className="headingtext text-[35px] font-bold text-center mt-8 mb-9">
      
            Why choose us ?
          </div>
<section id="ContentSection" className="relative w-[90%] lg:w-[90%] lg:mx-auto h-[calc(100vh-210px)] lg:h-screen overflow-hidden text-white flex items-center justify-center m-[20px] rounded-2xl sm:mr-0 sm:p-15 sm:rounded-none">
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)
      {/* Background Image */}
      <img
        src={current.img}
        alt="Slide Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-10" />
=======
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-20" />
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
<<<<<<< HEAD
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl font-bold hover:text-green-400"
=======
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-6xl font-bold hover:text-green-400"
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)
      >
        ❮
      </button>
      <button
        onClick={goToNext}
<<<<<<< HEAD
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-4xl font-bold hover:text-green-400"
=======
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 text-white text-6xl font-bold hover:text-green-400"
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)
      >
        ❯
      </button>

      {/* Text Overlay */}
<<<<<<< HEAD
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between h-full">
=======
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between h-full lg:mt-70">
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)
        <div className="lg:ml-auto text-center lg:text-right max-w-xl">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            {current.title}
          </h2>
<<<<<<< HEAD
                    <h4 className="text-green-400 text-sm mb-2">{current.subtitle}</h4>

          <p className="mb-6">{current.desc}</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
            READ MORE
          </button>
=======
                    <h2 className="text-green-400 lg:text-4xl font-bold text-sm  lg:mb-8">{current.subtitle}</h2>

<p className="lg:text-blue-400 lg:text-2xl font-bold mb-6 text-shadow-black">
  {current.desc}
</p>
          {/* <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
            READ MORE
          </button> */}
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)
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


export default ContentSection;
