import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      default: return '☀️';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light': return 'Light mode';
      case 'dark': return 'Dark mode';
      default: return 'Toggle theme';
    }
  };

  return (
    <>
      <style jsx>{`
        .navbar {
          background-color: var(--background-color);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 0;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .nav-brand {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.25rem;
          text-decoration: none;
        }

        .navbar-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
          gap: 1rem;
        }

        .navbar-link {
          color: var(--text-color);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          border: 1px solid transparent;
        }

        .navbar-link:hover {
          background: linear-gradient(135deg, var(--primary-color, #8b45ff), var(--secondary-color, #ff6b9d));
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 69, 255, 0.3);
          border-color: var(--primary-color);
        }

        .navbar-link:active {
          transform: translateY(0);
        }

        .theme-toggle {
          background: none;
          border: none;
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          margin-left: 0.5rem;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background-color: rgba(var(--primary-color-rgb), 0.1);
        }

        @media (max-width: 768px) {
          .navbar-content {
            padding: 0 1rem;
          }
          
          .navbar-links {
            gap: 0.5rem;
          }
          
          .navbar-link {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
      
      <nav className="navbar modern-navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-content">
          <a className="navbar-brand nav-brand" href="#hero" aria-label="Go to home section">
            Portfolio
          </a>
          <ul className="navbar-links" role="menubar">
            <li role="none"><a className="navbar-link" href="#hero" role="menuitem" tabIndex="0">Home</a></li>
            <li role="none"><a className="navbar-link" href="#about" role="menuitem" tabIndex="0">About</a></li>
            <li role="none"><a className="navbar-link" href="#projects" role="menuitem" tabIndex="0">Projects</a></li>
            <li role="none"><a className="navbar-link" href="#skills" role="menuitem" tabIndex="0">Skills</a></li>
            <li role="none"><a className="navbar-link" href="#contact" role="menuitem" tabIndex="0">Contact</a></li>
            <li role="none">
              <button 
                onClick={toggleTheme} 
                className="navbar-link theme-toggle" 
                aria-label={`Current theme: ${getThemeLabel()}. Click to cycle through themes.`} 
                tabIndex="0"
                title={`Current: ${getThemeLabel()}`}
              >
                {getThemeIcon()}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
