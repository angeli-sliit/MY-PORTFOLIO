import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:your.email@example.com">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Angeli Tharushika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
