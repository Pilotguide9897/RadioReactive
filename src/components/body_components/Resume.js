import React from "react";
import { FaFile } from "react-icons/fa";
import { LanguagesTbl } from "./proficiency_tables/Languages";
import { ToolsAndTechnologiesTbl } from "./proficiency_tables/Tools&frameworks";
import "../../styles/Resume.css";

export function Resume () {
    return (
      <div className="resumeContainer">
        <h1 className="sectionTitle">Resume</h1>
        <div className="resumeContent">
              <LanguagesTbl />
              <ToolsAndTechnologiesTbl />
        </div>
        <p>
          Download a copy of my resume by following this link!{" "}
          <a href="https://docs.google.com/document/d/1sHwNQpeueq_V3hfTDiIXsr6bWi5T2iGZP9gNZC9rsJc/edit?usp=sharing">
            <FaFile />
          </a>
        </p>
        <br/>
      </div>
    );
};