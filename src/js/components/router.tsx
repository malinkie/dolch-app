import * as React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Page from "./page";
import Lists from "./lists";
import Boundary from "./Bondary";

const wordList = require("../../config/word-list");

export default class Router extends React.Component {
  constructor(props) {
    super(props);
    const state = {};

    wordList.forEach(list => {
      state[list.title] = list.words.map(() => false);
    });

    this.state = state;
    this.checkWord = this.checkWord.bind(this);
  }

  findEntry(listName) {
    return wordList.find(entry => entry.title === listName);
  }

  checkWord(list, index, selected = false) {
    const updatedWordList = this.state[list].slice(0);

    updatedWordList[index] = selected;
    this.setState({ ...this.state, [list]: updatedWordList });
  }

  render() {
    return (
      <Boundary>
        <BrowserRouter>
          <>
            <Route
              exact
              path="/"
              component={() => (
                <Page title="Dolch Words">
                  <Lists
                    list={wordList}
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
                const wordListEntry = this.findEntry(match.params.list);
                return (
                  <Page
                    title={wordListEntry.title}
                    back={className => (
                      <Link className={className} to="/">
                        <h1>&#12296;</h1>
                      </Link>
                    )}
                  >
                    <Lists
                      title={wordListEntry.title}
                      list={wordListEntry.words}
                      selected={this.state[wordListEntry.title]}
                      renderListItem={renderableItem => renderableItem}
                      selectWord={this.checkWord}
                    />
                  </Page>
                );
              }}
            />
          </>
        </BrowserRouter>
      </Boundary>
    );
  }
}
