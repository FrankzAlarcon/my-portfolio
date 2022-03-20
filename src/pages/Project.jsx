import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../containers/Header';
import Modal from '../containers/Modal';
import { context } from '../context/Context';
import useOnScroll from '../hooks/useOnScroll';
import db from '../projects.json';

function Project() {
  const { id } = useParams();
  const { showModal } = useContext(context);
  const { showFixed } = useOnScroll();
  const project = db.projects.find((item) => item.id === id);
  return (
    <>
      {showModal && <Modal />}
      <Header showFixed={showFixed} />
      <div className="project-container">
        <h2>{project.id}</h2>
      </div>
    </>
  );
}

export default Project;
