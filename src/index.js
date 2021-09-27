import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { App } from './App';
import { rootReducer } from './store/store';
import { sagaWatcher } from './store/sagas';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// TODO
//
// 2) Приступить к выполнению доп-заданий
// 3) Выделить все нужные части в отдельные компоненты
// 4) Запушить проект
// 5) Выложить проект
//
//
