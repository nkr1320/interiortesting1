import React, { useState, useEffect, useRef } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import "./ResponsiveMenu.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa"; // ✅ Fixed: use Font Awesome icons
import {
  MessageCircle,
  Sun,
  Moon
} from "lucide-react";

const ResponsiveMenu = () => {
  const socialItems = [
    { icon: <FaWhatsapp />, link: "https://wa.me/910000000000" },
    { icon: <FaFacebook />, link: "https://www.facebook.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com" },
    { icon: <FaEnvelope />, link: "mailto:someone@example.com" }
  ];

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
      dragConstraints={false}
      dragElastic={0.2}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      ref={containerRef}
      className={`menu-container ${theme}`}
    >
      <div className="menu-wrapper-glow flex items-center gap-2">
        <button onClick={toggleMenu}>
          <MessageCircle size={15} />
        </button>
        <button onClick={toggleDarkMode} className="mode-toggle">
          {darkMode ? <Sun size={15} /> : <Moon size={18} />}
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
              {socialItems.map((item, i) => (
                <li key={i} className="flip-card">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="flip-inner">
                      <div className="flip-front">{item.icon}</div>
                      <div className="flip-back">{item.icon}</div>
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
