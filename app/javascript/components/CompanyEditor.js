import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import CompanyForm from "./CompanyForm";
import axios from "axios";
import { Switch } from "react-router-dom";

const CompanyEditor = props => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const response = await axios(`http://localhost:3000/api/companies`);

    setCompanies(response.data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const addCompany = async newCompany => {
    const response = await axios.post(
      `http://localhost:3000/api/companies`,
      newCompany
    );

    setCompanies([...companies, response.data]);
  };

  return (
    <>
      <Switch>
        <Route
          exact
          path="/companies/new"
          children={() => <CompanyForm addCompany={addCompany} />}
        />
        <Route
          exact
          path="/companies/:id?"
          children={({ match }) => {
            const company = companies.find( c => c.id.toString() === match.params.id);

            return (company ? <CompanyDetail company={company} /> : <></>)
          }}
        />
      </Switch>
      <CompanyList companies={companies} />
    </>
  );
};

export default CompanyEditor;
