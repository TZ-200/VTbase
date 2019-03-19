import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


export class Sidebar extends React.Component{
    componentDidMount(){
        document.querySelector('.sidebar__navigation--detail').scrollTop
    }
    render(){
        const className = this.props.sidebar_isOpened
        ? "sidebar isOpened"
        : "sidebar";
        return (
            <div className={className} >
                
                <div className="sidebar__navigation">
                    <NavLink className="sidebar__navigation--item" to="/about" activeClassName="sidebar__navigation--active">
                        <i className="fas fa-globe-americas sidebar--icon"/>    
                        <span className="sidebar__navigation--text">About</span> 
                    </NavLink>
                    <NavLink className="sidebar__navigation--item" to="/database" activeClassName="sidebar__navigation--active"
                        isActive={(match, location) => {                       
                            if(location.pathname.match(/database/)){
                                return true;
                            }
                            return false;
                        }}        
                    >
                        <i className="fas fa-database sidebar--icon"/>    
                        <span className="sidebar__navigation--text">Database</span> 
                    </NavLink>
                    <NavLink className="sidebar__navigation--item last--menu" to="/form" activeClassName="sidebar__navigation--active">
                        <i className="fas fa-paste sidebar--icon"/>    
                        <span className="sidebar__navigation--text">Request Form</span>
                    </NavLink> 
                </div>

                <div className='sidebar__navigation--label'>お気に入りチャンネル</div>
                
                <div 
                    className="sidebar__navigation sidebar__navigation--detail"
                    onChange={e => e.preventDefault()}
                >    
                    {
                        this.props.favs.map(fav => {
                            return (
                                <NavLink key={fav.id} className="sidebar__navigation--item" to={`/database/${fav.channelId}`} activeClassName="sidebar__navigation--active">
                                    <div 
                                        className='sidebar__navigation--image'
                                        style={{backgroundImage: `url(../temp/icons/${fav.channelId}.png)`}}
                                    />
                                    <span className='sidebar__navigation--channel-title'>
                                        {
                                            fav.title.length >= 13 
                                            ?  fav.title.slice(0,12) + '…'
                                            :  fav.title
                                        }
                                    </span>
                                </NavLink>
                            )
                        })
                    }
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
    favs: state.favs
});
  
export default connect(mapStateToProps)(Sidebar);