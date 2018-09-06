import * as React from "react";

const sharedStyles = require("../../../css/shared.scss");

const list = ({ words }) => (
  <ul className={sharedStyles.list}>
    {words.map((word, index) => (
      <span className={sharedStyles.listItem} key={index}>
        {word}
      </span>
    ))}
  </ul>
);

export default list;
