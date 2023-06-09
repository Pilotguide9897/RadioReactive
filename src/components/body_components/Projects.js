import React from "react";
import { Card } from "./project_cards/Card";
import portfolioProjects from "../../project_data/projectData.json"

export function Projects() {
    return (
      <div className="projectsContainer">
        <h1 className="sectionTitle">Portfolio</h1>
        <div className="cardContainer">
            {portfolioProjects.map((portfolioItem, index) => {
              if (index === 0) {
                return (
                  <Card primaryCard={true} projectData={portfolioItem} key={portfolioItem.id}/>
                );
              } else if (index === 1 || index === 2) {
                return (
                  <Card secondaryCard={true} projectData={portfolioItem} key={portfolioItem.id} />
                );
              } else {
                return (
                  <Card projectData={portfolioItem} key={portfolioItem.id} />
                );
              }
            })}
        </div>
      </div>
    );
};