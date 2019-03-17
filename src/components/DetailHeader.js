import React from 'react';

export default (props) => (
  <div className="detail__header">
          
    <div className="detail__header--image"
      style={{backgroundImage: `url(../temp/icons/${props.channelId}.png)`}}
      onClick={props.onClick}
      onMouseOut={props.onMouseOut}
    />

    {
      props.commentIsVisible && (
        <div className="detail__header--comment">{props.comment}</div>
      )
    }

    <div className="detail__header--sub-container">
        
      <div className="detail__header--top">
        <div className="detail__header--channel-title">{props.title.slice(0,13)}</div>
        <div className="detail__header--icons">
          <div className="heart icon">
            <input id="toggle-heart" type="checkbox"/>
            <label htmlFor="toggle-heart" aria-label="like">❤</label>
          </div>
          <a 
              href={`https://twitter.com/${props.twitterId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{backgroundImage: 'url(../temp/twitter.svg)'}} 
              className="icon"
          />
          <a 
              href={`https://www.youtube.com/channel/${props.channelId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{backgroundImage: 'url(../temp/youtube.svg)'}} 
              className="icon"
          />
        </div>
      </div>

      
      <div className="detail__header--description">{props.description}</div>

    </div>

  </div>
);
