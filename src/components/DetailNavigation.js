import React from 'react';

export default (props) => (
    <div className="detail__navigation">
        <div 
            className={`detail__navigation--item ${props.basicInfo}`}
            onClick={props.toggleBasic}         
        >
            Basic
        </div>
        <div 
            className={`detail__navigation--item ${props.timeline}`}
            onClick={props.toggleTimeline}
        >
            Timeline
        </div>
    </div>
);