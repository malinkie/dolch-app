import React from "react";

const list = ({ words }) => (
  <ul>
    {words.map(word => (
      <li>{word}</li>
    ))}
  </ul>
);

export { list as default };
