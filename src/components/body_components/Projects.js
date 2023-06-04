import React from "react";
import { Card } from "./project_cards/Card";
import "../../styles/Projects.css";

export function Projects() {
    return (
      <div className="projectsContainer">
        <h1 className="sectionTitle">Portfolio</h1>
        <div>
            <Card />
        </div>
      </div>
    );
};