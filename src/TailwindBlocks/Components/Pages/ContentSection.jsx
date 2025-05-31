import React from "react";
import image1 from '../Pages/images/image4.jpg';
import image17 from '../Pages/images/image10.jpg';
import image18 from '../Pages/images/image11.jpg';
import image19 from '../Pages/images/image12.jpg';
import image20 from '../Pages/images/image13.jpg';
import image21 from '../Pages/images/image14.jpg';

const ContentSection = () => {
  return (
    <>
      <section id="ContentSection" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center text-center lg:text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:mb-0 mb-4 lg:mr-4">
              Why Choose Us?
            </h1>
            <p className="lg:w-2/3 leading-relaxed text-base px-4">
              A curated collection of timeless, modern, and luxurious interior designs tailored to fit every lifestyle and aesthetic. From cozy corners to elegant living spaces, we blend creativity with functionality.
            </p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-2xl" src={image1} />
              </div>
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-2xl" src={image17} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-2xl" src={image18} />
              </div>
            </div>
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-2xl" src={image19} />
              </div>
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-2xl" src={image20} />
              </div>
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-2xl" src={image21} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContentSection;
