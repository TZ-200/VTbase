import React from 'react';
import ParamItem from './ParamItem'

export default (props) => (
    <div className="detail__flex--small-container">
        {props.paramSet.map(params => <ParamItem key={params.label} params={params} />)}
    </div>
);