import React from "react";

const CompanyList = ({ companies }) => {
  return (
    <>
      <h2>Companies</h2>
      <ul>
        {companies.map(c => (
          <li key={c.id}>
            <div>name: {c.name} </div>
            <div>latitude: {c.latitude}</div>
            <div>longitude: {c.longitude}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompanyList;
