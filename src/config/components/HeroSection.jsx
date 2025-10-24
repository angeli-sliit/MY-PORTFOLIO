import React, { useState, useEffect, useContext } from 'react';
import config from '../portfolioConfig.json';
import profileImage from '../../assets/111.jpg';
import { ThemeContext } from '../../context/ThemeContext';

const typewriterTexts = [
  'Data Engineer',
  'ML Engineer', 
  'Frontend for Data'
];

const HeroSection = () => {
  // eslint-disable-next-line no-unused-vars
  const { theme } = useContext(ThemeContext);
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Error handling for config and image
  const name = config.name || 'Your Name';
  const title = config.title || 'Data Engineer & ML Engineer';
  // eslint-disable-next-line no-unused-vars
  const bio = config.about?.detailed || config.bio || 'Your bio goes here.';
  const support = config.hero?.support || 'I build reliable ETL pipelines, production ML models, and interactive data apps that turn raw data into actionable insights.';
  let imageSrc;
  try {
    imageSrc = profileImage;
  } catch (e) {
    imageSrc = '';
  }

  useEffect(() => {
    let typingTimeout;
    const currentText = typewriterTexts[textIndex];
    if (!isDeleting && charIndex < currentText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === currentText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % typewriterTexts.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <>
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-color);
          color: var(--text-color);
          padding: 0 2rem;
          position: relative;
        }

        .hero-modern-layout {
          display: flex;
          width: 100%;
          max-width: 1200px;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem 0;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: var(--text-color);
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-family: 'Orbitron', monospace;
        }

        .hero-bio {
          font-size: 1.25rem;
          color: var(--text-color);
          max-width: 500px;
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .hero-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: 1.2rem;
        }

        .hero-profile-image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 24px rgba(139, 69, 255, 0.2);
          border: 2px solid var(--primary-color);
          margin-bottom: 1.2rem;
        }

        .typewriter-modern {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--primary-color);
          display: flex;
          align-items: center;
          min-height: 2.2rem;
          margin-right: 60px;
        }

        .typewriter-cursor {
          color: var(--primary-color);
          margin-left: 2px;
          animation: blink 0.8s steps(1) infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Neon theme specific styles */
        .neon-glow-blob {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          animation: float 6s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        .neon-mode .hero-section {
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }

        .neon-mode .hero-title {
          font-family: 'Orbitron', monospace;
          font-size: 3.5rem;
          background: linear-gradient(45deg, #00FFFF, #FF00D9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0,255,255,0.5);
        }

        .neon-mode .hero-subtitle {
          color: var(--accent-primary);
          text-shadow: 0 0 10px var(--accent-primary);
        }

        .neon-mode .hero-bio {
          color: var(--muted);
          font-size: 1.3rem;
        }

        .neon-mode .hero-profile-image {
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 20px rgba(0,255,255,0.3);
          filter: drop-shadow(0 0 10px rgba(0,255,255,0.2));
        }

        .neon-mode .typewriter-modern {
          color: var(--accent-primary);
          text-shadow: 0 0 10px var(--accent-primary);
        }

        .neon-button {
          background: transparent;
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          font-family: 'Orbitron', monospace;
        }

        .neon-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .neon-button:hover::before {
          left: 100%;
        }

        .neon-button:hover {
          box-shadow: var(--accent-glow, 0 0 18px rgba(0,255,255,0.18), 0 0 40px rgba(255,0,217,0.06));
          transform: translateY(-2px);
        }

        .neon-button.secondary {
          border-color: var(--accent-secondary);
          color: var(--accent-secondary);
        }

        .neon-button.secondary:hover {
          box-shadow: 0 0 18px rgba(255,0,217,0.18), 0 0 40px rgba(255,0,217,0.06);
        }

        /* Purple Neon theme specific styles */
        .purple-neon-mode .hero-section {
          background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }

        .purple-neon-mode .hero-title {
          font-family: 'Orbitron', monospace;
          font-size: 4rem;
          background: linear-gradient(45deg, #8b45ff, #ff6b9d, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(139, 69, 255, 0.5);
          margin-bottom: 0.5rem;
        }

        .purple-neon-mode .hero-subtitle {
          color: var(--accent-primary);
          text-shadow: 0 0 10px var(--accent-primary);
          font-size: 1.8rem;
          font-weight: 600;
        }

        .purple-neon-mode .hero-bio {
          color: var(--muted);
          font-size: 1.3rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .purple-neon-mode .hero-profile-image {
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 20px rgba(139, 69, 255, 0.3);
          filter: drop-shadow(0 0 10px rgba(139, 69, 255, 0.2));
        }

        .purple-neon-mode .typewriter-modern {
          color: var(--accent-primary);
          text-shadow: 0 0 10px var(--accent-primary);
          font-size: 1.6rem;
        }

        .purple-neon-glow-blob {
          position: absolute;
          top: 10%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 69, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: purple-float 8s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes purple-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        .purple-neon-button {
          background: linear-gradient(135deg, var(--primary-color, #8b45ff), var(--secondary-color, #ff6b9d));
          border: 2px solid var(--primary-color);
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-family: 'Orbitron', monospace;
          margin-right: 1rem;
          box-shadow: 0 4px 12px rgba(139, 69, 255, 0.3);
        }

        .purple-neon-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 69, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .purple-neon-button:hover::before {
          left: 100%;
        }

        .purple-neon-button:hover {
          box-shadow: 0 0 20px rgba(139, 69, 255, 0.3), 0 0 40px rgba(255, 107, 157, 0.1);
          transform: translateY(-2px);
          background: linear-gradient(135deg, #8b45ff 0%, #ff6b9d 50%, #00d4ff 100%);
          color: white;
        }

        .purple-neon-button.secondary {
          background: linear-gradient(135deg, var(--secondary-color, #ff6b9d), var(--tertiary-color, #00d4ff));
          border-color: var(--secondary-color);
          color: white;
          box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
        }

        .purple-neon-button.secondary:hover {
          box-shadow: 0 0 20px rgba(255, 107, 157, 0.3), 0 0 40px rgba(255, 107, 157, 0.1);
        }

        @media (max-width: 900px) {
          .hero-modern-layout {
            flex-direction: column-reverse;
            align-items: center;
            gap: 2.5rem;
          }
          .hero-left, .hero-right {
            align-items: center;
            text-align: center;
            padding: 0;
          }
          .hero-profile-image {
            margin-bottom: 0.8rem;
          }
          
          .neon-mode .hero-title {
            font-size: 2.5rem;
          }
          
          .neon-glow-blob {
            width: 200px;
            height: 200px;
            top: 10%;
            right: 5%;
          }
        }
      `}</style>
      
      <section className="hero-section" id="hero" aria-label="Hero section">
        <div className="hero-modern-layout">
          <div className="hero-left">
            <h1 className="hero-title purple-neon-gradient-text" style={{ fontFamily: "'Orbitron', monospace" }}>
              {name}
            </h1>
            <h2 className="hero-subtitle purple-neon-text" style={{ fontFamily: "'Orbitron', monospace" }}>
              {title}
            </h2>
            <p className="hero-bio">{support}</p>
            <div className="hero-ctas">
              <button className="purple-neon-button" aria-label="View my projects">
                View my projects
              </button>
              <button className="purple-neon-button secondary" aria-label="Download CV">
                Download CV
              </button>
            </div>
          </div>
          <div className="hero-right">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt="Profile of Angel" 
                className="hero-profile-image" 
                loading="lazy"
              />
            ) : (
              <div className="hero-profile-image-missing" role="img" aria-label="Profile image not available">Image not available</div>
            )}
            <div className="typewriter-modern purple-neon-text" aria-live="polite" aria-atomic="true">
              {displayedText}
              <span className="typewriter-cursor">|</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
