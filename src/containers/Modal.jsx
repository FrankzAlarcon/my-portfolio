import React from 'react';
import { SiGithub } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import Header from './Header';
import Button from '../components/Button';
import useOnScroll from '../hooks/useOnScroll';
import '../styles/modal.css';

function Modal() {
  // const { showFixed } = useOnScroll();
  return (
    <div className="modal-container">
      <Header />
      <Button text="Reach out to me" href="#presentation" />
      <div className="modal-buttons-container">
        <Button text="About me" href="#about-me" />
        <Button text="My work" href="#my-projects" />
      </div>
      <div className="links">
        <a href="https://github.com/FrankzAlarcon" target="_blank" aria-label="github" rel="noreferrer"><SiGithub color="#fff" size={30} /></a>
        <a href="mailto:leninalarcon7@gmail.com" target="_blank" aria-label="email" rel="noreferrer"><MdEmail color="#fff" size={30} /></a>
        <a href="https://www.instagram.com/lenin.alarcon.752/" target="_blank" aria-label="instagram" rel="noreferrer"><RiInstagramFill color="#fff" size={30} /></a>
      </div>
    </div>
  );
}

export default Modal;
