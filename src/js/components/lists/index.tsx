import * as React from "react";

const styles = require("./style.scss");

const list = ({ lists, renderListItem }) => (
  <ul className={styles.list}>
    {lists.map((list, index) => (
      <li className={styles.listItem} key={index}>
        {renderListItem(list)}
      </li>
    ))}
  </ul>
);

export default list;
