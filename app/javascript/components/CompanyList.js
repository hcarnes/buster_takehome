import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CompanyList";

const CompanyList = ({ companies }) => {
  return (
    <div className={styles.CompanyList}>
      <h2>Companies</h2>
      <span>
        <Link to="/companies/new">
          <span role="img" aria-label="plus symbol">
            ➕
          </span>
          Create new company.
        </Link>
      </span>
      <ul>
        {companies.map(c => (
          <li key={c.id}>
            <Link to={`/companies/${c.id}`}>
              <span>{c.name} </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
