import React from 'react';
import { connect } from 'react-redux';
import {startAddFav, startRemoveFav} from '../actions/favAction';

export class DetailHeader extends React.Component{

  state = {
    faved: false
  }

  componentDidMount(){
      this.props.favs.find(fav => fav.channelId === this.props.channelId)
      &&  this.setState({faved:true})
  }

  onClick = () => {
    this.setState({ faved: !this.state.faved }, () => {
      this.state.faved 
      ? this.props.startAddFav({ title: this.props.title, channelId :this.props.channelId })
      : this.props.startRemoveFav({id: this.props.favs.find(fav => fav.channelId === this.props.channelId).id})
    });
  }

  render(){

    const props = this.props;
    
    return(
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
              <input
                  checked={this.state.faved}
                  onChange={this.onClick}
                  id="toggle-heart" 
                  type="checkbox"
                />
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
