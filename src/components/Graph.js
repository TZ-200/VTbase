import React from 'react';

export default class  extends React.Component {
    
    render(){
        const {Graph, data} = this.props;
        const classNameCell = `detail__flex--large-item ${this.props.iframe ? 'detail__iframe' : ''}`
        const classNameRatio = `aspectratio ${this.props.ratio}`
        
        return(
            <div className={classNameCell}>
                <div className={classNameRatio}>
                    <Graph data={data}/>  
                </div>
            </div>
        )
    }

}