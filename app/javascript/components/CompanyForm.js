import React from "react";

const CompanyForm = ({ companies }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <>
      <h2>New Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company_name">
            <strong>Name:</strong>
            <input type="text" id="company_name" name="company_name" />
          </label>
        </div>
        <div>
          <label htmlFor="company_latitude">
            <strong>Latitude:</strong>
            <input type="text" id="company_latitude" name="company_latitude" />
          </label>
        </div>
        <div>
          <label htmlFor="company_longitude">
            <strong>Longitude:</strong>
            <input type="text" id="company_longitude" name="company_longitude" />
          </label>
        </div>
        <div>
          <button type="submit">Create company</button>
        </div>
      </form>
    </>
    );}

export default CompanyForm;
