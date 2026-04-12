import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WorkshopList from "./pages/WorkshopList";
import WorkshopDetails from "./pages/WorkshopDetails";
import ProposeWorkshop from "./pages/ProposeWorkshop";
import Profile from "./pages/Profile";
import WorkshopStatus from "./pages/WorkshopStatus";
import "./styles/global.css";

export default function App() {
  const [user, setUser] = useState(null); // mock auth state

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <Router>
      <div className="app-shell">
        <Navbar user={user} onLogout={logout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workshops" element={<WorkshopList />} />
            <Route path="/workshops/:id" element={<WorkshopDetails />} />
            <Route path="/propose" element={<ProposeWorkshop />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/status" element={<WorkshopStatus />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
