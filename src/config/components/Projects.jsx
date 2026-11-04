import React, { useCallback, useEffect, useRef, useState } from 'react';
import config from '../portfolioConfig.json';
import ProjectVisual from './ProjectVisual.jsx';

const Projects = () => {
  const rowRef = useRef(null);
  const [rail, setRail] = useState({ atStart: true, atEnd: false, thumbLeft: 0, thumbWidth: 0 });

  const updateRail = useCallback(() => {
    const row = rowRef.current;
    setRail({
      atStart: row.scrollLeft <= 1,
      atEnd: row.scrollLeft + row.clientWidth >= row.scrollWidth - 1,
      thumbLeft: (row.scrollLeft / row.scrollWidth) * 100,
      thumbWidth: (row.clientWidth / row.scrollWidth) * 100
    });
  }, []);

  useEffect(() => {
    updateRail();
    window.addEventListener('resize', updateRail);
    return () => window.removeEventListener('resize', updateRail);
  }, [updateRail]);

  const scrollCards = direction => {
    const row = rowRef.current;
    const step = row.firstElementChild.getBoundingClientRect().width + 20;
    row.scrollBy({ left: direction * step });
  };

  return (
    <section className="work" id="work" aria-label="Selected work">
      <header className="section-head">
        <h2 className="display section-head__title">Selected work</h2>
        <p className="eyebrow">Scroll sideways · industry, client and personal builds</p>
      </header>

      <div className="work__row" ref={rowRef} onScroll={updateRail} tabIndex="0" aria-label="Selected projects">
        {config.projects.map(project => (
          <article className="card" key={project.id}>
            <div className="card__visual">
              <ProjectVisual type={project.visual} />
              <span className="card__tag">{project.tag}</span>
            </div>
            <div className="card__body">
              <h3 className="display card__title">{project.title}</h3>
              <p className="card__meta">{project.meta}</p>
              <p className="card__summary">{project.summary}</p>
              {project.links && (
                <div className="card__links">
                  {project.links.map(link => (
                    <a
                      className="card__link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label}: ${project.title}`}
                      key={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              <div className="card__stat">
                <strong className="display">{project.stat.value}</strong>
                <span>{project.stat.label}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!(rail.atStart && rail.atEnd) && (
        <div className="work__controls">
          <button type="button" aria-label="Previous project" disabled={rail.atStart} onClick={() => scrollCards(-1)}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4 6.5 10l6 6" /></svg>
          </button>
          <div className="work__progress" aria-hidden="true">
            <span style={{ left: `${rail.thumbLeft}%`, width: `${rail.thumbWidth}%` }} />
          </div>
          <button type="button" aria-label="Next project" disabled={rail.atEnd} onClick={() => scrollCards(1)}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4 6 6-6 6" /></svg>
          </button>
        </div>
      )}

      <div className="work__more">
        <p className="eyebrow">Also built</p>
        <ul>
          {config.moreProjects.map(project => (
            <li key={project.href}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
              <span>{project.note}</span>
            </li>
          ))}
        </ul>
        <a className="work__all" href={config.contact.github} target="_blank" rel="noopener noreferrer">
          All projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
