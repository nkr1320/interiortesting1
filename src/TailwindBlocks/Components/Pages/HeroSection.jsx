import React from "react";
import living from '../Pages/LIVING1.jpg';
// import living2 from '../Pages/room-tv-sofa-interior-.jpg';

const HeroSection = () => {
  return (
    <>
      <section id="HeroSection" className="text-gray-600 body-font lg:mb-10 mt-[15px] lg:w-[97%] lg:mx-auto">

        {/* Wrapper div with relative positioning and background image */}
        <div className="relative container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={{ backgroundImage: `url(${living})`,  backgroundSize: 'cover',    backgroundPosition: 'center',  }} >
          {/* Image section (kept as-is) */}
          <div className="relative z-10 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-2 lg:mr-15 mb-9 mt-4 md:mt-9">
            <img className="object-cover object-center rounded" alt="hero" src={living} />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

          {/* Content container, positioned above the overlay */}
          <div className="relative z-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-4xl mb-9 mt-17 font-medium text-white">
              IMAGINE IT
              <br />
              DESIGN IT
              <br />
              LIVE IT
            </h1>

            <p className="mb-8 sm:text-2xl text-[15px] font-medium leading-relaxed text-white">
              We bring your dream home to life with personalized design,
              <br /> expert craftsmanship, and seamless execution.
            </p>



            <div className="flex justify-center mb-4 md:mb-8">
              {/* Email button */}
              <a
                href="mailto:example@email.com"
                className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>

              {/* WhatsApp button */}

              {/* WhatsApp button */}
              <a
                href="https://wa.me/919849003576"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

          </div>


        </div>
      </section>
    </>
  );
};

export default HeroSection;
