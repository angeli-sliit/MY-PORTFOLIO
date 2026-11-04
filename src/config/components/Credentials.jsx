import React from 'react';
import config from '../portfolioConfig.json';

const Credentials = () => {
  const { certifications, leadership } = config;

  return (
    <section className="credentials" aria-label="Certifications and activities">
      <div className="credentials__column">
        <h2 className="display credentials__title">Certifications</h2>
        <ul className="rule-list">
          {certifications.map(cert => (
            <li className="rule-list__row" key={cert.name}>
              <span className="rule-list__name">{cert.name}</span>
              <span className="rule-list__meta">{cert.issuer}, {cert.year}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="credentials__column">
        <h2 className="display credentials__title">Beyond the code</h2>
        <p className="credentials__highlight">
          <a href={leadership.highlight.href} target="_blank" rel="noopener noreferrer">
            <strong>{leadership.highlight.title}</strong>
          </a>{' '}
          {leadership.highlight.description}
        </p>
        <ul className="rule-list">
          {leadership.roles.map(role => (
            <li className="rule-list__row" key={role}>
              <span className="rule-list__name">{role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Credentials;
