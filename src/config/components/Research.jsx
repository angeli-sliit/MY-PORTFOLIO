import React from 'react';
import config from '../portfolioConfig.json';

const POSITIVES = [
  [280, 110, 7], [308, 88, 6], [326, 124, 7], [296, 146, 6],
  [254, 134, 5], [340, 92, 5], [266, 88, 5], [318, 156, 5]
];

const BACKGROUND = [
  [60, 60], [110, 210], [160, 100], [46, 170], [200, 240], [150, 40], [96, 130],
  [240, 210], [360, 240], [210, 50], [30, 250], [300, 260], [390, 180]
];

const Research = () => {
  const { research } = config;

  return (
    <section className="research" id="research" aria-label="Research">
      <div className="research__inner">
        <div className="research__copy">
          <p className="eyebrow eyebrow--alt">{research.kicker}</p>
          <h2 className="display research__title">{research.title}</h2>
          <p className="research__subtitle">{research.subtitle}</p>
          <p className="research__description">{research.description}</p>
          <p className="research__tech">{research.technologies}</p>
        </div>
        {/* A tight cluster among scattered points, to suggest contrastive embeddings */}
        <svg className="research__visual" viewBox="0 0 420 300" aria-hidden="true">
          <g fill="#7A6C86">
            {BACKGROUND.map(([x, y]) => <circle cx={x} cy={y} r="4" key={`${x}-${y}`} />)}
          </g>
          <g fill="var(--accent-alt)">
            {POSITIVES.map(([x, y, r]) => <circle cx={x} cy={y} r={r} key={`${x}-${y}`} />)}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Research;
