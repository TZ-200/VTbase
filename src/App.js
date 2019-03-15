import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { login, logout } from './actions/authAction';
import { startSetVtubers } from './actions/vtubersAction';
import { startSetStartRange, startSetEndRange } from './actions/filterAction';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {firebase} from './firebase/firebase';

import './styles/styles.scss';

const store = configureStore();


const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {

  if(user){ // すでにログインしている場合
    store.dispatch(login(user.uid));  // storeのuserIdを常に最新の状態にするため
    store.dispatch(startSetVtubers())
    .then(() => store.dispatch(startSetStartRange(store.getState().vtubers[0])))
    .then(() => store.dispatch(startSetEndRange(store.getState().vtubers[0])))
    .then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/about');
      }
    });

  } else {  // ログアウトしている場合
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});