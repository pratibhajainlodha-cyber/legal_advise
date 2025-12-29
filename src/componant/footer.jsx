import React from 'react';
import Lawicon from "../assets/lawicon.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* Replace with your SVG/logo */}
              <div className="header-logo">
                <a href="/">
                  <img src={Lawicon} alt="logo" />
                </a>
              </div>
            </div>
            <div className='footer-contact'>
              <h3>Find Us</h3>
              <p> 205, QUEEN’S COURT APARTMENTS, NEARBY VIJAYA DIAGNOISTIC CENTRE, STREET NO. 19, HIMAYATNAGAR, HYDERABAD- 29, TELANGANA, INDIA.</p>
              <p>(+91)8639062427</p>
              <p>temmink@outlook.com</p>
            </div>
          </div>
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-practice">
            <h3>Practice Areas</h3>
            <ul>
              <li>IBC</li>
              <li>Civil Law</li>
              <li>recovery suits</li>
              <li>ADR</li>
              <li>IBC</li>
            </ul>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
