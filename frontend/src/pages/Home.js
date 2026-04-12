import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const stats = [
  { label: "Workshops Conducted", value: "1,200+" },
  { label: "Registered Coordinators", value: "8,500+" },
  { label: "Instructors", value: "120+" },
  { label: "States Covered", value: "28" },
];

const features = [
  {
    icon: "📅",
    title: "Book a Workshop",
    desc: "Coordinators can propose workshop dates that suit their institution's schedule.",
  },
  {
    icon: "📊",
    title: "Live Statistics",
    desc: "Track workshops on a live map of India with pie charts and monthly counts.",
  },
  {
    icon: "✅",
    title: "Instant Status",
    desc: "Know whether your workshop is confirmed, pending, or postponed in real-time.",
  },
  {
    icon: "🔔",
    title: "Email Reminders",
    desc: "Automated reminders sent to coordinators and instructors before every session.",
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow badge badge-blue">IIT Bombay · FOSSEE</span>
            <h1 className="hero__title">
              Book FOSSEE<br />
              <span className="hero__title-accent">Workshops</span> Easily
            </h1>
            <p className="hero__desc">
              A platform for coordinators to book hands-on FOSS workshops at their
              institution — from Python to Scilab, OpenFOAM, and more.
            </p>
            <div className="hero__actions">
              <Link to="/workshops" className="btn btn-primary">Browse Workshops</Link>
              <Link to="/register" className="btn btn-outline">Register as Coordinator</Link>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__card hero__card--1">
              <div className="hero__card-icon">🐍</div>
              <p className="hero__card-name">Python</p>
              <span className="badge badge-green">Available</span>
            </div>
            <div className="hero__card hero__card--2">
              <div className="hero__card-icon">📐</div>
              <p className="hero__card-name">Scilab</p>
              <span className="badge badge-blue">2 days</span>
            </div>
            <div className="hero__card hero__card--3">
              <div className="hero__card-icon">🌊</div>
              <p className="hero__card-name">OpenFOAM</p>
              <span className="badge badge-orange">3 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map((s) => (
            <div key={s.label} className="stats-bar__item">
              <span className="stats-bar__value">{s.value}</span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Everything you need</h2>
            <p>A complete platform for workshop coordination</p>
          </div>
          <div className="features__grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card card">
                <span className="feature-card__icon">{f.icon}</span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready to host a workshop?</h2>
          <p>Register as a coordinator and propose your first workshop today.</p>
          <Link to="/register" className="btn btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
