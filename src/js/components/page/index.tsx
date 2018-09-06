import * as React from "react";
import Header from "../header";

const styles = require("./style.scss");

const page = ({ title, children }) => (
  <div className={styles.layout}>
    <Header className={styles.header} title={title} />
    <main className={styles.main}>{children}</main>
  </div>
);

export default page;
