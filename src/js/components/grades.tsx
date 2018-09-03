import React from "react";
import { Link } from "react-router-dom";

const grades = ({ grades }) => (
  <ul>
    {Object.keys(grades).map((grade, index) => (
      <Link key={index} to={`/${grade}`}>
        {grades[grade].title}
      </Link>
    ))}
  </ul>
);

export { grades as default };
