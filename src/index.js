import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import store from './app/store';

const render = () => {
  const App = require('./app/App').default
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
serviceWorker.unregister();
