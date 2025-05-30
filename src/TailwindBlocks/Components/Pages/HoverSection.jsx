import React from "react";
// import living from '../Pages/LIVING1.jpg';
// import living2 from '../Pages/room-tv-sofa-interior-.jpg';
import image10 from '../Pages/images/auto2.jpg'
import image11 from '../Pages/images/auto3.webp'
import image12 from '../Pages/images/auto8.jpg'
import image13 from '../Pages/images/auto11.png'
import image14 from '../Pages/images/auto6.jpg'
import image16 from '../Pages/images/image16.jpg'

const HoverSection = () => {



  return (<>
    <section id="HoverSection" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Automation Types</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Automation brings comfort, efficiency, and control into daily living,It simplifies tasks like lighting, temperature, and security, saving time and energy ,while enhancing your lifestyle with seamless technology integration.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" src={image10} />
              <div className="px-8 py-10 relative z-10 w-full text-white bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Automation</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ceiling Stars</h1>
                <p className="leading-relaxed">Setting Up the Smart Lighting System Understanding the Smart Hub to Wifi.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" src={image11} />
              <div className="px-8 py-10 relative z-10 w-full text-white bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Rounded</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Bubble Model</h1>
                <p className="leading-relaxed">Experience the elegance of bubble-rounded smart lights ,Seamlessly controlled via smart hub for mood & style.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" src={image12} />
              <div className="px-8 py-10 relative z-10 w-full text-white bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Fingertips Control</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Effortless lighting control at your fingertips,</h1>
                <p className="leading-relaxed">Smart lights seamlessly managed through your tablet for the perfect ambiance.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" src={image13} />
              <div className="px-8 py-10 relative z-10 w-full text-white bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Auto hadny</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Handy control systems</h1>
                <p className="leading-relaxed">Pleasent simple ceiling lights with handy systems , comatible with all devices.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" src={image14} />
              <div className="px-8 py-10 relative z-10 w-full text-white bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Home Control</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Complete Automatic</h1>
                <p className="leading-relaxed">Total control of your home, anytime, anywhere,From lighting to climate manage it all with a single touch.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" src={image16} />
              <div className="px-8 py-10 relative z-10 w-full text-white bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Personalised Crafts</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Artisan-crafted décor meets modern innovation,</h1>
                <p className="leading-relaxed">Personalized handmade pieces enhanced with elegant automated lighting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>)
}


export default HoverSection;