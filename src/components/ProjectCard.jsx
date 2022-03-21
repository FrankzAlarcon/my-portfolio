import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/projectCard.css';

function ProjectCard({
  image, text, id, children,
}) {
  return (
    <Link to={`/project/${id}`} title="click to visit">
      <div className="project-card">
        <img src={image} alt={text} />
        <div className="card-caption">
          <p className="card-text">{text}</p>
          {
            children
          }
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
