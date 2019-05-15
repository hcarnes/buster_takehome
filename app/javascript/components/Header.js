import React from "react";
import styles from "../styles/Header";

const Header = () => (
  <header className={styles.Header}>
    <h1>Company Manager <span role="img" aria-label="office building">🏢</span></h1>
  </header>
);

export default Header;
