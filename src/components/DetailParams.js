import React from 'react';
import DetailParamItem from './DetailParamItem'

/**
 * Vtuber詳細ページのパラメータを表示するコンテナ
 */

export default (props) => (
    <div className="detail__flex--small-container">
        {
            props.paramSet.map((params, index) => (
                <DetailParamItem 
                    key={params.label} 
                    params={params} 
                    icon={props.icon[index]}    
                />
            ))
        }
    </div>
);