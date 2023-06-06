import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "../../../styles/Card.css";

export function Card({ primaryCard, secondaryCard, projectData }) {

 let sourcePath1 = `${process.env.PUBLIC_URL}${projectData.defaultImage}`;
 let sourcePath2 = `${process.env.PUBLIC_URL}${projectData.alternateImage}`;

  const [isHovered, setIsHovered] = useState(false);

    return (
    <div className={`row`}>
      <div className={`col-${primaryCard === true ? '12 primaryCard' : secondaryCard === true ? '6 secondaryCard' : '4 tertiaryCard'}`}>
        <div className="card" >
          <img className="card-img-top" src={isHovered ? sourcePath2 : sourcePath1} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} alt="Project" />
          <div className="card-body">
            <h5 className="card-title">{projectData.title}</h5>
            <p className="card-text">
              {projectData.description}
            </p>
            <a href={projectData.gitHubURL} className="socialMediaIcon">
              <FaGithub />
            </a>
            <a href={projectData.deploymentURL}>
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
