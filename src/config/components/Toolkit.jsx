import React from 'react';
import config from '../portfolioConfig.json';

const ToolList = ({ tools, hidden }) => (
  <ul className="toolkit__list" aria-hidden={hidden || undefined}>
    {tools.map(tool => (
      <li className="toolkit__tile" key={tool.name}>
        <span className="toolkit__group">{tool.group}</span>
        <span className="display toolkit__name">{tool.name}</span>
      </li>
    ))}
  </ul>
);

const Toolkit = () => (
  <section className="toolkit" id="toolkit" aria-label="Toolkit">
    <header className="section-head">
      <h2 className="display section-head__title">The toolkit</h2>
    </header>
    {config.toolkit.map((tools, index) => (
      <div className={`toolkit__track ${index % 2 ? 'toolkit__track--reverse' : ''}`} key={index}>
        <ToolList tools={tools} />
        <ToolList tools={tools} hidden />
        <ToolList tools={tools} hidden />
        <ToolList tools={tools} hidden />
      </div>
    ))}
  </section>
);

export default Toolkit;
