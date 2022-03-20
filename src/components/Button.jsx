import React, { useContext } from 'react';
import { context } from '../context/Context';
import '../styles/button.css';

function Button({ text, href }) {
  const { closeModal } = useContext(context);
  return (
    <a href={href} type="button" className="button-home" onClick={closeModal}>{text}</a>
  );
}

export default Button;
