import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">F</span>
          <span className="navbar__logo-text">FOSSEE Workshops</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          <Link to="/" className={`navbar__link ${isActive("/") ? "navbar__link--active" : ""}`}>Home</Link>
          <Link to="/workshops" className={`navbar__link ${isActive("/workshops") ? "navbar__link--active" : ""}`}>Workshops</Link>
          {user && (
            <>
              <Link to="/propose" className={`navbar__link ${isActive("/propose") ? "navbar__link--active" : ""}`}>Propose</Link>
              <Link to="/status" className={`navbar__link ${isActive("/status") ? "navbar__link--active" : ""}`}>My Bookings</Link>
            </>
          )}
        </nav>

        {/* Auth */}
        <div className="navbar__auth">
          {user ? (
            <div className="navbar__user">
              <Link to="/profile" className="navbar__avatar" aria-label="Profile">
                {user.name?.[0]?.toUpperCase() || "U"}
              </Link>
              <button onClick={onLogout} className="btn btn-ghost btn-sm">Logout</button>
            </div>
          ) : (
            <div className="navbar__auth-btns">
              <Link to="/login" className="btn btn-ghost btn-sm">Sign in</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${open ? "navbar__hamburger--open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? "navbar__drawer--open" : ""}`} aria-hidden={!open}>
        <nav className="navbar__drawer-links">
          <Link to="/" className="navbar__drawer-link">Home</Link>
          <Link to="/workshops" className="navbar__drawer-link">Workshops</Link>
          {user && (
            <>
              <Link to="/propose" className="navbar__drawer-link">Propose Workshop</Link>
              <Link to="/status" className="navbar__drawer-link">My Bookings</Link>
              <Link to="/profile" className="navbar__drawer-link">Profile</Link>
            </>
          )}
          <hr className="divider" />
          {user ? (
            <button onClick={onLogout} className="btn btn-outline btn-full">Logout</button>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/login" className="btn btn-outline btn-full">Sign in</Link>
              <Link to="/register" className="btn btn-primary btn-full">Register</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
