import React from 'react';
import config from '../portfolioConfig.json';
import profileImage from '../../assets/111.jpg';

const SIGNAL_POINTS =
  '0,72 40,66 80,76 120,68 160,74 200,64 240,72 280,78 320,66 360,72 400,62 440,74 480,70 520,78 560,64 600,72 ' +
  '640,68 680,76 720,62 760,74 800,70 840,80 880,58 920,84 960,50 1000,92 1040,42 1080,104 1120,36 1160,118 ' +
  '1200,60 1240,140 1280,150 1320,152 1360,150 1400,153 1440,151';

const HeroSection = () => {
  const { hero, availability, name } = config;
  const [firstName, ...otherNames] = name.split(' ');

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__portrait">
        <img src={profileImage} alt={`Portrait of ${name}`} fetchPriority="high" />
      </div>

      <div className="hero__copy">
        <p className="eyebrow">{hero.kicker}</p>
        <h1 className="hero__name" aria-label={name}>
          <span className="hero__first">{firstName}</span>
          {otherNames.map(part => (
            <span className="hero__rest" key={part}>{part}</span>
          ))}
        </h1>
        <p className="hero__support">{hero.support}</p>
        <div className="hero__ctas">
          {hero.ctas.map((cta, index) => (
            <a className={`button ${index === 0 ? 'button--solid' : 'button--ghost'}`} href={cta.href} key={cta.href}>
              {cta.label}
            </a>
          ))}
        </div>
        <p className="hero__status">{availability.short}</p>
      </div>

      <div className="hero__signal" aria-hidden="true">
        <svg viewBox="0 0 1440 170" preserveAspectRatio="none">
          <polyline points={SIGNAL_POINTS} />
        </svg>
        <span className="hero__marker" />
      </div>
    </section>
  );
};

export default HeroSection;
