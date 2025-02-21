import React from 'react';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to My Portfolio
        </h1>
        <p className="hero-subtitle">
          Showcasing my skills, projects, and experience
        </p>
        <div className="hero-cta">
          <a href="#about" className="btn-primary">
            About Me
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
