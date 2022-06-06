import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <p>Fabien THIOT</p>
      <nav>
        <NavLink to="/" end className="link">
          ACCEUIL
        </NavLink>
        <NavLink to="/aboutme" end className="link">
          A PROPOS
        </NavLink>
        <NavLink to="/projet" end className="link">
          PROJETS
        </NavLink>
        <NavLink to="/contact" end className="link">
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
