import React, { useState } from "react";

const CompanyForm = (props) => {
  const initialFormState = { id: null, name: "", latitude: "", longitude: "" };
  const [company, setCompany] = useState(initialFormState);

  const handleSubmit = async e => {
    e.preventDefault();
    await props.addCompany(company);
    setCompany(initialFormState)
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setCompany({ ...company, [name]: value });
  };

  return (
    <>
      <h2>New Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company_name">
            <strong>Name:</strong>
            <input
              type="text"
              id="name"
              name="name"
              value={company.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="company_latitude">
            <strong>Latitude:</strong>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={company.latitude}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="company_longitude">
            <strong>Longitude:</strong>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={company.longitude}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Create company</button>
        </div>
      </form>
    </>
  );
};

export default CompanyForm;
