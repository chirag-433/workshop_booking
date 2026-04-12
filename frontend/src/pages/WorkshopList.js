import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WorkshopList.css";

const WORKSHOPS = [
  { id: 1, name: "Python", duration: 2, description: "Learn Python programming from scratch with hands-on labs.", tags: ["Programming"] },
  { id: 2, name: "Scilab", duration: 2, description: "Numerical computing and simulation using Scilab.", tags: ["Math", "Simulation"] },
  { id: 3, name: "OpenFOAM", duration: 3, description: "Computational fluid dynamics using OpenFOAM.", tags: ["CFD", "Engineering"] },
  { id: 4, name: "Arduino", duration: 1, description: "Introduction to embedded systems and Arduino prototyping.", tags: ["Hardware", "IoT"] },
  { id: 5, name: "DWSIM", duration: 2, description: "Chemical process simulation using DWSIM.", tags: ["Chemical", "Simulation"] },
  { id: 6, name: "R", duration: 2, description: "Statistical computing and data analysis with R.", tags: ["Statistics", "Data"] },
  { id: 7, name: "QGIS", duration: 2, description: "Geographic Information Systems with open-source QGIS.", tags: ["GIS", "Geography"] },
  { id: 8, name: "LibreOffice", duration: 1, description: "Productivity suite training for academic and office use.", tags: ["Office"] },
];

export default function WorkshopList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const filtered = WORKSHOPS.filter(w =>
    w.name.toLowerCase().includes(search.toLowerCase()) ||
    w.description.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="container">
      <div className="page-header">
        <h1>Workshop Types</h1>
        <p>Browse available FOSSEE workshops and book one for your institution</p>
      </div>

      {/* Search */}
      <div className="wl-toolbar">
        <input
          type="search"
          className="form-input wl-search"
          placeholder="🔍  Search workshops…"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          aria-label="Search workshops"
        />
      </div>

      {/* Grid */}
      {visible.length === 0 ? (
        <div className="wl-empty">
          <p>No workshops match your search.</p>
        </div>
      ) : (
        <div className="wl-grid">
          {visible.map(w => (
            <div key={w.id} className="wl-card card">
              <div className="wl-card__icon">{w.name[0]}</div>
              <div className="wl-card__body">
                <div className="wl-card__tags">
                  {w.tags.map(t => (
                    <span key={t} className="badge badge-blue">{t}</span>
                  ))}
                </div>
                <h3 className="wl-card__title">{w.name}</h3>
                <p className="wl-card__desc">{w.description}</p>
                <div className="wl-card__meta">
                  <span className="wl-card__duration">⏱ {w.duration} day{w.duration > 1 ? "s" : ""}</span>
                  <Link to={`/workshops/${w.id}`} className="btn btn-outline btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button className="page-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i+1} className={`page-btn ${page === i+1 ? "active" : ""}`} onClick={() => setPage(i+1)}>
              {i+1}
            </button>
          ))}
          <button className="page-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
        </div>
      )}
    </div>
  );
}
