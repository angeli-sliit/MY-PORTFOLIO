import React, { useState, useContext } from 'react';
import config from '../portfolioConfig.json';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    // Initialize with Public Key
    emailjs.init('Yqtjh3gOQh3ZXUDrk');
    
    emailjs.send(
      'service_r2sazu5', // Service ID
      'template_g2zaso2', // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: config.contact.email
      }
    )
    .then((response) => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      setIsSending(false);
      console.error('Email sending failed:', err);
      setError(`Failed to send message. Error: ${err.message || 'Unknown error'}`);
    });
  };

  return (
    <>
      <style jsx>{`
        .contact-section {
          font-family: 'Inter', 'Roboto', 'Montserrat', sans-serif;
          background: var(--bg-gradient, linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%));
          color: var(--text-color, #22223b);
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(34, 34, 59, 0.08);
          padding: 2rem;
          margin: 2rem auto;
          max-width: 700px;
          transition: background 0.3s, color 0.3s;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 1.5rem;
        }

        .contact-input, .contact-textarea {
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          padding: 0.8rem 1rem;
          font-size: 1rem;
          font-family: inherit;
          background: var(--input-bg, #fff);
          color: var(--text-color, #22223b);
          transition: border 0.2s;
        }

        .contact-input:focus, .contact-textarea:focus {
          border: 1.5px solid #4f8cff;
          outline: none;
        }

        .contact-button {
          background: linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.8rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(34, 34, 59, 0.10);
          transition: background 0.2s;
        }

        .contact-button:hover {
          background: linear-gradient(90deg, #38b6ff 0%, #4f8cff 100%);
        }

        /* Neon input styles */
        .neon-input {
          background: var(--panel) !important;
          border: 1px solid var(--border-color) !important;
          color: var(--text) !important;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .neon-input:focus {
          border: 2px solid var(--accent-primary) !important;
          box-shadow: 0 0 15px rgba(0,255,255,0.3) !important;
          outline: none !important;
        }

        .neon-input::placeholder {
          color: var(--muted);
        }

        /* Neon success/error states */
        .neon-mode .alert-success {
          background: rgba(0,255,255,0.1);
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 10px rgba(0,255,255,0.2);
        }

        .neon-mode .alert-danger {
          background: rgba(255,0,217,0.1);
          border: 1px solid var(--accent-secondary);
          color: var(--accent-secondary);
          box-shadow: 0 0 10px rgba(255,0,217,0.2);
        }

        /* Purple Neon theme specific styles */
        .purple-neon-mode .contact-section {
          background: var(--panel);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(139, 69, 255, 0.1);
        }

        .purple-neon-mode .contact-input, .purple-neon-mode .contact-textarea {
          background: var(--bg);
          border: 1px solid var(--border-color);
          color: var(--text);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .purple-neon-mode .contact-input:focus, .purple-neon-mode .contact-textarea:focus {
          border: 2px solid var(--accent-primary);
          box-shadow: 0 0 15px rgba(139, 69, 255, 0.3);
          outline: none;
        }

        .purple-neon-mode .contact-input::placeholder, .purple-neon-mode .contact-textarea::placeholder {
          color: var(--muted);
        }

        .purple-neon-mode .contact-button {
          background: var(--gradient-primary);
          border: none;
          color: white;
          box-shadow: 0 4px 15px rgba(139, 69, 255, 0.3);
          transition: all 0.3s ease;
        }

        .purple-neon-mode .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 69, 255, 0.4);
        }

        .purple-neon-mode .alert-success {
          background: rgba(139, 69, 255, 0.1);
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 10px rgba(139, 69, 255, 0.2);
        }

        .purple-neon-mode .alert-danger {
          background: rgba(255, 107, 157, 0.1);
          border: 1px solid var(--accent-secondary);
          color: var(--accent-secondary);
          box-shadow: 0 0 10px rgba(255, 107, 157, 0.2);
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 1rem;
          }
        }
      `}</style>
      
      <div className="container mt-5 contact-container" aria-label="Contact section">
        <h2 className="contact-title purple-neon-text" id="contact">Contact</h2>

        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} aria-label="Contact form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label purple-neon-text">Name</label>
                <input 
                  type="text" 
                  className="form-control contact-input"
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  aria-required="true"
                  aria-label="Your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label purple-neon-text">Email</label>
                <input 
                  type="email" 
                  className="form-control contact-input"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Your email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label purple-neon-text">Message</label>
                <textarea 
                  className="form-control contact-textarea"
                  id="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Your message"
                />
              </div>
              <button 
                type="submit" 
                className="btn purple-neon-button contact-submit"
                aria-label="Send message"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              
              {isSent && (
                <div className="alert alert-success mt-3" role="status">
                  Message sent successfully!
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  {error}
                  <div className="mt-2 small">
                    If the issue persists, please try again later or contact me directly at {config.contact.email}
                  </div>
                </div>
              )}
            </form>
          </div>
          
          <div className="col-md-6">
            <div className="card contact-card" aria-label="Contact information">
              <div className="card-body">
                <h5 className="card-title contact-info-title">Contact Information</h5>
                <ul className="list-unstyled">
                  <li className="mb-2 contact-info-item">
                    <i className="bi bi-envelope me-2 contact-icon" aria-hidden="true"></i>
                    <a href={`mailto:${config.contact.email}`} className="text-decoration-none contact-link" aria-label="Email address">
                      {config.contact.email}
                    </a>
                  </li>
                  <li className="mb-2 contact-info-item">
                    <a href={config.contact.linkedin} className="text-decoration-none contact-link" aria-label="LinkedIn profile">
                      <i className="bi bi-linkedin me-2 contact-icon" aria-hidden="true"></i>
                      LinkedIn Profile
                    </a>
                  </li>
                  <li className="contact-info-item">
                    <a href={config.contact.github} className="text-decoration-none contact-link" aria-label="GitHub profile">
                      <i className="bi bi-github me-2 contact-icon" aria-hidden="true"></i>
                      GitHub Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
