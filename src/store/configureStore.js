import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import expensesReducer from '../reducers/expenses';
// import filtersReducer from '../reducers/filters';
import vtubersReducer from '../reducers/vtubersReducer';
import authReducer from '../reducers/authReducer';
import filterReducer from '../reducers/filtersReducer';
import { auth } from 'firebase';


const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      // expenses: expensesReducer,
      // filters: filtersReducer,
      vtubers: vtubersReducer,
      auth: authReducer,
      filter: filterReducer
    }),
    conposeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
