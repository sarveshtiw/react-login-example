import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Store from './store';
import App from './components/app';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = Store();

ReactDOM.render((
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App store={store} />
    </MuiThemeProvider>),document.getElementById('my-app')
);

module.hot.accept()
