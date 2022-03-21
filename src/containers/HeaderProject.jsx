import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function HeaderProject() {
  return (
    <div className="header">
      <div className="header-left back-arrow">
        <Link to="/home"><BiArrowBack size={30} color="#ee6c4d" /></Link>
        <span className="header-name">Frankz Alarcon</span>
      </div>
    </div>
  );
}

export default HeaderProject;
