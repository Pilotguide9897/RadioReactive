import React from "react";
import "../../styles/Navigation.css";
import {Logo} from "./Logo";

export function Navigation ({ currentPage, handlePageChange}) {
    return (
      <nav className="navContainer">
        <div className="navigationDiv"><Logo /></div>
        <div classname="navbarLinks">
            <ul className="navbar">
              <li className="nav-item">
                {" "}
                <a href="#aboutMe" onClick={() => handlePageChange("AboutMe")}>
                  About Me
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  href="#portfiolio"
                  onClick={() => handlePageChange("Portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#contact" onClick={() => handlePageChange("Contact")}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href="#resume" onClick={() => handlePageChange("Resume")}>
                  Resume
                </a>
              </li>
            </ul>
          </div>
      </nav>
    );
};
