import React from 'react';
import Header from './Header';
import '../styles/modal.css';
import Button from '../components/Button';

function Modal() {
  return (
    <div className="modal-container">
      <Header />
      <Button text="About me" />
    </div>
  );
}

export default Modal;
