import React from "react";

const CompanyDetail = (...props) => {
  return (
    <>
      <ul>
        <li>Company name: {props[0].company.name}</li>
        <li>Latitude: {props[0].company.latitude}</li>
        <li>Longitude: {props[0].company.longitude}</li>
      </ul>
    </>
  );
};

export default CompanyDetail;
