import React from "react";
import { Link } from "react-router-dom";

const CompanyDetail = ({company, deleteCompany}) => {
  const handleDelete =  (e) => {
    e.preventDefault();
    deleteCompany();
  }
  
  if (company.deleted) {
    return (<span>Company {company.name} has been deleted.</span>)
  } else {
    return (
      <>
        <ul>
          <li>Company name: {company.name}</li>
          <li>Latitude: {company.latitude}</li>
          <li>Longitude: {company.longitude}</li>
        </ul>
        <Link to={`/companies/${company.id}/edit`}>Edit</Link>
        <a href="#" onClick={handleDelete}>Delete</a>
      </>
    );
  }
};

export default CompanyDetail;
