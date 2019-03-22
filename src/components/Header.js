import React from 'react';
import { startLogout } from '../actions/authAction';
import { connect } from 'react-redux';
import ReactResizeDetector from 'react-resize-detector';
import Sidebar from './Sidebar'

export class Header extends React.Component {
    
    render(){
        // let style;
        // if(this.state.width < 1000){
        //     style = {
        //         display: this.state.navDisp ? 'block' : 'none'
        //     }
        // }
        
        return (
            <div className="header">
                <div className="header__container">

                    <div 
                        className="header__toggle" 
                        onClick={this.props.toggleSidebar}
                    >
                        <span className={`header__toggle--icon`}>&nbsp;</span>
                    </div>
                    <div className="header__logo">VTbase</div>
                </div>
            </div>
        )    
    }
 }

 const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);


/**
 * 
 *                 // <ReactResizeDetector 
                //     handleWidth 
                //     onResize={width => this.setState({width}) }
                // />
 * 
 * 
 * 
 * 
export class Header extends React.Component {
    
    state = {
        navDisp: false,
        width: 0
    }

    onClick = () => {
        this.setState({navDisp:false})
    }
    render(){
        const { startLogout } = this.props;
        let style;
        if(this.state.width < 1000){
            style = {
                display: this.state.navDisp ? 'block' : 'none'
            }
        }
        return (
            <div className="header">
                <ReactResizeDetector 
                    handleWidth 
                    onResize={width => this.setState({width}) }
                />


                <div className="header__container">
                    <div className="header__buttons">
                        {
                            this.state.width < 1000 && (
                                <button 
                                    className="header__toggle" 
                                    onClick={()=>this.setState({navDisp:!this.state.navDisp})}
                                >
                                    toggle
                                </button>
                            )
                        }
                        <button className="header__logout" onClick={startLogout}>Logout</button>
                    </div>
                    <div className="header__logo">VTbase</div>
                </div>
                


                <div 
                    className="navigation"
                    style={style}
                >
                    {
                        this.state.navDisp && (
                            <div 
                                className="navigation__background" 
                                onClick={this.onClick}
                            />
                        )
                    }
                    <Sidebar/>
                </div>


            </div>
        )    
    }
 }
 * 
 */