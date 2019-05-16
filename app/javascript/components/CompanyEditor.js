import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import CompanyForm from "./CompanyForm";
import CompanyMap from "./CompanyMap";
import axios from "axios";
import { Switch, Redirect } from "react-router-dom";
import styles from "../styles/CompanyEditor";

const CompanyEditor = props => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const response = await axios(`/api/companies`);

    setCompanies(response.data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const persistCompany = async (company, callbackFn) => {
    let response;
    if (company.id) {
      response = await axios.put(
        `/api/companies/${company.id}`,
        company
      );
      const newCompanies = [
        ...companies.filter(c => c.id !== company.id),
        company
      ];
      setCompanies(newCompanies);
    } else {
      response = await axios.post(
        `/api/companies`,
        company
      );
      setCompanies([...companies, response.data]);
    }
    if (typeof callbackFn == "function") {
      callbackFn(response.data);
    }
  };

  const deleteCompany = async ({ id }) => {
    await axios.delete(`/api/companies/${id}`);

    const deleted = true;
    const deletedCompany = {...companies.find(c => c.id === id), deleted};
    const newCompanies = [...companies.filter(c => c.id !== id), deletedCompany];
    setCompanies(newCompanies);
  };

  return (
    <div className={styles.CompanyEditor}>
      <Switch>
        <Route
          exact
          path="/companies/new"
          children={() => <CompanyForm persistCompany={persistCompany} />}
        />
        <Route
          exact
          path="/companies/:id"
          children={({ match }) => {
            const company = companies.find(
              c => c.id.toString() === match.params.id
            );

            return company ? (
              <CompanyDetail
                company={company}
                deleteCompany={deleteCompany.bind(null, company)}
              />
            ) : (
              <></>
            );
          }}
        />
        <Route
          exact
          path="/companies/:id/edit"
          children={({ match }) => {
            const company = companies.find(
              c => c.id.toString() === match.params.id
            );

            return company ? (
              <CompanyForm
                company={company}
                persistCompany={persistCompany}
              />
            ) : (
              <></>
            );
          }}
        />
      </Switch>
      <CompanyMap companies={companies} />
      <CompanyList companies={companies} />
    </div>
  );
};

export default CompanyEditor;
