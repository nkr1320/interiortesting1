
<<<<<<< HEAD
import image10 from '../Pages/images/auto2.jpg'
import image11 from '../Pages/images/auto3.webp'
import image12 from '../Pages/images/auto8.jpg'
=======
import image10 from '../Pages/woodimages/smarthome.webp'
import image11 from '../Pages/woodimages/aiintegrated.webp'
import image12 from '../Pages/woodimages/homekit.webp';
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)
import image13 from '../Pages/images/auto11.png'
import image14 from '../Pages/woodimages/smart.png'
import image16 from '../Pages/woodimages/kitchen1.jpg'

import React, { useState } from "react";
import NavbarSection from '../NavbarSection'




const galleryData = [
  {
    img: image10,
    subtitle: "Smart Haven ",
    title: " Full-Home Automation System",
    desc: "A centralized smart system controlling lighting, HVAC, security, and entertainment from one interface.",
  },
  {
    img: image11,
    subtitle: "Voice-Controlled Living",
    title: "AI-Integrated Living Room",
    desc: "Hands-free control of lights, music, and blinds through Alexa/Google Assistant integration.",
  },
  {
    img: image12,
    subtitle: "  ",
    title: " Intelligent Lighting Design",
    desc: "Automated ambient lighting scenes based on time, activity, or user mood with motion sensors and app control.",
  },
  {
    img: image13,
    subtitle: "Secure Nest",
    title: "Advanced Smart Security System",
    desc: "Real-time surveillance, facial recognition, smart door locks, and mobile alerts for complete home safety.",
  },
  {
    img: image14,
    subtitle: "EcoSync",
    title: "Smart Energy Management",
    desc: "IoT-enabled smart meters and thermostats that reduce energy consumption and optimize utility usage.",
  },

  {
    img: image16,
    subtitle: "Chef's Command  ",
    title: " Smart Modular Kitchen",
    desc: "Voice-activated appliances, sensor taps, and real-time inventory tracking for a futuristic cooking experience.",
  },
];

import React, { useState } from "react";




const galleryData = [
  {
    img: image10,
    subtitle: "Smart Haven ",
    title: " Full-Home Automation System",
    desc: "A centralized smart system controlling lighting, HVAC, security, and entertainment from one interface.",
  },
  {
    img: image11,
    subtitle: "Voice-Controlled Living",
    title: "AI-Integrated Living Room",
    desc: "Hands-free control of lights, music, and blinds through Alexa/Google Assistant integration.",
  },
  {
    img: image12,
    subtitle: "Mood Maker",
    title: " Intelligent Lighting Design",
    desc: "Automated ambient lighting scenes based on time, activity, or user mood with motion sensors and app control.",
  },
  {
    img: image13,
    subtitle: "Secure Nest",
    title: "Advanced Smart Security System",
    desc: "Real-time surveillance, facial recognition, smart door locks, and mobile alerts for complete home safety.",
  },
  {
    img: image14,
    subtitle: "EcoSync",
    title: "Smart Energy Management",
    desc: "IoT-enabled smart meters and thermostats that reduce energy consumption and optimize utility usage.",
  },

  {
    img: image16,
    subtitle: "Chef's Command  ",
    title: " Smart Modular Kitchen",
    desc: "Voice-activated appliances, sensor taps, and real-time inventory tracking for a futuristic cooking experience.",
  },
];

const HoverSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = galleryData[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  };

  return (<>
<<<<<<< HEAD
<div className="headingtext text-[35px] font-bold text-center">
            Automation Works
          </div>
<section id="ContentSection" className="relative w-[90%] lg:w-[86.3%] lg:mx-auto h-[calc(100vh-210px)] lg:h-screen overflow-hidden text-white flex items-center justify-center m-[20px] rounded-2xl sm:mr-0 sm:p-15 sm:rounded-none">
=======
      <NavbarSection />

<div className="headingtext text-[35px] font-bold text-center">
            Automation Works
          </div>
<section id="ContentSection" className="relative w-[90%] lg:w-[92%] lg:mx-auto h-[calc(100vh-210px)] lg:h-screen overflow-hidden text-white flex items-center justify-center m-[20px] rounded-2xl sm:mr-0 sm:p-15 sm:rounded-none">
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)

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
<<<<<<< HEAD
          <h4 className="text-green-400 text-sm mb-2">{current.subtitle}</h4>
=======
          <h4 className="text-green-400 text-sm mb-2 lg:text-4xl font-bold">{current.subtitle}</h4>
>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            {current.title}
          </h2>
          <p className="mb-6">{current.desc}</p>
<<<<<<< HEAD
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
            READ MORE
          </button>
=======
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
<<<<<<< HEAD
=======

>>>>>>> ab6a0e7 (interiortestin1 final ne tesg)



export default HoverSection;
