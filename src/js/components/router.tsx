import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "./page";
import Grades from "./grades";
import List from "./list";
const wordList = require("../../config/word-list");

const router = (
  <Router>
    <>
      <Route
        exact
        path="/"
        render={() => (
          <Page title="Dolch Word Lists">
            <Grades grades={wordList}>
              {Object.keys(wordList).map((grade, index) => (
                <Link key={index} to={`/${grade}`}>
                  {wordList[grade].title}
                </Link>
              ))}
            </Grades>
          </Page>
        )}
      />
      {Object.keys(wordList).map((grade, index) => (
        <Route
          key={index}
          path={`/${grade}`}
          render={() => (
            <Page title={wordList[grade].title}>
              <List words={wordList[grade].words} />
            </Page>
          )}
        />
      ))}
    </>
  </Router>
);

export default router;
