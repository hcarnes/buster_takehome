import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import axios from "axios";

const CompanyEditor = props => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const response = await axios(`http://localhost:3000/api/companies`);

    setCompanies(response.data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <Route
        path="/companies/:id?"
        children={({ match }) => (
          <CompanyDetail
            company={
              companies.find(c => c.id.toString() === match.params.id) || {
                id: "",
                name: "",
                latitude: "",
                longitude: ""
              }
            }
          />
        )}
      />
      <CompanyList companies={companies} />
    </>
  );
};

export default CompanyEditor;
