import React from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import reducers from '../reducers/index';
import Router from '../screens/index';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(combineReducers(reducers), {}, enhancer);
sagaMiddleware.run(rootSaga);

export default function Entry() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
