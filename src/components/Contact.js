import React, { useState } from 'react';
import config from '../config/portfolioConfig.json';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <div className="container mt-5 contact-container">
      <h2 className="contact-title" id="contact">Contact</h2>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control contact-input" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control contact-textarea" 
                id="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary contact-submit"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            
            {isSent && (
              <div className="alert alert-success mt-3">
                Message sent successfully!
              </div>
            )}
            
            {error && (
              <div className="alert alert-danger mt-3">
                {error}
                <div className="mt-2 small">
                  If the issue persists, please try again later or contact me directly at {config.contact.email}
                </div>
              </div>
            )}
          </form>
        </div>
        
        <div className="col-md-6">
          <div className="card contact-card">
            <div className="card-body">
              <h5 className="card-title contact-info-title">Contact Information</h5>
              <ul className="list-unstyled">
                <li className="mb-2 contact-info-item">
                  <i className="bi bi-envelope me-2 contact-icon"></i>
                  <a href={`mailto:${config.contact.email}`} className="text-decoration-none contact-link">
                    {config.contact.email}
                  </a>
                </li>
                <li className="mb-2 contact-info-item">
                  <a href={config.contact.linkedin} className="text-decoration-none contact-link">
                    <i className="bi bi-linkedin me-2 contact-icon"></i>
                    LinkedIn Profile
                  </a>
                </li>
                <li className="contact-info-item">
                  <a href={config.contact.github} className="text-decoration-none contact-link">
                    <i className="bi bi-github me-2 contact-icon"></i>
                    GitHub Profile
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
