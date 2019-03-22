import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// propsにはAppRouterからのpathとcomponentも含まれている
// ...restにはisAuthenticatedとcomponent以外のpropsが含まれる
export class PrivateRoute extends React.Component {
    state = {
        navDisp: false
    }
    toggleSidebar = () => {
        this.setState({navDisp: !this.state.navDisp})
    } 
    closeSidebar = () => {
        this.setState({navDisp:false})
    }

    render(){
        
        const {isAuthenticated, component: Component, ...rest} = this.props;


        return (
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <div>
                        <Header 
                            toggleSidebar={this.toggleSidebar}
                        />
                        <Sidebar 
                            navDisp={this.state.navDisp}
                            closeSidebar={this.closeSidebar}
                        />
                        <div className="contents__wrapper">
                            <main className="contents__container">
                                <Component {...props} />
                            </main>
                        </div>
                    </div>
                ) : (
                    <Redirect to="/" />
                )
            )}/>
        )
    }
} 

const mapStatetoProps = (state) => ({
    isAuthenticated: !!state.auth.uid   // !!でstringをbooleanに変換
});

export default connect(mapStatetoProps)(PrivateRoute);