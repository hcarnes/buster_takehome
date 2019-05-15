import React from "react";
import CompanyEditor from "./CompanyEditor";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "../styles/App";

const App = () => (
  <Router>
    <div className={styles.App}>
      <Header />
      <CompanyEditor />
    </div>
  </Router>
);

export default App;
