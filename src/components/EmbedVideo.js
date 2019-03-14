import React, {Component} from 'react';

export class Video extends Component{

    render(){
        if(this.props.data.videoId){
            return(
                <iframe 
                    key={this.props.data.videoId}
                    src={`https://www.youtube.com/embed/${this.props.data.videoId}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="detail__iframe--video"
                />
            )
        } else {
            return(
                <div className="detail__noVideo">
                    NO VIDEO!
                </div>
            )
        }
    }
}

export default Video;

//detail__iframe