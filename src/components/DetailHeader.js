import React from 'react';
import { connect } from 'react-redux';
import {startAddFav, startRemoveFav} from '../actions/favAction';

/**
 * Vtuber詳細ページのヘッダー部分
 */

export class DetailHeader extends React.Component{

  state = {
    faved: false
  }

  // fav状態だった場合ハートアイコンをONにする
  componentDidMount(){
      this.props.favs.find(fav => fav.channelId === this.props.channelId)
      &&  this.setState({faved:true})
  }

  // fav状態のON/OFF  
  onClick = () => {
    this.setState({ faved: !this.state.faved }, () => {
      this.state.faved 
      ? this.props.startAddFav({ title: this.props.title, channelId :this.props.channelId })
      : this.props.startRemoveFav({id: this.props.favs.find(fav => fav.channelId === this.props.channelId).id})
    });
  }

  render(){
    return(
      <div className="detail__header">
          
      <div className="detail__header--image"
        style={{backgroundImage: `url(../temp/icons/${this.props.channelId}.png)`}}
        onClick={this.props.onClick}
        onMouseOut={this.props.onMouseOut}
      />
  
      {
        this.props.commentIsVisible && (
          <div className="detail__header--comment">{this.props.comment}</div>
        )
      }
  
      <div className="detail__header--sub-container">
          
        <div className="detail__header--top">
          <div className="detail__header--channel-title">{this.props.title.slice(0,13)}</div>
          <div className="detail__header--icons">
            <div className="heart icon">
              <input
                  checked={this.state.faved}
                  onChange={this.onClick}
                  id="toggle-heart" 
                  type="checkbox"
                />
              <label htmlFor="toggle-heart" aria-label="like">❤</label>
            </div>
            <a 
                href={`https://twitter.com/${this.props.twitterId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{backgroundImage: 'url(../temp/twitter.svg)'}} 
                className="icon"
            />
            <a 
                href={`https://www.youtube.com/channel/${this.props.channelId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{backgroundImage: 'url(../temp/youtube.svg)'}} 
                className="icon"
            />
          </div>
        </div>
  
        
        <div className="detail__header--description">{this.props.description}</div>
  
      </div>
  
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddFav: (data) => dispatch(startAddFav(data)),
  startRemoveFav: (data) => dispatch(startRemoveFav(data))
});
const mapStateToProps = (state) => ({
  favs: state.favs
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailHeader);
