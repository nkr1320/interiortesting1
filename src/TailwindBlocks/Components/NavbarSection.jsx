import React from "react";
import logo from '../Components/Pages/images/harinileelalogo.png'
const NavbarSection = () => {

  return (<>
    <header
      id="NavbarSection"
      className="text-gray-600 body-font fixed w-full top-0 z-50 bg-white shadow-md"
    >
      <header id="NavbarSection" className="text-gray-800 body-font" >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-9">
<img src={logo} alt="logo" className="w-10 h-10 p-1 rounded-full" />

            <span className="ml-3 text-xl ">HARINILEELA</span>
          </a>
<nav className="flex flex-wrap justify-center items-center gap-4 md:ml-auto md:justify-end md:gap-0 text-base mr-10">
  <a href="#HeroSection" className="text-[23px] hover:text-orange-600 text-900 font-semibold md:mr-9">Home</a>
  <a href="#ContentSection" className="text-[23px] hover:text-orange-600 text-900 font-semibold md:mr-9">Explore</a>
  <a href="#GallerySection" className="text-[23px] hover:text-orange-600 text-900 font-semibold md:mr-9">Projects</a>
  <a href="#OurServices" className="text-[23px] hover:text-orange-600 text-900 font-semibold md:mr-9">Services</a>
  <a href="#ContactSection" className="text-[23px] hover:text-orange-600 text-900 font-semibold md:mr-9">Contact</a>
  <a href="#TeamSection" className="text-[23px] hover:text-orange-600 text-900 font-semibold md:mr-9">Team</a>
</nav>

          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </header>
  </>)

}

export default NavbarSection;