import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header
        logoText="Timi Idowu"
        links={["about", "work", "my notes", "let's talk"]}
      />
      {children}
    </div>
  );
};

export default Container;
