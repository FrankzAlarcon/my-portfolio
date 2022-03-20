import React from 'react';
import '../styles/button.css';

function Button({ text }) {
  return (
    <a href="#my-projects" type="button" className="button-home">{text}</a>
  );
}

export default Button;
