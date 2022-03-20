import React from 'react';
import '../styles/mywork.css';

function MyWork({ children }) {
  return (
    <div id="my-projects" className="my-work-container">
      <h2 className="my-work-text">My work</h2>
      {children}
    </div>
  );
}

export default MyWork;
