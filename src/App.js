import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
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
          <AboutMe id="about" />
          <Projects id="projects" />
          <Skills id="skills" />
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
