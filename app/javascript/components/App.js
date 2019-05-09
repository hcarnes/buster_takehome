import React from "react";
import CompanyEditor from "./CompanyEditor";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <>
      <Route path="/companies/:id?" component={CompanyEditor} />
    </>
  </Router>
);

export default App;
