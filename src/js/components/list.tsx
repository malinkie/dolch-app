import * as React from "react";

const list = ({ words }) => (
  <>
    {words.map(word => (
      <span>{word}</span>
    ))}
  </>
);

export { list as default };
