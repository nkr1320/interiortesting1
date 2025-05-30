import React, { useState } from "react";
import logo from '../Components/Pages/images/harinileelalogo.png';

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        id="NavbarSection"
        className="text-gray-600 body-font fixed w-full top-0 z-50 bg-white shadow-md"
      >
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          
          {/* Logo + Brand + Hamburger */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <a className="flex items-center text-gray-900">
              <img src={logo} alt="logo" className="w-10 h-10 p-1 rounded-full" />
              <span className="ml-3 text-xl">HARINILEELA</span>
            </a>

            {/* Hamburger - only on small screens */}
            <button
              className="md:hidden text-3xl focus:outline-none ml-auto"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

          {/* Nav Menu */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:items-center md:ml-auto w-full md:w-auto text-center md:text-left mt-4 md:mt-0`}
          >
            <a href="#HeroSection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Home</a>
            <a href="#ContentSection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Explore</a>
            <a href="#GallerySection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Projects</a>
            <a href="#OurServices" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Services</a>
            <a href="#ContactSection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Contact</a>
            <a href="#TeamSection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Team</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavbarSection;
