import { useState } from "react";
import type { Project } from "../../types";
import projects from "../../data/Projects";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <button 
                className="project-btn"
                onClick={() => openModal(project)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h3>{selectedProject.title}</h3>
            <div className="modal-body">
              <p className="detailed-description">
                {selectedProject.detailedDescription}
              </p>
              
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="technologies-section">
                  <h4>Technologies Used</h4>
                  <div className="technologies">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="features-section">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {(selectedProject.link || selectedProject.github) && (
                <div className="project-links">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
