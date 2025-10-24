import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './config/components/Navbar.jsx';
import HeroSection from './config/components/HeroSection.jsx';
import Footer from './config/components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import AboutMe from './config/components/AboutMe.jsx';
import Projects from './config/components/Projects.jsx';
import Skills from './config/components/Skills.js';
import Contact from './config/components/Contact.jsx';
import './App.css';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return visible ? (
    <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
      ↑
    </button>
  ) : null;
}

function useSectionReveal() {
  const sectionRefs = useRef([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return sectionRefs;
}

function App() {
  const sectionRefs = useSectionReveal();
  // Smooth scrolling implementation
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <main className="container py-4">
          <div ref={el => (sectionRefs.current[0] = el)} className="section-reveal"><AboutMe id="about" /></div>
          <div ref={el => (sectionRefs.current[1] = el)} className="section-reveal"><Projects id="projects" /></div>
          <div ref={el => (sectionRefs.current[2] = el)} className="section-reveal"><Skills id="skills" /></div>
          <div ref={el => (sectionRefs.current[3] = el)} className="section-reveal"><Contact id="contact" /></div>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
