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
    console.log(response.data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <CompanyList companies={companies} />
      <Route
        path="/companies/:id?"
        children={({ match }) => <CompanyDetail company={companies.find((c) => c.id.toString() === match.params.id)} />}
      />
    </>
  );
};

export default CompanyEditor;
