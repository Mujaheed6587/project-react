import React from "react";
import "../../css/Navbar.css";
// import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        {/* <FaBars className="menu-icon" /> */}
        
        <ul className="nav-links">
          <li className="active">Overview</li>
          <li className="active1">Members</li>
          <li className="active2">Events</li>
          <li className="active3">Attendees</li>
          <li className="active4">Tickets</li>
          <li className="active5">Sponsors</li>
          <li className="active6">Website</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <img
          src="https://via.placeholder.com/35"
          alt="profile"
          className="profile-pic"
        />
      </div>
    </nav>
  );
}

export default Navbar;
