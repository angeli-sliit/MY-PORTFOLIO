import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

describe('Portfolio Main Components', () => {
  test('App renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });

  test('Navbar renders and contains Portfolio brand', () => {
    render(<Navbar />);
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  });

  test('HeroSection renders and displays name', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('Projects section renders', () => {
    render(<Projects />);
    expect(screen.getByLabelText(/projects section/i)).toBeInTheDocument();
  });

  test('AboutMe section renders', () => {
    render(<AboutMe />);
    expect(screen.getByLabelText(/about me section/i)).toBeInTheDocument();
  });

  test('Skills section renders', () => {
    render(<Skills />);
    expect(screen.getByLabelText(/skills section/i)).toBeInTheDocument();
  });

  test('Contact section renders', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/contact section/i)).toBeInTheDocument();
  });

  test('Footer renders and contains copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});
