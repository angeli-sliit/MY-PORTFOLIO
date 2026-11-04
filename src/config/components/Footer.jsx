import React from 'react';
import config from '../portfolioConfig.json';

const Footer = () => (
  <footer className="footer">
    <span>&copy; {new Date().getFullYear()} {config.name}</span>
    <span>{config.location}</span>
  </footer>
);

export default Footer;
