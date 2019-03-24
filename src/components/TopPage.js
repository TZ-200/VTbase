import React from 'react';
import { startLogin } from '../actions/authAction';
import { connect } from 'react-redux';

/**
 * Topページ
 * ログイン処理を担当
 */

const TopPage = (props) => (
  <div>
      <div 
          className='top__wrapper'
          style={{
            backgroundImage: `-webkit-gradient(linear, 0% 50%, 0% 0%, from(rgba(51, 51, 51, 0.8)), to(rgba(47, 47, 47, 0.92))), url(../temp/top.jpg)`
          }}
      />
      <div className='top__container'>
          <div className='top__title'>VTBASE</div>
          <div className='top__subText'>VIRTUAL YOUTUBERS DATABASE</div>
          <button 
              className='btn  btn--white btn--animated'
              onClick={props.startLogin}
          >
              Login
          </button>
      </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(TopPage);