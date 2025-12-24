import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/sidebar.css";


export default function Sidebar() {
  return (
   
    <aside className="sidebar">
      <h3 className="sidebar-title">
        GDG on Campus Gombe State University - Nigeria
      </h3>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress"></div>
      </div>

      {/* Menu with NavLink */}
      <ul className="menu">
        <li>
          <NavLink to="/" className="link">Analytics</NavLink>
        </li>

        <li>
          <NavLink to="/events" className="link">Events</NavLink>
        </li>

        <li>
          <NavLink to="/emails" className="link">Emails</NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="link">Settings</NavLink>
        </li>

        <li>
          <NavLink to="/sponsors" className="link">Sponsors</NavLink>
        </li>
      </ul>
      <NavLink to="/Overview">Overview</NavLink>
      <NavLink to="/hero">hero</NavLink>
    </aside>
  );
}

