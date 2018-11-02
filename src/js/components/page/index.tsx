import * as React from "react";

const styles = require("./style.scss");

interface PropsInterface {
  title: string;
  back?: (className) => React.ReactNode;
  children: React.ReactNode;
}

const page = (props: PropsInterface) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      {props.back && props.back(styles.back)}
      <h1>{props.title}</h1>
    </header>
    <main className={styles.main}>{props.children}</main>
  </div>
);

export default page;
