import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// propsにはAppRouterからのpathとcomponentも含まれている
// ...restにはisAuthenticatedとcomponent以外のpropsが含まれる
export class PrivateRoute extends React.Component {
    state = {
        sidebar_isOpened: true
    }
    toggleSidebar = () => {
        this.setState({sidebar_isOpened: !this.state.sidebar_isOpened})
    } 

    render(){
        const {isAuthenticated, component: Component, ...rest} = this.props;

        const className = this.state.sidebar_isOpened
        ? "contents__container isShrunk"
        : "contents__container";

        return (
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <div>
                        <Header toggleSidebar={this.toggleSidebar}    />
                        <div className="contents__wrapper">
                            <Sidebar sidebar_isOpened={this.state.sidebar_isOpened} />
                            <main className={className}>
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