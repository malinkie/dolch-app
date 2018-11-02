import * as React from "react";

const styles = require("./style.scss");

interface PropsInterface {
  list: string[];
  renderListItem: (...any) => React.ReactNode;
  title?: string;
  selected?: boolean[];
  selectWord?: Function;
}

const list = (props: PropsInterface) => (
  <ul className={styles.list}>
    {props.list.map((list, index) => (
      <li
        className={`${styles.listItem} ${
          props.selected && props.selected[index] ? styles.selected : ""
        }`}
        key={index}
        onClick={() => {
          if (props.selectWord) {
            props.selectWord(props.title, index, !props.selected[index]);
          }
        }}
      >
        {props.renderListItem(list)}
      </li>
    ))}
  </ul>
);

export { list as default };
