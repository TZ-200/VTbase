import React from 'react';
import calcParamText from '../utils/calcParamText';


export class ParamItem extends React.Component{

    //　ランダムな値を一々更新しないように
    shouldComponentUpdate(){ return false }

    render(){
        return (
            <div className="detail__flex--small-item">
                <div className="detail__param--top">
                    <div className="detail__param--label">{this.props.params.label}</div>
                    <div className={`${this.props.icon} detail__param--icon--container`}>
                        <i className={`${this.props.icon} param--icon`}/>
                    </div>
                </div>
                <div className="detail__param">
                    {this.props.params.param}
                </div>
                {calcParamText(this.props.params.label)}
        
            </div>
        )
    }
}

export default ParamItem;