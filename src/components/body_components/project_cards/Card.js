import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "../../../styles/Card.css";

export function Card({ primaryCard, secondaryCard, projectData }) {

 let sourcePath1 = `${process.env.PUBLIC_URL}${projectData.defaultImage}`;
 let sourcePath2 = `${process.env.PUBLIC_URL}${projectData.alternateImage}`;

  const [isHovered, setIsHovered] = useState(false);

    return (
      <div className={`row`}>
        <div
          className={`col-${
            primaryCard === true
              ? "12 primaryCard"
              : secondaryCard === true
              ? "6 secondaryCard"
              : "4 tertiaryCard"
          } allCards`}
        >
          <div>
            <div className="card-body">
              <div
                className="card"
                id="cardImageContainer"
                style={{
                  backgroundImage: `url(${
                    isHovered ? sourcePath2 : sourcePath1
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              ></div>
              <h2 className="card-title">{projectData.title}</h2>
              <p className="card-text">{projectData.description}</p>
              <a href={projectData.gitHubURL} className="socialMediaIcon">
                <FaGithub />
              </a>
              <a href={projectData.deploymentURL} className="socialMediaIcon">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};
