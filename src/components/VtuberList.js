import React from 'react';
import { connect } from 'react-redux';
import VtuberCard from './VtuberCard';

export class VtuberList extends React.Component {
    
  // when deal with lazyload, use below 
  componentDidUpdate(){
    document.querySelector('.scroll').scrollTo(0,0);
  }
  
  render(){

    const style = {
      fontSize: '2rem',
      color: 'grey',
      paddingTop: '5rem'
    }

    return (
      <div className="vtuberList">
      {
        this.props.dispVtubers.length === 0 ? (
          <div style={style}>
            <p>No vtubers matched with the inquiries.</p>
            <p>please change the parameters</p>
          </div>
        ) : (
            this.props.dispVtubers.map((vtuber) => {
              
              return <VtuberCard key={vtuber.channelId} vtuber={vtuber} />;
            })
          )
      }
    </div>
    )
  }
}

export default VtuberList;
