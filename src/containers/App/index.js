import React, { Fragment } from "react";

import Book from '../Book';
import GlobalStyle from './styles'

const App = () => {

  return (
    <Fragment>
      <GlobalStyle />
      <main data-testid="app">
        <Book />
      </main>
    </Fragment>
  );
}

export default App
