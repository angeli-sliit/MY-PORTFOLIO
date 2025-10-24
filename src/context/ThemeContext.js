import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    // Auto-detect system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Update local storage and body class when theme changes
    localStorage.setItem('theme', theme);
    
    // Remove all theme classes
    document.body.classList.remove('light-mode', 'dark-mode', 'neon-mode');
    
    // Add current theme class
    document.body.classList.add(`${theme}-mode`);
    
    // Update CSS custom properties
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const themes = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const setThemeDirect = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setThemeDirect }}>
      {children}
    </ThemeContext.Provider>
  );
};
