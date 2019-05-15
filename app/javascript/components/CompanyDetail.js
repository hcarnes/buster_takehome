import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CompanyInfo";

const CompanyDetail = ({company, deleteCompany}) => {
  const handleDelete =  (e) => {
    e.preventDefault();
    deleteCompany();
  }
  
  if (company.deleted) {
    return (<span className={styles.CompanyInfo}>Company {company.name} has been deleted.</span>)
  } else {
    return (
      <div className={styles.CompanyInfo}>
        <ul>
          <li>Company name: {company.name}</li>
          <li>Latitude: {company.latitude}</li>
          <li>Longitude: {company.longitude}</li>
        </ul>
        <ul>
          <li>
            <Link to={`/companies/${company.id}/edit`}>
              <span role="img" aria-label="pencil">
                ✏️
              </span>
              Edit
            </Link>
          </li>
          <li>
            <a href="#" onClick={handleDelete}>
              <span role="img" aria-label="wastebasket">
                🗑️
              </span>
              Delete
            </a>
          </li>
        </ul>
      </div>
    );
  }
};

export default CompanyDetail;
