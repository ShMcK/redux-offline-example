import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import createLogger from 'redux-logger';

import reducer from './reducer';

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(createLogger({ collapsed: true })),
    offline(offlineConfig)
  ),
);

export default store;
