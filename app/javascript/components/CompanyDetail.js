import React from "react";
import { Link } from "react-router-dom";

const CompanyDetail = ({company}) => {
  return (
    <>
      <ul>
        <li>Company name: {company.name}</li>
        <li>Latitude: {company.latitude}</li>
        <li>Longitude: {company.longitude}</li>
      </ul>
      <Link to={`/companies/${company.id}/edit`}>Edit company</Link>
    </>
  );
};

export default CompanyDetail;
