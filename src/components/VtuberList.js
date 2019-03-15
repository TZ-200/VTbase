import React from 'react';
import { connect } from 'react-redux';
import VtuberCard from './VtuberCard';
import selectVtubers from '../selectors/vtubers';

export class VtuberList extends React.Component {

  componentDidUpdate(){
    // to deal with lazyload 
    document.querySelector('.scroll').scrollTo(0,1);
  }
  
  render(){
    return (
      <div className="vtuberList">
      {
        this.props.vtubers.length === 0 ? (
          <p>No vtubers</p>
        ) : (
            this.props.vtubers.slice(0,100).map((vtuber) => {
              return <VtuberCard key={vtuber.channelId} vtuber={vtuber} />;
            })
          )
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      vtubers: selectVtubers(state.vtubers[0], state.filter)
    };
};
  
export default connect(mapStateToProps)(VtuberList);

