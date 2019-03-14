import React from 'react';

export default (props) => (
    <div className="detail__flex--small-item">
        <div className="detail__paramLabel">{props.params.label}</div>
        <div className="detail__param">{props.params.param}</div>
        <div className="detail__paramChange">+12.2%</div>
    </div>
);