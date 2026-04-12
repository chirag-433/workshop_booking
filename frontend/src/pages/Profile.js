import React, { useState } from "react";
import "./Profile.css";

// Mock data — replace with real API calls
const MOCK_USER = {
  first_name: "Rahul",
  last_name: "Sharma",
  email: "rahul.sharma@example.com",
  phone: "9876543210",
  institute: "VJTI Mumbai",
  department: "Computer Engineering",
  position: "Coordinator",
  location: "Mumbai",
  state: "Maharashtra",
};

const MOCK_WORKSHOPS = [
  { id: 1, type: "Python", date: "2024-10-15", instructor: "Dr. Anil Kumar", status: "confirmed" },
  { id: 2, type: "Scilab", date: "2024-11-02", instructor: null,             status: "pending" },
  { id: 3, type: "Arduino", date: "2024-08-20", instructor: "Prof. Sneha R",  status: "completed" },
];

const STATUS_BADGE = {
  confirmed: <span className="badge badge-green">Confirmed</span>,
  pending:   <span className="badge badge-yellow">Pending</span>,
  completed: <span className="badge badge-blue">Completed</span>,
  rejected:  <span className="badge badge-red">Rejected</span>,
};

export default function Profile({ user }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm]       = useState(MOCK_USER);
  const [saved, setSaved]     = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>My Profile</h1>
        <p>Manage your account details and view your workshop history</p>
      </div>

      {saved && <div className="alert alert-success">✅ Profile updated successfully.</div>}

      <div className="profile-layout">
        {/* Left — profile card */}
        <aside className="profile-sidebar">
          <div className="card profile-card">
            <div className="profile-avatar">
              {form.first_name[0]}{form.last_name[0]}
            </div>
            <h2 className="profile-card__name">
              {form.first_name} {form.last_name}
            </h2>
            <span className="badge badge-blue profile-card__role">
              {form.position}
            </span>
            <hr className="divider" />
            <ul className="profile-card__info">
              <li><span>📧</span>{form.email}</li>
              <li><span>📞</span>{form.phone}</li>
              <li><span>🏛</span>{form.institute}</li>
              <li><span>📍</span>{form.location}, {form.state}</li>
            </ul>
            {!editing && (
              <button
                className="btn btn-outline btn-full"
                style={{ marginTop: 16 }}
                onClick={() => setEditing(true)}
              >
                ✏️ Edit Profile
              </button>
            )}
          </div>
        </aside>

        {/* Right — edit form OR workshop history */}
        <div className="profile-main">
          {editing ? (
            <div className="card profile-edit">
              <h2 className="profile-section-title">Edit Profile</h2>
              <form onSubmit={handleSave} noValidate>
                <div className="profile-edit__grid">
                  {[
                    { name: "first_name",  label: "First Name" },
                    { name: "last_name",   label: "Last Name" },
                    { name: "email",       label: "Email",       type: "email" },
                    { name: "phone",       label: "Phone Number", type: "tel" },
                    { name: "institute",   label: "Institute" },
                    { name: "department",  label: "Department" },
                    { name: "location",    label: "City / Location" },
                    { name: "state",       label: "State" },
                  ].map(({ name, label, type = "text" }) => (
                    <div className="form-group" key={name}>
                      <label className="form-label" htmlFor={name}>{label}</label>
                      <input
                        id={name} name={name} type={type}
                        className="form-input"
                        value={form[name]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
                <div className="profile-edit__actions">
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="card profile-workshops">
              <h2 className="profile-section-title">Workshop History</h2>

              {MOCK_WORKSHOPS.length === 0 ? (
                <div className="profile-workshops__empty">
                  <p>You haven't proposed any workshops yet.</p>
                  <a href="/propose" className="btn btn-primary" style={{ marginTop: 12 }}>
                    Propose Your First Workshop
                  </a>
                </div>
              ) : (
                <>
                  {/* Mobile cards */}
                  <div className="profile-workshops__cards">
                    {MOCK_WORKSHOPS.map((w) => (
                      <div key={w.id} className="pw-item">
                        <div className="pw-item__header">
                          <span className="pw-item__type">{w.type}</span>
                          {STATUS_BADGE[w.status]}
                        </div>
                        <div className="pw-item__meta">
                          <span>📅 {w.date}</span>
                          <span>
                            👤{" "}
                            {w.instructor || (
                              <span style={{ color: "var(--text-muted)" }}>
                                Instructor pending
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop table */}
                  <div className="table-wrap profile-workshops__table">
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Workshop Type</th>
                          <th>Date</th>
                          <th>Instructor</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {MOCK_WORKSHOPS.map((w, i) => (
                          <tr key={w.id}>
                            <td>{i + 1}</td>
                            <td><strong>{w.type}</strong></td>
                            <td>{w.date}</td>
                            <td>
                              {w.instructor || (
                                <span className="badge badge-yellow">Pending</span>
                              )}
                            </td>
                            <td>{STATUS_BADGE[w.status]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
