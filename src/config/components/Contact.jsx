import React, { useState } from 'react';
import config from '../portfolioConfig.json';
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
    setIsSent(false);
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
      setError(`Failed to send message. Error: ${err.message || err.text || 'Unknown error'}`);
    });
  };

  return (
    <section className="contact" id="contact" aria-label="Contact">
      <div className="contact__inner">
        <div className="contact__copy">
          <h2 className="display contact__title">
            Let's work <span className="contact__title-accent">together.</span>
          </h2>
          <p className="contact__availability">{config.availability.full}</p>
          <ul className="contact__links">
            <li><a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></li>
            <li><a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={config.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} aria-label="Contact form">
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="button button--accent" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send message'}
          </button>

          {isSent && (
            <p className="contact__notice" role="status">Message sent successfully!</p>
          )}

          {error && (
            <p className="contact__notice contact__notice--error" role="alert">
              {error} If the issue persists, please contact me directly at {config.contact.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
