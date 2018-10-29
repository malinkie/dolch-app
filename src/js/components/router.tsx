import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "./page";
import Lists from "./lists";
import Words from "./words";

const wordList = require("../../config/word-list");

const router = (
  <Router>
    <>
      <Route
        exact
        path="/"
        component={() => (
          <Page title="Dolch Words">
            <Lists
              lists={wordList}
              renderListItem={renderableItem => (
                <Link to={`/${renderableItem.title}`}>
                  {renderableItem.title}
                </Link>
              )}
            />
          </Page>
        )}
      />
      <Route
        path={`/:list`}
        component={({ match }) => {
          const wordListEntry = wordList.find(
            entry => entry.title === match.params.list
          );
          return (
            <Page title={wordListEntry.title}>
              <Lists
                lists={wordListEntry.words}
                renderListItem={renderableItem => renderableItem}
              />
            </Page>
          );
        }}
      />
    </>
  </Router>
);

export default router;
