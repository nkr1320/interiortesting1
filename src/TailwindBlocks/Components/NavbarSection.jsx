import React, { useState, useRef, useEffect } from "react";
import logo from '../Components/Pages/images/harinileelalogo.png';
import { Link, useLocation } from 'react-router-dom';
import DarkTheme from "../DarkTheme";


const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Auto-close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && containerRef.current && !containerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Auto-close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
      <header id="NavbarSection" className="text-gray-600 body-font fixed w-full top-0 z-50 bg-white shadow-md">
        <div ref={containerRef} className="container mx-auto flex flex-wrap p-5 items-center justify-between lg:w-[97%] lg:mx-auto">
          {/* Logo + Hamburger */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="flex items-center text-gray-900">
              <img src={logo} alt="logo" className="w-10 h-10 p-1 rounded-full" />
              <span id="logoname" className="ml-3 text-xl">INTERIOR DESIGNING</span>
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
            } flex-col md:flex md:flex-row md:items-center md:ml-auto w-full md:w-auto gap-1 md:gap-0 text-base mt-4 md:mt-0`}
          >
<Link
  to="/"
  onClick={() => setIsMenuOpen(false)}
  className="text-white text-[20px] font-medium mb-2 md:mb-0 md:mr-3 inline-block px-6 py-2 rounded-[8px] bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] shadow-inner hover:brightness-110 transition"
>
  <span role="img" aria-label="home">🏠</span> Home
</Link>
           <Link
  to="/explore"
  onClick={() => setIsMenuOpen(false)}
  className="text-white text-[20px] font-medium mb-2 md:mb-0 md:mr-3 inline-block px-6 py-2 rounded-[8px] bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] shadow-inner hover:brightness-110 transition"
>
  <span role="img" aria-label="explore">🔍</span> Explore
</Link>

<Link
  to="/Gallery"
  onClick={() => setIsMenuOpen(false)}
  className="text-white text-[20px] font-medium mb-2 md:mb-0 md:mr-3 inline-block px-6 py-2 rounded-[8px] bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] shadow-inner hover:brightness-110 transition"
>
  <span role="img" aria-label="projects">🖼</span> Projects
</Link>

<Link
  to="/services"
  onClick={() => setIsMenuOpen(false)}
  className="text-white text-[20px] font-medium mb-2 md:mb-0 md:mr-3 inline-block px-6 py-2 rounded-[8px] bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] shadow-inner hover:brightness-110 transition"
>
  <span role="img" aria-label="services">🛠</span> Services
</Link>

<Link
  to="/contact"
  onClick={() => setIsMenuOpen(false)}
  className="text-white text-[20px] font-medium mb-2 md:mb-0 md:mr-3 inline-block px-6 py-2 rounded-[8px] bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] shadow-inner hover:brightness-110 transition"
>
  <span role="img" aria-label="contact">📞</span> Contact
</Link>

<Link
  to="/team"
  onClick={() => setIsMenuOpen(false)}
  className="text-white text-[20px] font-medium mb-2 md:mb-0 md:mr-3 inline-block px-6 py-2 rounded-[8px] bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] shadow-inner hover:brightness-110 transition "
>
  <span role="img" aria-label="team">👥</span> Team
</Link>
       <div 
className="text-white text-[20px] font-medium mb-2 md:mb-0 md:mr-9 inline-block px-6 py-2 rounded-[8px] bg-gradient-to-b from-[#2b2b2b] to-[#1a1a1a] shadow-inner hover:brightness-110 transition">
        
        <DarkTheme /></div>
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
