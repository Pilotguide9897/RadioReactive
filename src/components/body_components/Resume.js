import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FaFile } from "react-icons/fa";

export function Resume () {
    return (
      <div className="resumeContainer">
        <h1 className="sectionTitle">Resume</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">{/* Content for the left column */}</div>
            <div className="col-md-6">{/* Content for the right column */}</div>
          </div>
        </div>
        <p>
          A digital copy of my resume is free for you to review by following the
          link below!
        </p>
        <a href="https://docs.google.com/document/d/1sHwNQpeueq_V3hfTDiIXsr6bWi5T2iGZP9gNZC9rsJc/edit?usp=sharing">
          <FaFile />
        </a>
      </div>
    );
};