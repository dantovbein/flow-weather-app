import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { appReducer } from '../containers/App/reducer';
import { citiesReducer } from '../containers/Cities/reducer';

export const rootReducers = (history: History) => combineReducers({
  router: connectRouter(history),
  appStore: appReducer,
  citiesStore: citiesReducer
});

export type AppStore = ReturnType<typeof rootReducers>