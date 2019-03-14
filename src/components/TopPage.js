import React from 'react';
import { startLogout } from '../actions/authAction';
import { startLogin } from '../actions/authAction';
import { connect } from 'react-redux';


const TopPage = (props) => (
  <div>
          <button onClick={props.startLogin}>Login</button>
  </div>
);

const mapStatetoProps = (state) => ({
  isAuthenticated: !!state.auth.uid 
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStatetoProps, mapDispatchToProps)(TopPage);