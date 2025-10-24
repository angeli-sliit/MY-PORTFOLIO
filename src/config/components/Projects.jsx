import React, { useContext } from 'react';
import Tilt from 'react-parallax-tilt';
import config from '../portfolioConfig.json';
import { ThemeContext } from '../../context/ThemeContext';

/**
 * Extract first emoji from text, but be more careful about what we consider an emoji
 */
function extractFirstEmoji(text) {
  if (!text) return null;
  // More specific emoji regex to avoid capturing random characters
  const emojiRegex = /([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}])/u;
  const match = text.match(emojiRegex);
  return match ? match[0] : null;
}

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const projects = config.projects || [];

  // CSS-based animations instead of Framer Motion

  return (
    <>
      <style jsx>{`
        /* Base tokens expected to be present in global CSS (ThemeContext should set these) */
        :root {
          --card-radius: 14px;
          --transition-ease: cubic-bezier(.25,.8,.25,1);
        }

        .projects-container {
          position: relative;
          z-index: 1;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in:nth-child(1) { animation-delay: 0.1s; }
        .fade-in:nth-child(2) { animation-delay: 0.2s; }
        .fade-in:nth-child(3) { animation-delay: 0.3s; }
        .fade-in:nth-child(4) { animation-delay: 0.4s; }

        .projects-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }

        .project-thumb {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-top-left-radius: var(--card-radius);
          border-top-right-radius: var(--card-radius);
          display: block;
        }

        .project-card {
          transition: transform 0.28s var(--transition-ease), box-shadow 0.28s var(--transition-ease);
          box-shadow: 0 6px 18px rgba(20, 24, 40, 0.06);
          border-radius: var(--card-radius);
          position: relative;
          overflow: hidden;
          background: var(--card-bg, #fff);
          border: 1px solid var(--border-color, rgba(20,20,40,0.04));
          will-change: transform;
          outline: none;
        }

        /* focus for keyboard users */
        .project-card:focus {
          box-shadow: 0 10px 36px var(--accent-glow, rgba(0,255,255,0.12));
          transform: translateY(-6px);
          border-color: var(--primary-color, #8b45ff);
        }

        .project-card {
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }

        .project-card:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color, #8b45ff), var(--secondary-color, #ff6b9d), var(--tertiary-color, #00d4ff));
          border-radius: var(--card-radius) var(--card-radius) 0 0;
          z-index: 1;
        }

        .project-card-inner {
          padding: 1rem;
        }

        .project-icon {
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
          text-align: center;
          width: 100%;
          display: block;
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.08));
        }

        .project-title {
          margin: 1.5rem 0;
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--primary-color, #8b45ff);
        }

        .project-description {
          margin: 0.5rem 0 1rem 0;
          color: var(--text-color, #1e293b);
          font-size: 0.95rem;
          line-height: 1.45;
        }

        .project-meta {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }

        .tech-badge {
          padding: 0.25rem 0.5rem;
          font-size: 0.78rem;
          border-radius: 8px;
          border: 1px solid var(--primary-color, #8b45ff);
          background: transparent;
          color: var(--primary-color, #8b45ff);
        }

        .project-metrics {
          background: var(--card-bg, rgba(255,255,255,0.02));
          border-radius: 10px;
          padding: 0.85rem;
          border: 1px solid var(--border-color, rgba(20,20,40,0.06));
          margin-bottom: 0.9rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 0.6rem;
        }

        .metric-item {
          text-align: center;
          padding: 0.45rem;
          border-radius: 8px;
          border: 1px solid var(--border-color, rgba(20,20,40,0.06));
          background: var(--background-color, transparent);
        }

        .metric-value {
          display: block;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary-color, #8b45ff);
        }

        .metric-label {
          display: block;
          font-size: 0.78rem;
          color: var(--text-color, #1e293b);
          text-transform: capitalize;
        }

        .project-impact {
          background: var(--card-bg, rgba(255,255,255,0.02));
          border-radius: 10px;
          padding: 0.8rem;
          border-left: 4px solid var(--primary-color, #8b45ff);
          margin-bottom: 0.9rem;
        }

        .impact-title {
          margin: 0 0 0.25rem 0;
          color: var(--primary-color, #8b45ff);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .impact-text {
          margin: 0;
          color: var(--text-color, #1e293b);
          font-size: 0.9rem;
          line-height: 1.45;
        }

        .project-actions {
          display: flex;
          gap: 0.5rem;
        }

        .link-btn {
          padding: 0.45rem 0.8rem;
          border-radius: 8px;
          font-size: 0.9rem;
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.01));
          cursor: pointer;
          color: var(--text-color, #1e293b);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .link-btn:hover {
          background: var(--primary-color, #8b45ff);
          color: white;
          border-color: var(--primary-color, #8b45ff);
        }

        .link-btn.primary {
          background: linear-gradient(90deg, var(--primary-color, #8b45ff), var(--secondary-color, #ff6b9d));
          color: white;
          box-shadow: 0 0 18px rgba(139, 69, 255, 0.3);
          border: none;
        }

        .link-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(139, 69, 255, 0.4);
        }

        /* Dark mode specific improvements */
        .dark-mode .project-title {
          color: var(--primary-color, #b19cd9);
          font-size: 2.25rem;
        }

        .dark-mode .project-description {
          color: #ffffff;
        }

        .dark-mode .metric-label {
          color: #ffffff;
          font-weight: 500;
        }

        .dark-mode .metric-value {
          color: var(--primary-color, #b19cd9);
          text-shadow: 0 0 8px rgba(177, 156, 217, 0.5);
        }

        .dark-mode .impact-text {
          color: #ffffff;
          opacity: 0.9;
        }

        .dark-mode .tech-badge {
          color: var(--primary-color, #b19cd9);
          border-color: var(--primary-color, #b19cd9);
          background: rgba(177, 156, 217, 0.1);
          text-shadow: 0 0 5px rgba(177, 156, 217, 0.3);
        }

        .dark-mode .project-role {
          color: #ffffff !important;
        }

        /* small screen */
        @media (max-width: 760px) {
          .project-thumb {
            height: 150px;
          }
        }
      `}</style>

      <div
        className={`container mt-5 projects-container ${theme === 'dark' ? 'dark-mode' : ''}`}
        id="projects"
        aria-label="Projects section"
      >
        <h2 className="projects-title purple-neon-text">Projects</h2>

        <div className="row">
          {projects.length === 0 ? (
            <div className="col-12">No projects available.</div>
          ) : (
            projects.map((project, index) => {
              // eslint-disable-next-line no-unused-vars
              const icon = extractFirstEmoji(project.description || '') || project.icon || null;
              const imgSrc = project.image || project.thumbnail || null;
              // eslint-disable-next-line no-unused-vars
              const haveImage = Boolean(imgSrc);
              const projectLabel = (project.title || 'Untitled project').trim();
              const repoLink = project.repo || project.github || null;
              const projectLink = project.link || project.url || project.slug || null;

              // tilt animation settings
              const tiltProps = { tiltEnable: true, tiltMaxAngleX: 6, tiltMaxAngleY: 6, scale: 1.01, transitionEasing: 'cubic-bezier(.25,.8,.25,1)' };

              return (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="fade-in">
                    <Tilt {...tiltProps}>
                      <div
                        tabIndex="0"
                        role="article"
                        aria-labelledby={`proj-title-${index}`}
                        className="project-card"
                      >
                        

                        <div className="project-card-inner">
                          <h1 id={`proj-title-${index}`} className="project-title">
                            {projectLabel}
                          </h1>
                          

                          <p className="project-description">
                            {(project.description || 'No description provided.').trim()}
                          </p>

                          {project.metrics && (
                            <div className="project-metrics" aria-hidden={false}>
                              <div className="metrics-grid">
                                {Object.entries(project.metrics).map(([key, value], i) => (
                                  <div key={i} className="metric-item" role="group" aria-label={`${key}: ${value}`}>
                                    <span className="metric-value">{value}</span>
                                    <span className="metric-label">{String(key).replace(/_/g, ' ')}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.impact && (
                            <div className="project-impact" role="note" aria-label="project impact">
                              <h6 className="impact-title">Impact:</h6>
                              <p className="impact-text">{project.impact}</p>
                            </div>
                          )}

                          <div className="project-meta" aria-hidden>
                            {(project.technologies || []).slice(0, 6).map((tech, i) => (
                              <span key={i} className="tech-badge" title={tech}>{tech}</span>
                            ))}
                          </div>

                          <div className="project-actions">
                            {projectLink && (
                              <a className="link-btn" href={projectLink} target="_blank" rel="noopener noreferrer">Read case study</a>
                            )}
                            {repoLink && (
                              <a className="link-btn primary" href={repoLink} target="_blank" rel="noopener noreferrer">View repo</a>
                            )}
                          </div>

                          <p className="project-role" style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                            <strong>Role:</strong> {project.role || 'N/A'}
                          </p>
                        </div>
                      </div>
                    </Tilt>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;