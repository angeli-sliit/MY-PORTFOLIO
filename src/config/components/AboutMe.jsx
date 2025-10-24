import React, { useContext } from 'react';
import config from '../portfolioConfig.json';
import { ThemeContext } from '../../context/ThemeContext';

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const about = config.about || {};
  const services = config.services || [];
  const education = config.education || [];
  const experience = config.experience || [];

  return (
    <>
      <style jsx>{`
        .about-container {
          padding: 2rem;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-title {
          color: var(--primary-color);
          margin-bottom: 2rem;
          font-weight: 600;
          font-size: 2.5rem;
        }

        .about-description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          color: var(--text-color);
        }

        .services-section, .experience-section {
          margin-bottom: 3rem;
        }

        .services-title, .experience-title, .education-title {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 1.5rem;
        }

        .services-list {
          list-style: none;
          padding-left: 0;
        }

        .service-item {
          padding: 0.8rem 0;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-color);
          font-size: 1rem;
        }

        .service-item:last-child {
          border-bottom: none;
        }

        .experience-item {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--card-bg);
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .experience-role {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .experience-period {
          color: var(--muted);
          font-style: italic;
          margin-bottom: 1rem;
        }

        .experience-description {
          color: var(--text-color);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .achievements-list {
          list-style: disc;
          padding-left: 1.5rem;
          margin-top: 1rem;
        }

        .achievement-item {
          color: var(--text-color);
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .education-details {
          color: var(--muted);
          font-style: italic;
        }

        .education-focus {
          color: var(--primary-color);
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .education-extra {
          list-style: disc;
          padding-left: 1.5rem;
          margin-top: 0.5rem;
        }

        /* Neon theme specific styles */
        .neon-mode .about-description {
          color: var(--text);
        }

        .neon-mode .service-item {
          color: var(--text);
          border-bottom-color: var(--border-color);
        }

        .neon-mode .experience-item {
          background: var(--panel);
          border-color: var(--border-color);
        }

        .neon-mode .experience-role {
          color: var(--accent-primary);
        }

        .neon-mode .achievement-item {
          color: var(--text);
        }

        .neon-mode .education-focus {
          color: var(--accent-primary);
        }

        /* Purple Neon theme specific styles */
        .purple-neon-mode .about-description {
          color: var(--text);
          font-size: 1.2rem;
          line-height: 1.8;
        }

        .purple-neon-mode .service-item {
          color: var(--text);
          border-bottom-color: var(--border-color);
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .purple-neon-mode .service-item:hover {
          color: var(--accent-primary);
          transform: translateX(10px);
        }

        .purple-neon-mode .experience-item {
          background: var(--panel);
          border-color: var(--border-color);
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .purple-neon-mode .experience-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .purple-neon-mode .experience-item:hover::before {
          opacity: 1;
        }

        .purple-neon-mode .experience-item:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 8px 32px rgba(139, 69, 255, 0.2);
          transform: translateY(-4px);
        }

        .purple-neon-mode .experience-role {
          color: var(--accent-primary);
          text-shadow: 0 0 5px var(--accent-primary);
        }

        .purple-neon-mode .achievement-item {
          color: var(--text);
          transition: all 0.3s ease;
        }

        .purple-neon-mode .achievement-item:hover {
          color: var(--accent-primary);
          transform: translateX(5px);
        }

        .purple-neon-mode .education-focus {
          color: var(--accent-primary);
          text-shadow: 0 0 5px var(--accent-primary);
        }

        @media (max-width: 600px) {
          .about-container {
            padding: 1rem;
          }
        }
      `}</style>
      
      <div className="container mt-5 mb-5 about-container" id="about" aria-label="About Me section">
        <div className="about-content">
          <h2 className="about-title purple-neon-text">About Me</h2>
          <p className="about-description">{about.detailed}</p>
          
          {services.length > 0 && (
            <div className="services-section">
              <h3 className="services-title purple-neon-text">What I Do</h3>
              <ul className="services-list">
                {services.map((service, idx) => (
                  <li key={idx} className="service-item">{service}</li>
                ))}
              </ul>
            </div>
          )}

          {experience.length > 0 && (
            <div className="experience-section">
              <h3 className="experience-title purple-neon-text">Experience</h3>
              {experience.map((exp, idx) => (
                <div key={idx} className="experience-item">
                  <h4 className="experience-role">{exp.title} — {exp.company}</h4>
                  <p className="experience-period">{exp.period}</p>
                  <p className="experience-description">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="achievement-item">{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 education-section">
            <h3 className="education-title purple-neon-text">Education</h3>
            <ul className="education-list">
              {education.map((item, idx) => (
                <li className="education-item" key={idx} tabIndex="0" aria-label={`Education: ${item.degree}`}>
                  <strong>{item.degree}</strong><br />
                  {item.institution}<br />
                  {item.details && <span className="education-details">{item.details}</span>}
                  {item.focus && <div className="education-focus">Focus: {item.focus}</div>}
                  {item.extra && (
                    <ul className="education-extra">
                      {item.extra.map((ex, i) => <li key={i}>{ex}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
