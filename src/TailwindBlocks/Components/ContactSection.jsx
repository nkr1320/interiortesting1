import React from "react";
import NavbarSection from "./NavbarSection";

const ContactSection = () => {
  return (
    <>
    <NavbarSection />
    <section id="ContactSection" className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 mx-auto mt-15 p-15" >
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="w-full md:w-2/3 bg-gray-300 rounded-lg overflow-hidden p-6 relative h-72 md:h-auto">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hyderabad%20500085&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
            <div className="bg-white relative flex flex-col md:flex-row py-6 px-4 md:px-6 mt-4 md:mt-10 ml-0 md:ml-5 rounded-[10px] shadow-md z-10">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-sm">
                  1-2-33/1, Plot No. 12, 4/A,<br />
                  Prashanth Nagar, High Tension Line,<br />
                  Nizampet Road, Hyderabad, Telangana, 500085
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:harinileelainteriorcompany@gmail.com"
                  className="text-indigo-500 leading-relaxed text-sm"
                >
                  harinileelainteriorcompany@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-sm">984-900-3576</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
