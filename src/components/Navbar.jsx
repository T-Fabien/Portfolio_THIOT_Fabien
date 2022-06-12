import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
      <nav>
        <NavLink to="/" end className="link">
          ACCEUIL
        </NavLink>
        <NavLink to="/aboutme" end className="link">
          A PROPOS
        </NavLink>
        <NavLink to="/projects" end className="link">
          PROJETS
        </NavLink>
        <NavLink to="/contact" end className="link">
          CONTACT
        </NavLink>
      </nav>
  );
}

export default Navbar;
