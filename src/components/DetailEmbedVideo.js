import React, {Component} from 'react';

/**
 * vtuber詳細ページの埋め込みYoutube動画
 * Heatmapのブロッククリックに対応して中身を変える
 */

export class Video extends Component{

    render(){

        return (
            <div className="video__wrapper">
                <div className="container__label">
                    Featured Video
                </div>
                <div className="video__container">
                    {
                        this.props.videoId ? (
                            <iframe 
                                key={this.props.videoId}
                                src={`https://www.youtube.com/embed/${this.props.videoId}`} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="video"
                            />
                        ) : (
                            <div className='no__video'>
                                NO VIDEO YET!
                            </div>
                        )
                    }
                </div>
            </div>
        )

    }
}

export default Video;

