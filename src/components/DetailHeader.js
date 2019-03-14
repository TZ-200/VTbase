import React from 'react';

export default (props) => (
    <div className="detail__header">
          
    <div className="detail__header--image"
      style={{backgroundImage: `url(../temp/icons/${props.targetVtuber.channelId}.png)`}}
    />
    
    <div className="detail__header--sub-container">
        
      <div className="detail__header--channel-title">title</div>
        
      <div className="detail__header--icons">
        <div className="heart icon">
          <input id="toggle-heart-icon" type="checkbox"/>
          <label htmlFor="toggle-heart-icon" aria-label="like">❤</label>
        </div>
        <div style={{backgroundImage: 'url(../svg/twitter.svg)'}} className="icon"/>
        <div style={{backgroundImage: 'url(../svg/youtube.svg)'}} className="icon"/>
      </div>
      
      <div className="detail__header--description">description</div>

    </div>
  </div>
);