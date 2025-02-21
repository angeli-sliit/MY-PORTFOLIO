import React from 'react';
import config from '../config/portfolioConfig.json';

const Projects = () => {
  return (
    <div className="container mt-5 projects-container"id = "projects">


      <h2 className="projects-title">Projects </h2>


      <div className="row">
        {config.projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
          <div className="card h-100 project-card">


              <div className="card-body">
                <h3 className="card-title project-title">{project.title}</h3>
                <p className="card-text project-description">{project.description}</p>


                <div className="mb-2">
                  <h6 className="mb-3 technology">Technologies:</h6>
                  <div className="d-flex flex-wrap mt-1">
                    {project.technologies.map((tech, i) => (
                    <span key={i} className="badge me-1 mb-1 tech-badge">{tech}</span>


                    ))}
                  </div>
                </div>
                <p className="project-role"><strong>Role:</strong> {project.role}</p>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Projects;
