import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Dr.Ghassen</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="portfilio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/drghassen/"
            className="home__social-icon"
            target="_blank">
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/ghassendridisousse/"
            className="home__social-icon"
            target="_blank">
            <i class="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ghassen-dridi-b2bb08284/"
            className="home__social-icon"
            target="_blank">
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/drghassen"
            className="home__social-icon"
            target="_blank">
            <i class="uil uil-github"></i>
          </a>
        </div>
        <span className="footer__copy">Welcome everyone</span>
      </div>
    </footer>
  );
};

export default Footer;
