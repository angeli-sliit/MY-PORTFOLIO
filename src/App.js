import React, { useEffect, useRef } from 'react';
import Navbar from './config/components/Navbar.jsx';
import HeroSection from './config/components/HeroSection.jsx';
import Marquee from './config/components/Marquee.jsx';
import AboutMe from './config/components/AboutMe.jsx';
import Projects from './config/components/Projects.jsx';
import Toolkit from './config/components/Toolkit.jsx';
import Research from './config/components/Research.jsx';
import Credentials from './config/components/Credentials.jsx';
import Contact from './config/components/Contact.jsx';
import Footer from './config/components/Footer.jsx';
import './App.css';

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
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return sectionRefs;
}

const sections = [AboutMe, Projects, Toolkit, Research, Credentials, Contact];

function App() {
  const sectionRefs = useSectionReveal();

  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        {sections.map((Section, index) => (
          <div ref={el => (sectionRefs.current[index] = el)} className="section-reveal" key={index}>
            <Section />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
