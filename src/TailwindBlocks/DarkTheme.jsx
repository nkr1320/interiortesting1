import React, { useState, useEffect } from 'react';
import "../App.css";

function DarkTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved theme from localStorage (true/false as string)
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem("darkMode", darkMode); // Save theme to localStorage
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-8 rounded-full flex items-center p-1 transition duration-300 ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
          darkMode
            ? 'translate-x-8 bg-black text-white'
            : 'translate-x-0 bg-white text-black'
        }`}
      >
        {darkMode ? '🌙' : '☀'}
      </div>
    </button>
  );
}

export default DarkTheme;
