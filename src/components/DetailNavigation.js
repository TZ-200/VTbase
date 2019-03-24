import React from 'react';

/**
 * Vtuber詳細ページでデータ画面とTimeline画面の切り替えを司る
 */

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