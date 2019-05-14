import React from "react";
import CompanyEditor from "./CompanyEditor";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Header />
    <CompanyEditor />
  </Router>
);

export default App;
