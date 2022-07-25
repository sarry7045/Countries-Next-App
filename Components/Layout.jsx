import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}> Countries Population</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        {" "}
        Countries Population Calculator App{" "}
      </footer>
    </>
  );
};

export default Layout;
