import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import config from './config/portfolioConfig.json';

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

describe('Portfolio', () => {
  test('has one h1 with the full name', () => {
    render(<App />);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveAccessibleName(config.name);
  });

  test('hero buttons link to the sections they name', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'See my work' })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact');
    expect(document.getElementById('work')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  test('every nav link points at a section that exists', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    within(nav).getAllByRole('listitem').forEach(item => {
      const href = within(item).getByRole('link').getAttribute('href');
      expect(document.querySelector(href)).toBeInTheDocument();
    });
  });

  test('Download CV downloads the PDF', () => {
    render(<App />);
    const cv = screen.getByRole('link', { name: 'Download CV' });
    expect(cv).toHaveAttribute('href', '/cv.pdf');
    expect(cv).toHaveAttribute('download', config.cv.fileName);
  });

  test('project cards show their links', () => {
    render(<App />);
    config.projects.filter(project => project.links).forEach(project => {
      project.links.forEach(link => {
        expect(screen.getByRole('link', { name: `${link.label}: ${project.title}` }))
          .toHaveAttribute('href', link.href);
      });
    });
  });

  test('every project visual exists', () => {
    render(<App />);
    document.querySelectorAll('.card__visual svg').forEach(svg => {
      expect(svg.childElementCount).toBeGreaterThan(0);
    });
    expect(document.querySelectorAll('.card')).toHaveLength(config.projects.length);
  });

  test('menu button reports whether the menu is open', async () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true');
  });

  test('contact form requires every field', () => {
    render(<App />);
    expect(screen.getByLabelText('Your name')).toBeRequired();
    expect(screen.getByLabelText('Email address')).toBeRequired();
    expect(screen.getByLabelText('Message')).toBeRequired();
  });
});
