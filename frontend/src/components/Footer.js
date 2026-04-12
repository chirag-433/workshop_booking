import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-mark">F</span>
          <div>
            <p className="footer__name">FOSSEE Workshops</p>
            <p className="footer__sub">Developed by FOSSEE group, IIT Bombay</p>
          </div>
        </div>
        <nav className="footer__links" aria-label="Footer navigation">
          <Link to="/workshops">Workshops</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </footer>
  );
}
