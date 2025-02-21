import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/angeli-sliit" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/angeli-wickrama-arachchige-649502293" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
            <a href="mailto:angeli.2003it@gmail.com">
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
