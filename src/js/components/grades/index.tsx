import * as React from "react";
import { Link } from "react-router-dom";

const sharedStyles = require("../../../css/shared.scss");
const styles = require("./style.scss");

const grades = ({ grades }) => (
  <nav className={sharedStyles.list}>
    {Object.keys(grades).map((grade, index) => (
      <Link
        className={`${sharedStyles.listItem} ${styles.link}`}
        key={index}
        to={`/${grade}`}
      >
        {grades[grade].title}
      </Link>
    ))}
  </nav>
);

export { grades as default };
