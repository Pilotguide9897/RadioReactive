import React from "react";
import "../../../styles/Tables.css";
import { FaJsSquare, FaHtml5, FaCss3, FaPython, FaRProject   } from "react-icons/fa";

export function LanguagesTbl() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered table-hover content-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Languages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                JavaScript(ES6) <FaJsSquare />
              </td>
            </tr>
            <tr>
              <td>
                CSS3 <FaCss3 />
              </td>
            </tr>
            <tr>
              <td>
                HTML5 <FaHtml5 />
              </td>
            </tr>
            <tr>
              <td>
                Python <FaPython />
              </td>
            </tr>
            <tr>
              <td>
                R <FaRProject />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};