import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle, ArrowLeftCircle, MessageCircle, Sun, Moon } from "lucide-react";
import "./ResponsiveMenu.css";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [theme, setTheme] = useState("cyan");
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const themes = ["cyan", "purple", "pink", "green", "blue"];

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleTheme = () => {
    const next = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[next]);
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const handleDragEnd = (_, info) => {
    const spaceBelow = window.innerHeight - info.point.y;
    setOpenUpward(spaceBelow < 250);
  };

  // Voice command setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      const transcript = e.results[e.results.length - 1][0].transcript.trim().toLowerCase();
      if (transcript.includes("open menu")) setIsOpen(true);
      if (transcript.includes("close menu")) setIsOpen(false);
      if (transcript.includes("dark mode")) setDarkMode(true);
      if (transcript.includes("light mode")) setDarkMode(false);
      if (transcript.includes("change theme")) toggleTheme();
    };

    recognition.start();
    return () => recognition.stop();
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={false} // ✅ Changed: Allows free movement in all directions
      dragElastic={0.2}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      ref={containerRef}
      className={`menu-container ${theme}`}
    >
      <div className="menu-wrapper-glow flex items-center gap-2">
        <MessageCircle size={24} />
        <button onClick={toggleMenu}>{isOpen ? <ArrowLeftCircle size={32} /> : <ArrowRightCircle size={32} />}</button>
        <button onClick={toggleDarkMode} className="mode-toggle">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="menu-nav-text"
            initial={openUpward ? { y: 100, opacity: 0 } : { x: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={openUpward ? { y: 100, opacity: 0 } : { x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "absolute",
              [openUpward ? "bottom" : "top"]: "100%",
              marginTop: openUpward ? undefined : "10px",
              marginBottom: openUpward ? "10px" : undefined,
            }}
          >
           <ul className="menu-list">
  {[
    { name: "whatsup", link: "https://wa.me/91 0000000000" },
    { name: "facebook", link: "https://www.facebook.com" },
    { name: "instagram", link: "https://www.instagram.com" },
    { name: "gmail", link: "mailto:someone@example.com" }
  ].map((item, i) => (
    <li key={i} className="flip-card">
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <div className="flip-inner">
          <div className="flip-front capitalize">{item.name}</div>
          <div className="flip-back">Go to {item.name}</div>
        </div>
      </a>
    </li>
  ))}
</ul>

          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResponsiveMenu;
