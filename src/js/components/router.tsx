import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./page";
import Grades from "./grades";
import List from "./list";
const wordList = require("../../config/word-list");
const grades = Object.keys(wordList);

const router = (
  <Router>
    <div>
      <Route
        exact
        path="/"
        component={() => (
          <Page title="Dolch Word Lists">
            <Grades grades={wordList} />
          </Page>
        )}
      />
      {Object.keys(wordList).map((grade, index) => (
        <Route
          key={index}
          path={`/${grade}`}
          component={() => (
            <Page title={wordList[grade].title}>
              <List words={wordList[grade].words} />
            </Page>
          )}
        />
      ))}
    </div>
  </Router>
);

export { router as default };
