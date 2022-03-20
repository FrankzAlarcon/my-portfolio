import React, { useContext } from 'react';
import { AiFillBulb } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { CgDetailsMore } from 'react-icons/cg';
import { context } from '../context/Context';
import '../styles/header.css';

function Header({ showFixed }) {
  const { showModal, openModal, closeModal } = useContext(context);
  return (
    <div id="header-part" className={`header ${showFixed ? 'fixed' : ''}`}>
      <div className="header-left">
        <AiFillBulb size={30} color={showModal ? '#fff' : '#faff11'} />
        <span className="header-name">Frankz Alarcon</span>
      </div>
      <nav className="header-rigth">
        {showModal ? <IoClose size={30} color="#fff" onClick={closeModal} /> : <CgDetailsMore size={30} color="#ee6c4d" onClick={openModal} />}
      </nav>
    </div>
  );
}

export default Header;
