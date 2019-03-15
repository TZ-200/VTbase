import React from 'react';

export default (props) => (
  <div className="detail__header">
          
    <div className="detail__header--image"
      style={{backgroundImage: `url(../temp/icons/${props.channelId}.png)`}}
    />
    
    <div className="detail__header--sub-container">
        
      <div className="detail__header--top">
        <div className="detail__header--channel-title">{props.title.slice(0,13)}</div>
        <div className="detail__header--icons">
          <div className="heart icon">
            <input id="toggle-heart-icon" type="checkbox"/>
            <label htmlFor="toggle-heart-icon" aria-label="like">❤</label>
          </div>
          <div style={{backgroundImage: 'url(../temp/twitter.svg)'}} className="icon"/>
          <div style={{backgroundImage: 'url(../temp/youtube.svg)'}} className="icon"/>
        </div>
      </div>

      
      <div className="detail__header--description">{props.description}</div>

    </div>

  </div>
);
