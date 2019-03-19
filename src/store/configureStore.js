import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import vtubersReducer from '../reducers/vtubersReducer';
import authReducer from '../reducers/authReducer';
import filterReducer from '../reducers/filtersReducer';
import favReducer from '../reducers/favReducer';
import { auth } from 'firebase';


const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      vtubers: vtubersReducer,
      auth: authReducer,
      filter: filterReducer,
      favs: favReducer
    }),
    conposeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
