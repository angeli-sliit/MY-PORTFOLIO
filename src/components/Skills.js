import React from 'react';
import config from '../config/portfolioConfig.json';

const Skills = () => {
  return (
    <div className="container mt-5 skills-container"id = "skills">
      <h2 className="skills-title" >Skills</h2>

      <div className="row">
        {Object.entries(config.skills).map(([category, skills], index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 skill-card">
              <div className="card-body">
                <h3 className="card-title skill-category">{category}</h3>
                <div className="d-flex flex-wrap">
                  {skills.map((skill, i) => (
                    <span key={i} className="badge me-1 mb-1 skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
