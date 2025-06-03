import React, { useState, useRef, useEffect } from "react";
import logo from '../Components/Pages/images/harinileelalogo.png';
import { Link } from 'react-router-dom';

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Update menu height when toggled
  useEffect(() => {
    if (isMenuOpen && navRef.current) {
      setMenuHeight(navRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header id="NavbarSection" className="text-gray-600 body-font fixed w-full top-0 z-50 bg-white shadow-md  " >
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between lg:w-[97%] lg:mx-auto">
          {/* Logo + Hamburger */}
          <div className="flex items-center justify-between w-full md:w-auto">
             <Link to="/"  className="flex items-center text-gray-900">
              <img src={logo} alt="logo" className="w-10 h-10 p-1 rounded-full" />
              <span className="ml-3 text-xl">INTERIOR DESIGNING</span>
            </Link>
            <button
              className="md:hidden text-3xl focus:outline-none ml-auto"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

          {/* Nav Menu */}
          <nav
            ref={navRef}
            className={`${
              isMenuOpen ? "flex" : "hidden"
            }  flex-col md:flex md:flex-row md:items-center md:ml-auto w-full md:w-auto gap-1 md:gap-0 text-base mt-4 md:mt-0`}
          >
            <Link to="/" href="#Home" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Home</Link>
            <Link to="/explore" href="#ContentSection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Explore</Link>
            <Link to="/Gallery" href="#GallerySection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Projects</Link>
            <Link to="/services" href="#OurServices" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Services</Link>
            <Link to="/contact" href="#ContactSection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Contact</Link>
            <Link to="/team" href="#TeamSection" className="text-[23px] hover:text-orange-600 font-semibold md:mr-9 mb-2 md:mb-0">Team</Link>
          </nav>
        </div>
      </header>

      {/* Push HeroSection down only on small screens */}
      <div
        className="block md:hidden"
        style={{ marginTop: isMenuOpen ? `${menuHeight}px` : "0px" }}
      ></div>
    </>
  );
};

export default NavbarSection;
