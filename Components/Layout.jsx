import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>All About All Countries</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Created By | Suraj Yadav</footer>
    </>
  );
};

export default Layout;
