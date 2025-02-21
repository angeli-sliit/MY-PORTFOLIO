import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand nav-brand" href="/">
          Portfolio
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item me-3">
              <a className="nav-link" href="#hero" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#about" aria-current="page">
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item me-3">
              <button 
                className="btn btn-link nav-link" 
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
