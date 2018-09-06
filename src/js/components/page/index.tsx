import * as React from "react";
import Header from "../header";
import Footer from "../footer";

const styles = require("./style.scss");

const page = ({ title, children }) => (
  <div className={styles.layout}>
    <Header className={styles.header} title={title} />
    <main className={styles.main}>{children}</main>
    <Footer className={styles.footer} />
  </div>
);

export default page;
