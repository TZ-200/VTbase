import React from 'react';
import calcParamText from '../utils/calcParamText';


export default (props) => (
    <div className="detail__flex--small-item">
        <div className="detail__param--top">
            <div className="detail__param--label">{props.params.label}</div>
            <div className={`${props.icon} detail__param--icon--container`}>
                <i className={`${props.icon} param--icon`}/>
            </div>
        </div>
        <div className="detail__param">
            {props.params.param}
        </div>
        {calcParamText(props.params.label)}
        <div className="detail__param--change">
            + 12.2%
        </div>
    </div>
);