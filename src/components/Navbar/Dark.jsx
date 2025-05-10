import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // feather icons: clean & elegant

const Dark = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      root.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
      className="
        w-18 h-15 flex items-center justify-center
        text-xl text-yellow-400 dark:text-white
        transition-all duration-300 
        hover:scale-110 active:scale-95 
        drop-shadow-sm
      "
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default Dark;
