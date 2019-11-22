import { createStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { rootReducers } from '../reducers';

export const history = createBrowserHistory();

const  configureStore = (): Store<IMainStore> => {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware, routerMiddleware(history),promise);
  const composeEnhancers = composeWithDevTools(middlewareEnhancer);
  return createStore(
    rootReducers(history),
    {},
    composeEnhancers,
  );
}

export const store: Store<IMainStore> = configureStore();
