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

  return (
    <>
      <Switch>
        <Route exact path="/companies/new" component={CompanyForm}/>
        <Route
          exact path="/companies/:id?"
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
      </Switch>
      <CompanyList companies={companies} />
    </>
  );
};

export default CompanyEditor;
