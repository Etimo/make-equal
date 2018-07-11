import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './view/style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider
    store={(window.devToolsExtension
      ? window.devToolsExtension()(createStore)
      : createStore)(rootReducer)}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
