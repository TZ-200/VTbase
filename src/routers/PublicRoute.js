import React from 'react';
import { Route } from 'react-router-dom';

/**
 * ログインしていない状態でもアクセス可能なページを表示
 */

export const PublicRoute = ({ 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
            <Component {...props} />
    )}/>
);

export default PublicRoute;