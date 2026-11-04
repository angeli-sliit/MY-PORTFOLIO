import React from 'react';
import config from '../portfolioConfig.json';

const AboutMe = () => {
  const { about } = config;

  return (
    <section className="about" id="about" aria-label="About me">
      <div className="about__headline">
        <p className="eyebrow eyebrow--accent">{about.kicker}</p>
        <h2 className="display about__title">
          {about.headline} <span className="accent">{about.headlineAccent}</span>
        </h2>
      </div>
      <div className="about__body">
        <p className="about__lead">{about.lead}</p>
        <p className="about__detail">{about.detail}</p>
        <dl className="about__facts">
          {about.facts.map(fact => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutMe;
