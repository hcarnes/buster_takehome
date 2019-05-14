import React from "react";
import { Link } from "react-router-dom";

const CompanyList = ({ companies }) => {
  return (
    <>
      <h2>Companies</h2>
      <ul>
        {companies.map(c => (
          <li key={c.id}>
            <Link to={`/companies/${c.id}`}>
              <span>{c.name} </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompanyList;
