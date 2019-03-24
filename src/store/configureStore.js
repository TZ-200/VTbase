import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import vtubersReducer from '../reducers/vtubersReducer';
import authReducer from '../reducers/authReducer';
import favReducer from '../reducers/favReducer';

const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      vtubers: vtubersReducer,
      auth: authReducer,
      favs: favReducer
    }),
    conposeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
