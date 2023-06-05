import React from "react";
import "../../styles/Navigation.css";
import {Logo} from "./Logo";

export function Navigation ({ currentPage, handlePageChange}) {
    return (
      <nav className="navContainer">
        <div className="navigationDiv">
          <Logo />
        </div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div classname="navbarLinks">
          <ul className="navbar text-light">
            <li className="nav-item">
              {" "}
              <a
                href="#aboutMe"
                className="text-light"
                id="nav1"
                onClick={() => handlePageChange("AboutMe")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a
                href="#portfiolio"
                className="text-light"
                id="nav2"
                onClick={() => handlePageChange("Portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a
                href="#contact"
                className="text-light"
                id="nav3"
                onClick={() => handlePageChange("Contact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a
                href="#resume"
                className="text-light"
                id="nav4"
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
};
