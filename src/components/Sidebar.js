import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


export class Sidebar extends React.Component{
    render(){
        const className = this.props.sidebar_isOpened
        ? "sidebar isOpened"
        : "sidebar";
        return (
            <div className={className} >
                <div className="sidebar__navigation">
                    <NavLink className="sidebar__navigation--item" to="/about" activeClassName="sidebar__navigation--active">About </NavLink>
                    <NavLink className="sidebar__navigation--item" to="/database" activeClassName="sidebar__navigation--active"
                        isActive={(match, location) => {                       
                            if(location.pathname.match(/database/)){
                                return true;
                            }
                            return false;
                        }}        
                    >DB </NavLink>
                    <NavLink className="sidebar__navigation--item" to="/form" activeClassName="sidebar__navigation--active">Form </NavLink>
                </div>

                <div>
                    
                </div>    
            </div>
        )
    }
}

/**
 *         <NavLink to="/forum" activeClassName="is-active">Forum </NavLink>
        <NavLink to="/mypage" activeClassName="is-active">Mypage </NavLink>

 */

const mapStateToProps = (state, props) => ({
    // vtuberId: props.match.params.id
});
  
export default connect(mapStateToProps)(Sidebar);