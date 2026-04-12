import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal",
];

export default function Register() {
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", username: "",
    password: "", phone: "", institute: "", department: "",
    position: "Coordinator", location: "", state: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.first_name) e.first_name = "Required";
    if (!form.last_name)  e.last_name  = "Required";
    if (!form.email)      e.email      = "Required";
    if (!form.username)   e.username   = "Required";
    if (!form.password || form.password.length < 8)
      e.password = "Minimum 8 characters";
    if (!form.phone)      e.phone      = "Required";
    if (!form.institute)  e.institute  = "Required";
    if (!form.state)      e.state      = "Please select a state";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSuccess(true);
    setTimeout(() => navigate("/login"), 2000);
  };

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-card card text-center">
          <div style={{ fontSize: 48 }}>✅</div>
          <h2 style={{ marginTop: 16 }}>Registration successful!</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 8 }}>
            Redirecting you to login…
          </p>
        </div>
      </div>
    );
  }

  const Field = ({ name, label, type = "text", placeholder }) => (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type}
        className={`form-input ${errors[name] ? "form-input--error" : ""}`}
        placeholder={placeholder || label}
        value={form[name]}
        onChange={handleChange}
      />
      {errors[name] && <span className="form-error">{errors[name]}</span>}
    </div>
  );

  return (
    <div className="auth-page auth-page--wide">
      <div className="auth-card auth-card--wide card">
        <div className="auth-card__header">
          <div className="auth-logo">F</div>
          <h1 className="auth-card__title">Coordinator Registration</h1>
          <p className="auth-card__sub">Create your account to start booking workshops</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="register-grid">
            <Field name="first_name" label="First Name" />
            <Field name="last_name"  label="Last Name" />
            <Field name="email"      label="Email" type="email" />
            <Field name="username"   label="Username" />
            <Field name="password"   label="Password" type="password" placeholder="Min 8 characters" />
            <Field name="phone"      label="Phone Number" type="tel" />
            <Field name="institute"  label="Institute Name" />
            <Field name="department" label="Department" />

            <div className="form-group">
              <label className="form-label" htmlFor="position">Position</label>
              <select id="position" name="position" className="form-select" value={form.position} onChange={handleChange}>
                <option value="Coordinator">Coordinator</option>
                <option value="Faculty">Faculty</option>
                <option value="HOD">HOD</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="state">State</label>
              <select
                id="state" name="state"
                className={`form-select ${errors.state ? "form-input--error" : ""}`}
                value={form.state} onChange={handleChange}
              >
                <option value="">Select state</option>
                {STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.state && <span className="form-error">{errors.state}</span>}
            </div>

            <div className="form-group register-grid__full">
              <label className="form-label" htmlFor="location">City / Location</label>
              <input id="location" name="location" type="text" className="form-input"
                placeholder="e.g. Mumbai" value={form.location} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: 8 }}>
            Create Account
          </button>
        </form>

        <hr className="divider" />
        <div className="auth-card__footer">
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}
