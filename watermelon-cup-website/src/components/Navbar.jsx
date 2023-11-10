import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="title">
            Watermelon Cup
          </Link>
        </li>
        <li>
          <NavLink to="/teams">Teams</NavLink>
        </li>
        <li>
          <NavLink to="/schedule">Schedule</NavLink>
        </li>
        <li>
          <NavLink to="/matches">Upcoming Matches</NavLink>
        </li>
        <li>
          <button>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};
