import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducers from './utilities/reducers';
import { Provider } from 'react-redux'

const store = createStore(rootReducers);
render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
)