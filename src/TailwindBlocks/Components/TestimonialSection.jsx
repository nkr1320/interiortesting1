import React from "react";
import harinileelalogo from '../Components/Pages/images/harinileelalogo.png';
import NavbarSection from "./NavbarSection";
const TestimonialSection = () =>{


    return(<>
    <NavbarSection />
    <section id="TestimonialSection" className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={harinileelalogo} />
          <p className="leading-relaxed">Transforming spaces into timeless masterpieces.
Expert in residential and commercial interior design with a passion for elegance and functionality.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p className="text-gray-500">Senior Interior Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={harinileelalogo} />
          <p className="leading-relaxed">Driving projects from vision to reality with strategic leadership.
Experienced in managing teams, timelines, and client success with precision.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p className="text-gray-500">Senior Manager</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={harinileelalogo} />
          <p className="leading-relaxed">Visionary leader behind Harinileela’s creative journey,Passionate about blending design innovation with client satisfaction.Guiding the team with purpose, excellence, and a future-forward mindset.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Harini Leela</h2>
          <p className="text-gray-500">CEO</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>)
}

export default TestimonialSection;