import React, { useState, useEffect } from "react";
import axios from "axios";

const CompanyEditor = props => {
 const [companies, setCompanies] = useState([]);

 const fetchCompanies = async () => {
    const reponse = await axios(
      `http://localhost:3000/api/companies`
    );

    setCompanies(reponse.data);
    console.log(reponse.data)
  }

  useEffect(() => {
    fetchCompanies();
  }, []);
  
  return (
    <ul>
      {companies.map(c => (
        <li key={c.id}>
          <div>name: {c.name} </div>
          <div>latitude: {c.latitude}</div>
          <div>longitude: {c.longitude}</div>
        </li>
      ))}
    </ul>
  );
}

export default CompanyEditor;
