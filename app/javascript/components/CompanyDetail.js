import React from "react";

const CompanyDetail = (...props) => {
  if (props[0].company.name === "") {
    return <div>Select a company to edit its details.</div>;
  } else {
    return (
      <>
        <ul>
          <li>Company name: {props[0].company.name}</li>
          <li>Latitude: {props[0].company.latitude}</li>
          <li>Longitude: {props[0].company.longitude}</li>
        </ul>
      </>
    );
  }
};

export default CompanyDetail;
