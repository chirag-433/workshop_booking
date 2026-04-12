import React, { useState } from "react";
import "./ProposeWorkshop.css";

const WORKSHOP_TYPES = ["Python", "Scilab", "OpenFOAM", "Arduino", "DWSIM", "R", "QGIS", "LibreOffice"];

const getMinDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toISOString().split("T")[0];
};
const getMaxDate = () => {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split("T")[0];
};

export default function ProposeWorkshop() {
  const [form, setForm] = useState({ workshop_type: "", date: "", tnc: false });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: val });
  };

  const validate = () => {
    const e = {};
    if (!form.workshop_type) e.workshop_type = "Please select a workshop type";
    if (!form.date) e.date = "Please select a date";
    if (!form.tnc) e.tnc = "You must accept the terms and conditions";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <div className="pw-success card">
          <div className="pw-success__icon">🎉</div>
          <h2>Workshop Proposed!</h2>
          <p>Your proposal for <strong>{form.workshop_type}</strong> on <strong>{form.date}</strong> has been submitted. An instructor will be assigned shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Propose a Workshop</h1>
        <p>Fill in the details below to request a workshop at your institution</p>
      </div>

      <div className="alert alert-info">
        📌 Before proposing, check the <a href="/workshops">Workshop Types</a> section to learn about each workshop.
      </div>

      <div className="pw-layout">
        <div className="card pw-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="workshop_type">Workshop Type</label>
              <select
                id="workshop_type" name="workshop_type"
                className={`form-select ${errors.workshop_type ? "form-input--error" : ""}`}
                value={form.workshop_type} onChange={handleChange}
              >
                <option value="">Select a workshop…</option>
                {WORKSHOP_TYPES.map(w => <option key={w} value={w}>{w}</option>)}
              </select>
              {errors.workshop_type && <span className="form-error">{errors.workshop_type}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="date">Preferred Date</label>
              <input
                id="date" name="date" type="date"
                className={`form-input ${errors.date ? "form-input--error" : ""}`}
                min={getMinDate()} max={getMaxDate()}
                value={form.date} onChange={handleChange}
              />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>

            <div className="pw-tnc">
              <label className="pw-tnc__label">
                <input
                  type="checkbox" name="tnc"
                  className="pw-tnc__check"
                  checked={form.tnc} onChange={handleChange}
                />
                I accept the <button type="button" className="pw-tnc__link">terms and conditions</button>
              </label>
              {errors.tnc && <span className="form-error">{errors.tnc}</span>}
            </div>

            <button type="submit" className="btn btn-success btn-full" style={{ marginTop: 24 }}>
              Submit Proposal
            </button>
          </form>
        </div>

        <aside className="pw-info">
          <div className="card pw-info__card">
            <h3>What happens next?</h3>
            <ol className="pw-steps">
              <li><span>1</span>Your proposal is reviewed by the FOSSEE team</li>
              <li><span>2</span>An instructor is assigned based on availability</li>
              <li><span>3</span>You receive a confirmation email</li>
              <li><span>4</span>Workshop is conducted at your institution</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
