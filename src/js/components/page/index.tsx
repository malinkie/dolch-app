import * as React from "react";

const styles = require("./style.scss");

const page = ({ title, children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
    <main className={styles.main}>{children}</main>
  </div>
);

export default page;
