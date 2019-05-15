import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const CompanyForm = ({company, persistCompany}) => {
  const initialFormState = company ? company : { id: null, name: "", latitude: "", longitude: "" };
  const [formCompany, setFormCompany] = useState(initialFormState);
  const [persisted, setPersisted] = useState(null);

  if (persisted) {
    return <Redirect to={`/companies/${persisted.id}`} />;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await persistCompany(formCompany, setPersisted);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setFormCompany({ ...formCompany, [name]: value });
  };

  return (
    <>
      <h2>{company ? "Edit" : "New"} Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company_name">
            <strong>Name:</strong>
            <input
              type="text"
              id="name"
              name="name"
              value={formCompany.name}
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
              value={formCompany.latitude}
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
              value={formCompany.longitude}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">{company ? "Edit" : "New"} company</button>
        </div>
      </form>
    </>
  );
};

export default CompanyForm;
