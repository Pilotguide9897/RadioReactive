import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "../../../styles/Card.css";

export function Card({ projectData }) {

  let sourcePath1 = {projectData.defaultImage};
  let sourcePath2 = {projectData.alternateImage};

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src= alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{projectData.title}</h5>
        <p className="card-text">
          {projectData.description}
        </p>
        <a href={projectData.gitHubURL} className="socialMediaIcon">
          <FaGithub />
        </a>
        <a href={projectData.deployedURL}>
          <FaLink />
        </a>
      </div>
    </div>
  );
};
