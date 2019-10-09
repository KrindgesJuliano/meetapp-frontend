import React from 'react';
import { Router } from 'react-router-dom';

import './Config/ReactotronConfig';

import Routes from './Routes';
import history from './services/history';

import GlobalStyle from './Styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
