import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import GlobalStyles from './styles/global';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
);
