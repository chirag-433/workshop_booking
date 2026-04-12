import React, { useState } from "react";
import "./WorkshopStatus.css";

const ALL_WORKSHOPS = [
  { id: 1, type: "Python",   date: "2024-10-15", instructor: "Dr. Anil Kumar",  coordinator: "Rahul Sharma",  institute: "VJTI Mumbai",       status: "confirmed" },
  { id: 2, type: "Scilab",   date: "2024-11-02", instructor: null,              coordinator: "Priya Desai",   institute: "COEP Pune",         status: "pending"   },
  { id: 3, type: "OpenFOAM", date: "2024-09-18", instructor: "Prof. Sneha R",   coordinator: "Arjun Nair",    institute: "NIT Calicut",        status: "completed" },
  { id: 4, type: "Arduino",  date: "2024-12-05", instructor: "Dr. Ravi S",      coordinator: "Meera Pillai",  institute: "GEC Thrissur",       status: "confirmed" },
  { id: 5, type: "DWSIM",    date: "2024-08-10", instructor: "Prof. Kumar",     coordinator: "Suresh Babu",   institute: "BIT Mesra",          status: "completed" },
  { id: 6, type: "R",        date: "2024-12-20", instructor: null,              coordinator: "Anita Roy",     institute: "Jadavpur University", status: "pending"  },
];

const STATUS_META = {
  all:       { label: "All",       badge: null },
  pending:   { label: "Pending",   badge: "badge-yellow" },
  confirmed: { label: "Confirmed", badge: "badge-green"  },
  completed: { label: "Completed", badge: "badge-blue"   },
  rejected:  { label: "Rejected",  badge: "badge-red"    },
};

export default function WorkshopStatus() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const visible = ALL_WORKSHOPS.filter((w) => {
    const matchStatus = filter === "all" || w.status === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      w.type.toLowerCase().includes(q) ||
      w.coordinator.toLowerCase().includes(q) ||
      w.institute.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const counts = Object.keys(STATUS_META).reduce((acc, k) => {
    acc[k] = k === "all"
      ? ALL_WORKSHOPS.length
      : ALL_WORKSHOPS.filter((w) => w.status === k).length;
    return acc;
  }, {});

  return (
    <div className="container">
      <div className="page-header">
        <h1>Workshop Status</h1>
        <p>Track the status of all proposed and scheduled workshops</p>
      </div>

      {/* Summary tiles */}
      <div className="ws-tiles">
        {["pending", "confirmed", "completed"].map((s) => (
          <div key={s} className={`ws-tile card ws-tile--${s}`}>
            <span className="ws-tile__count">{counts[s] || 0}</span>
            <span className="ws-tile__label">{STATUS_META[s].label}</span>
          </div>
        ))}
      </div>

      {/* Filters + search */}
      <div className="ws-toolbar">
        <div className="ws-filters" role="group" aria-label="Filter by status">
          {Object.entries(STATUS_META).map(([key, { label }]) => (
            <button
              key={key}
              className={`ws-filter-btn ${filter === key ? "ws-filter-btn--active" : ""}`}
              onClick={() => setFilter(key)}
            >
              {label}
              <span className="ws-filter-count">{counts[key] || 0}</span>
            </button>
          ))}
        </div>
        <input
          type="search"
          className="form-input ws-search"
          placeholder="🔍  Search by type, coordinator, institute…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search workshops"
        />
      </div>

      {/* Mobile cards */}
      <div className="ws-cards">
        {visible.length === 0 ? (
          <div className="ws-empty">No workshops match your filters.</div>
        ) : (
          visible.map((w) => (
            <div key={w.id} className="ws-card card">
              <div className="ws-card__header">
                <div>
                  <h3 className="ws-card__type">{w.type}</h3>
                  <p className="ws-card__institute">{w.institute}</p>
                </div>
                <span className={`badge ${STATUS_META[w.status]?.badge}`}>
                  {STATUS_META[w.status]?.label}
                </span>
              </div>
              <div className="ws-card__details">
                <span>📅 {w.date}</span>
                <span>👤 {w.coordinator}</span>
                <span>
                  🎓{" "}
                  {w.instructor || (
                    <span style={{ color: "var(--text-muted)" }}>TBA</span>
                  )}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop table */}
      <div className="table-wrap ws-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Workshop Type</th>
              <th>Date</th>
              <th>Coordinator</th>
              <th>Institute</th>
              <th>Instructor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", color: "var(--text-muted)", padding: "32px" }}>
                  No workshops match your filters.
                </td>
              </tr>
            ) : (
              visible.map((w, i) => (
                <tr key={w.id}>
                  <td>{i + 1}</td>
                  <td><strong>{w.type}</strong></td>
                  <td>{w.date}</td>
                  <td>{w.coordinator}</td>
                  <td>{w.institute}</td>
                  <td>
                    {w.instructor || (
                      <span className="badge badge-yellow">Pending</span>
                    )}
                  </td>
                  <td>
                    <span className={`badge ${STATUS_META[w.status]?.badge}`}>
                      {STATUS_META[w.status]?.label}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
