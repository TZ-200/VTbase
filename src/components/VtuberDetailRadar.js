import React from 'react';
import {RadarChart,makeVisFlexible,CircularGridLines} from 'react-vis';
import calcOrder from '../utils/calcOrder';
import ReactResizeDetector from 'react-resize-detector';


export class  VtuberDetailRadar extends React.Component {

    state = {
      width: 400,
      height: 400
    }


    render(){
        const DOMAIN = [
          {name: 'subs', domain: [0, 5]},
          {name: 'videoCount', domain: [0, 5]},
          {name: 'createdAt', domain: [0, 5]},
          {name: 'followCount', domain: [0, 5]},
          {name: 'followerCount', domain: [0, 5]},
          {name: 'tweetCount', domain: [0, 5]}
        ];

        const [subs, videoCount, createdAt, followCount, followerCount, tweetCount] = calcOrder(this.props.vtubers, this.props.targetVtuber)
        
        const data = [{
            subs,
            videoCount,
            createdAt,
            followCount,
            followerCount,
            tweetCount,
            fill: 'rgba(114,172,240,0.5)',
            stroke: 'rgba(114,172,240,0.2)'
        }]

        const FRadar = makeVisFlexible(RadarChart);
        
        
        return (
          <div className="graph__container">
            <ReactResizeDetector 
                handleWidth 
                handleHeight 
                onResize={(width, height) => {
                    this.setState({width, height})
                }}
            />
            <div className="graph__label">
                Status
            </div>
            <FRadar
              data={data}
              domains={DOMAIN}
              style={{
                polygons: {
                  fillOpacity: 1,
                  strokeWidth: 3
                },
                axes: {
                  text: {
                    opacity: 1
                  }
                },
                labels: {
                  // display: 'none'
                }
              }}
              margin={{
                left: 50,
                top: 30,
                bottom: 60,
                right: 50
              }}
              tickFormat={t => ''}
              width={this.state.width}    //どうやらFlexibleRadarはwidth/heightの指定が無いと警告を吐くようなので
              height={this.state.height}  //わざわざReactResizeDetectorを使用
            >
                <CircularGridLines
                  tickValues={[...new Array(11)].map((v, i) => i / 10 - 1)}
                />
            </FRadar>
        </div>

        )
    }
    

    };
    
export default VtuberDetailRadar;