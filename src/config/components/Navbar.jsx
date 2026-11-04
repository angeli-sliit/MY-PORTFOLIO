import React, { useEffect, useState } from 'react';
import config from '../portfolioConfig.json';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Toolkit', id: 'toolkit' },
  { label: 'Research', id: 'research' },
  { label: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('top');

  // Underline the link for whichever section crosses the middle of the screen
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...links.map(link => link.id)].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Main navigation">
        <a className="nav__mark" href="#top" aria-label="Back to top">AW</a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul id="nav-links" className={`nav__links ${isOpen ? 'is-open' : ''}`}>
          {links.map(link => (
            <li key={link.id}>
              <a
                className={`nav__link ${activeId === link.id ? 'is-active' : ''}`}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav__cv" href={config.cv.href} download={config.cv.fileName}>Download CV</a>
      </nav>
    </div>
  );
};

export default Navbar;
