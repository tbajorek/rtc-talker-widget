import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducers';
import talkEngine from './middleware/talkEngine';
import backendService from './middleware/backendService';

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(backendService, talkEngine, reduxThunk)),
  );
};
