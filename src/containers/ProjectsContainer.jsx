import React from 'react';
import {
  SiWebpack, SiNetlify, SiCss3,
  SiReact, SiVite, SiRedux, SiHeroku, SiTwitter, SiCytoscapedotjs, SiJavascript, SiHtml5,
} from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import todoApp from '../images/todo.jpg';
import disneyClone from '../images/diney_clone.jpg';
import grafos from '../images/grafo.jpg';
import rickandmorty from '../images/rick_morty.jpg';
import db from '../projects.json';
import '../styles/projectContainer.css';

function ProjectsContainer() {
  return (
    <div className="project-card-container">
      <ProjectCard id={db.projects[0].id} image={todoApp} text="Todo-App">
        <div className="technologies-container">
          <SiWebpack />
          <SiReact color="#35a9ff" />
          <SiNetlify color="#008f00" />
          <SiCss3 color="#0066ff" />
        </div>
      </ProjectCard>
      <ProjectCard id={db.projects[1].id} image={disneyClone} text="Disney+ Clone">
        <div className="technologies-container">
          <SiVite />
          <SiReact color="#35a9ff" />
          <SiNetlify color="#008f00" />
          <SiCss3 color="#0066ff" />
          <SiRedux color="#ff00ff" />
        </div>
      </ProjectCard>
      <ProjectCard id={db.projects[2].id} image={grafos} text="Twitter API graphs">
        <div className="technologies-container">
          <SiWebpack />
          <SiJavascript color="#fafa00" />
          <SiHeroku color="#ff00af" />
          <SiTwitter color="#35a9ff" />
          <SiCytoscapedotjs color="#fafa00" />
        </div>
      </ProjectCard>
      <ProjectCard id={db.projects[3].id} image={rickandmorty} text="Fecth to API">
        <div className="technologies-container">
          <SiHtml5 color="#ff2700" />
          <SiCss3 color="#0066ff" />
          <SiJavascript color="#fafa00" />
        </div>
      </ProjectCard>
    </div>
  );
}

export default ProjectsContainer;
