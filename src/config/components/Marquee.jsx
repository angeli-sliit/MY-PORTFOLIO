import React from 'react';
import config from '../portfolioConfig.json';

const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee__track">
      {[...config.ticker, ...config.ticker, ...config.ticker, ...config.ticker].map((word, index) => (
        <span className="marquee__item" key={index}>
          {word}
          <span className="marquee__slash">/</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
