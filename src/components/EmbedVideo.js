import React, {Component} from 'react';

export class Video extends Component{

    render(){
        if(this.props.videoId){
            return(
                <div className="graph__container">
                    <div className="graph__label">
                        Featured Video
                    </div>
                    <div className="video__container">
                        <iframe 
                            key={this.props.videoId}
                            src={`https://www.youtube.com/embed/${this.props.videoId}`} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="video"
                        />
                    </div>

                </div>
                
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

//className="detail__iframe--video detail__iframe"
