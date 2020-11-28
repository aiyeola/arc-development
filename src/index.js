import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';

// Check if Material UI works with React.StrictMode
ReactDOM.render(
  <>
    <CssBaseline />
    <App />
  </>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
