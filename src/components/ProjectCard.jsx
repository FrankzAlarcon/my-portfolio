import React from 'react';
import '../styles/projectCard.css';

function ProjectCard({ image, text, children }) {
  return (
    <div className="project-card">
      <img src={image} alt={text} />
      <div className="card-caption">
        <p className="card-text">{text}</p>
        {
          children
        }
      </div>
    </div>
  );
}

export default ProjectCard;
