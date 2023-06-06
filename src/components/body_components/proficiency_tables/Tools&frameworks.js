import React from "react";
import "../../../styles/Tables.css";
import { FaReact, FaNodeJs, FaServer, FaSpaceShuttle, FaBootstrap, FaDatabase, FaCube, FaMousePointer, FaFolderOpen, FaLaptopCode, FaGithubAlt, FaAddressBook, FaVrCardboard, FaFileCode } from "react-icons/fa";

export function ToolsAndTechnologiesTbl() {
    return (
      <table className="content-table">
        <thead>
          <tr>
            <th scope="col">Tools and Frameworks</th>
            <th>Technical Proficiencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              React <FaReact />
            </td>
            <td>
              Node.js <FaNodeJs />
            </td>
          </tr>
          <tr>
            <td>
              Express.js <FaServer />
            </td>
            <td>
              Bulma CSS <FaSpaceShuttle />
            </td>
          </tr>
          <tr>
            <td>
              Bootstrap CSS <FaBootstrap />
            </td>
            <td>
              SQL <FaDatabase />
            </td>
          </tr>
          <tr>
            <td>
              Sequelize <FaCube />
            </td>
            <td>
              NoSQL <FaFolderOpen />
            </td>
          </tr>
          <tr>
            <td>
              MongoDB <FaMousePointer />
            </td>
            <td>
              RESTful APIs <FaLaptopCode />
            </td>
          </tr>
          <tr>
            <td>
              GraphQL <FaAddressBook />
            </td>
            <td>
              GitHub <FaGithubAlt />
            </td>
          </tr>
          <tr>
            <td>
              Heroku <FaVrCardboard />
            </td>
            <td>
              GitHubPages <FaFileCode />
            </td>
          </tr>
        </tbody>
      </table>
    );
};