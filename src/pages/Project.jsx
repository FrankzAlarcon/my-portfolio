import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import HeaderProject from '../containers/HeaderProject';
import Modal from '../containers/Modal';
import Footer from '../containers/Footer';
import { context } from '../context/Context';
import db from '../projects.json';
import '../styles/project.css';

function Project() {
  const { id } = useParams();
  const { showModal } = useContext(context);
  const project = db.projects.find((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {showModal && <Modal />}
      <HeaderProject />
      <div className="project-container">
        <h2 className="project-name">{project.id}</h2>
        <img className="project-image" src={project.image} alt={`${project.id}`} />
        <p className="project-overview">{project.overview}</p>
        <h2 className="project-features-text">Features</h2>
        <ul className="project-features">
          {
            project.features.map((feature, index) => <li key={index}>{feature}</li>)
          }
        </ul>
        <Button text="See it here !!" href={project.url} target="_blank" />
      </div>
      <Footer />
    </>
  );
}

export default Project;
