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
        <Link to={`/companies/${company.id}/edit`}>Edit</Link>
        <a href="#" onClick={handleDelete}>
          Delete
        </a>
      </div>
    );
  }
};

export default CompanyDetail;
