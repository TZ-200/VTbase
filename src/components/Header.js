import React from 'react';
import { startLogout } from '../actions/authAction';
import { connect } from 'react-redux';


export class Header extends React.Component {
    render(){
        const { startLogout, toggleSidebar } = this.props;
        return (
            <div className="header">
                <div className="header__logo">logo</div>
                <button className="header__toggle" onClick={toggleSidebar}>toggle</button>
                <button className="header__logout" onClick={startLogout}>Logout</button>
            </div>
        )    
    }
 }

 const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);