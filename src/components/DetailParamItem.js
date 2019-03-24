import React from 'react';
import calcParamText from '../utils/calcParamText';

/**
 * vtuber詳細ページのパラメーター表示の中身
 * 表示サンプル用に calcParamText でダミーテキストを作成している
 */

export class ParamItem extends React.Component{

    //　詳細ページ内の各コンポーネントがレンダリングされた際にダミーテキストを一々更新しないようにする
    shouldComponentUpdate(){ return false }

    render(){
        return (
            <div className="detail__small-item">
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