import React from "react";
import { useParams, Link } from "react-router-dom";
import "./WorkshopDetails.css";

const WORKSHOPS = {
  1: { name: "Python", duration: 2, description: "A comprehensive hands-on workshop covering Python fundamentals, data types, control flow, functions, modules, and an introduction to scientific computing using NumPy and Matplotlib.", terms: "The coordinator must have a computer lab with minimum 30 systems. Each system must have Python 3.x installed. A projector and stable internet connection are required. The workshop must be scheduled on weekdays only.", tags: ["Programming"] },
  2: { name: "Scilab", duration: 2, description: "Numerical computing and simulation using Scilab. Topics include matrix operations, plotting, and solving differential equations.", terms: "Minimum 20 systems required. Scilab must be pre-installed. A lab coordinator must be available throughout.", tags: ["Math", "Simulation"] },
  3: { name: "OpenFOAM", duration: 3, description: "Computational fluid dynamics using OpenFOAM. Covers meshing, solvers, and post-processing.", terms: "Linux systems required. Minimum 20 GB free space per machine. An HPC setup is preferred.", tags: ["CFD", "Engineering"] },
};

export default function WorkshopDetails() {
  const { id } = useParams();
  const w = WORKSHOPS[id];

  if (!w) return (
    <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
      <h2>Workshop not found</h2>
      <Link to="/workshops" className="btn btn-primary" style={{ marginTop: 20 }}>← Back to Workshops</Link>
    </div>
  );

  return (
    <div className="container">
      <div className="page-header">
        <Link to="/workshops" className="wd-back">← Back to Workshops</Link>
      </div>

      <div className="wd-layout">
        {/* Main info */}
        <div className="wd-main">
          <div className="wd-hero card">
            <div className="wd-hero__icon">{w.name[0]}</div>
            <div>
              <div className="wd-hero__tags">
                {w.tags.map(t => <span key={t} className="badge badge-blue">{t}</span>)}
              </div>
              <h1 className="wd-hero__title">{w.name} Workshop</h1>
              <p className="wd-hero__duration">⏱ Duration: {w.duration} day{w.duration > 1 ? "s" : ""}</p>
            </div>
          </div>

          <div className="wd-section card">
            <h2 className="wd-section__title">About this Workshop</h2>
            <p className="wd-section__body">{w.description}</p>
          </div>

          <div className="wd-section card">
            <h2 className="wd-section__title">Terms &amp; Conditions</h2>
            <p className="wd-section__body" style={{ color: "var(--text-secondary)" }}>{w.terms}</p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="wd-sidebar">
          <div className="card wd-cta">
            <h3 className="wd-cta__title">Ready to book?</h3>
            <p className="wd-cta__desc">Propose this workshop for your institution and we'll match you with an instructor.</p>
            <Link to="/propose" className="btn btn-primary btn-full">Propose Workshop</Link>
            <Link to="/login"   className="btn btn-ghost btn-full" style={{ marginTop: 8 }}>Login to continue</Link>
          </div>
          <div className="card wd-meta">
            <div className="wd-meta__row">
              <span className="wd-meta__label">Duration</span>
              <span className="wd-meta__val">{w.duration} day{w.duration > 1 ? "s" : ""}</span>
            </div>
            <div className="wd-meta__row">
              <span className="wd-meta__label">Category</span>
              <span className="wd-meta__val">{w.tags[0]}</span>
            </div>
            <div className="wd-meta__row">
              <span className="wd-meta__label">Offered by</span>
              <span className="wd-meta__val">FOSSEE, IIT Bombay</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
