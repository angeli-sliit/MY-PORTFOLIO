import React from 'react';
import config from '../portfolioConfig.json';
import './Skills.css';

const Skills = () => {
  const skillsData = config.skills || {};
  return (
    <div className="container mt-5 skills-container" id="skills" aria-label="Skills section">
      <h2 className="skills-title">Skills</h2>
      <div className="row">
        {Object.keys(skillsData).length === 0 ? (
          <div className="col-12">No skills available.</div>
        ) : (
          Object.entries(skillsData).map(([category, skills], index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 skill-card" tabIndex="0" aria-label={`Skill category: ${category}`}>
                <div className="card-body">
                  <h3 className="card-title skill-category">{category}</h3>
                  <div className="d-flex flex-wrap">
                    {(skills || []).map((skill, i) => (
                      <span key={i} className="badge me-1 mb-1 skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Skills;
