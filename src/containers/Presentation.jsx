import React from 'react';
import '../styles/presentation.css';

function Presentation({
  image, text, boldText, children,
}) {
  return (
    <div id="presentation" className="presentation-container">
      <div className="presentation-main">
        <p className="presentation-text">
          {text}
          <span className="presentation-text__bold">{boldText}</span>
        </p>
        <img className="presentation-image" src={image} alt="me" />
      </div>
      <div className="overview">
        {children}
      </div>
    </div>
  );
}

export default Presentation;
