import React from "react";
import "../styles/Navbar.css";

export function Navigation ({ currentPage, handlePageChange}) {
    return (
      <nav>
        <ul className="navbar">
          <li className="nav-item"> <a href="#aboutMe" onClick={() => handlePageChange("AboutMe")}>About Me</a></li>
          <li className="nav-item"> <a href="#portfiolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</a></li>
          <li className="nav-item"> <a href="#contact" onClick={() => handlePageChange("Contact")}>Contact</a></li>
          <li className="nav-item"> <a href="#resume" onClick={() => handlePageChange("Resume")}>Resume</a></li>
        </ul>
      </nav>
    );
};
