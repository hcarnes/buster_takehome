import React, { useState, useEffect } from "react";
import Header from "./Header";
import CompanyList from "./CompanyList";
import axios from "axios";

const CompanyEditor = props => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const reponse = await axios(`http://localhost:3000/api/companies`);

    setCompanies(reponse.data);
    console.log(reponse.data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <Header />
      <CompanyList companies={companies} />
    </>
  );
};

export default CompanyEditor;
