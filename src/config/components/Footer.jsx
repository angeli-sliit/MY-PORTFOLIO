import React from 'react';
import config from '../portfolioConfig.json';

const Footer = () => {
  const { github, linkedin, email } = config.contact || {};
  
  return (
    <>
      <style jsx>{`
        .footer {
          background: var(--background-color);
          color: var(--text-color);
          padding: 2rem 0;
          margin-top: 4rem;
          border-top: 1px solid var(--border-color);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .social-links a {
          color: var(--primary-color);
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
        }

        .social-links a:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .copyright {
          margin: 0;
          font-size: 0.9rem;
          color: var(--muted);
        }

        /* Neon theme specific styles */
        .neon-mode .social-links a {
          color: var(--accent-primary);
          border-color: var(--border-color);
          background: var(--panel);
        }

        .neon-mode .social-links a:hover {
          box-shadow: 0 0 15px rgba(0,255,255,0.3);
        }

        /* Purple Neon theme specific styles */
        .purple-neon-mode .social-links a {
          color: var(--accent-primary);
          border-color: var(--border-color);
          background: var(--panel);
          transition: all 0.3s ease;
        }

        .purple-neon-mode .social-links a:hover {
          color: white;
          background: var(--gradient-primary);
          box-shadow: 0 0 20px rgba(139, 69, 255, 0.4);
          transform: translateY(-3px) scale(1.1);
        }

        .purple-neon-mode .copyright {
          color: var(--muted);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <i className="bx bxl-github"></i>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <i className="bx bxl-linkedin"></i>
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} aria-label="Email contact">
                <i className="bx bx-envelope"></i>
              </a>
            )}
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Angeli Tharushika. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
