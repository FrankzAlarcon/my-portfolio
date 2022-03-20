import React from 'react';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <span className="footer-text">Contact:</span>
        <div className="footer-contact">
          <a href="mailto:leninalarcon7@gmail.com" target="_blank" aria-label="instagram" rel="noreferrer"><MdEmail size={20} /></a>
          <a href="https://www.instagram.com/lenin.alarcon.752/" target="_blank" aria-label="instagram" rel="noreferrer"><RiInstagramFill size={20} /></a>
        </div>
      </div>
      <a className="underline-dinamyc" href="https://github.com/FrankzAlarcon" target="_blank" rel="noreferrer">@FrankzAlarcon</a>
    </div>
  );
}

export default Footer;
