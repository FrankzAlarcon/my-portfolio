import React from 'react';
import { AiFillBulb } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import '../styles/header.css';

function Header() {
  return (
    <div id="header-part" className="header">
      <div className="header-left">
        <AiFillBulb size={30} color="#faff11" />
        <span className="header-name">Frankz Alarcon</span>
      </div>
      <nav className="header-rigth">
        <CgDetailsMore size={30} color="#ee6c4d" />
      </nav>
    </div>
  );
}

export default Header;
