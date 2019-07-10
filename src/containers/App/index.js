import React, { Fragment } from "react";

import Book from '../Book';
import GlobalStyle from './styles'

const App = () => {

  return (
    <Fragment>
      <GlobalStyle />
      <Book />
    </Fragment>
  );
}

export default App
