import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Solvit Logo" className="footer-logo" />
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-conditions">Terms & Conditions</a>
      </div>
      <div className="footer-rights">
        &copy; 2024 Solvit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

