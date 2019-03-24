import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { login, logout } from './actions/authAction';
import { startSetVtubers } from './actions/vtubersAction';
import {startSetFavs} from './actions/favAction';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {firebase} from './firebase/firebase';
import Loading from './components/Loading';
import './styles/styles.scss';


// ReduxとRouter
const store = configureStore();
const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);

// Loadingが終わるまでLoading Pageを表示しておく
ReactDOM.render(<Loading/>, document.getElementById('app'));

// Loadingのフラグ
let hasRendered = false;

// アプリ本体をレンダリング
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};


// ログイン状態に応じて処理を振り分ける
firebase.auth().onAuthStateChanged((user) => {

  /**
   * 既にログインしている場合
   * 1. ログイン処理
   * 2. vtuberの一覧情報を取得
   * 3. ユーザーのvtuberのfav情報を取得
   * 4. アプリ本体をレンダリング
   * 5. Aboutページ(Private)にpush
   */
  if(user){ 
    store.dispatch(login(user.uid));  
    store.dispatch(startSetVtubers())
    .then(() => store.dispatch(startSetFavs()))
    .then(() => {
      renderApp();
        if(history.location.pathname === '/'){
          history.push('/about');
        }
    });

  /**
   * ログインしていない場合
   * 1. ログアウト処理
   * 2. アプリ本体をレンダリング
   * 3. Topページ(Public)にpush
   */
  } else {  
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});