import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk   from 'redux-thunk';
import App from './App';
import reducer from './reducers';
import './index.css';

const middleWare = applyMiddleware(reduxThunk);
const createStoreWithMiddleware = middleWare(createStore);
const store = createStoreWithMiddleware(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'));
