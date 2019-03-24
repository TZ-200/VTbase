import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

/**
 * ログイン状態でのみアクセス可能なページを表示
 */

export class PrivateRoute extends React.Component {

    // sidebarの表示を司る（ちょっと変数名おかしいけど）
    state = {
        navDisp: false
    }

    // Sidebarの開閉を制御
    toggleSidebar = () => { this.setState({navDisp: !this.state.navDisp}) } 
    closeSidebar = () => { this.setState({navDisp:false}) }

    render(){        

        const {isAuthenticated, component: Component, ...rest} = this.props;

        // ログインしてしなかったらTopページにリダイレクト
        return (
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <div>
                        <Header 
                            toggleSidebar={this.toggleSidebar}
                            navDisp={this.state.navDisp}
                        />
                        <Sidebar 
                            navDisp={this.state.navDisp}
                            closeSidebar={this.closeSidebar}
                        />
                        <div className="contents__wrapper">
                            <main className="contents__container">
                                <Component {...props} navDisp={this.state.navDisp}/>
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