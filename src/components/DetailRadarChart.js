import React from 'react';
import calcOrder from '../utils/calcOrder';
import ReactResizeDetector from 'react-resize-detector';
import numeral from 'numeral';
import {
  RadarChart,
  CircularGridLines,
  Hint
} from 'react-vis';

/**
 * vtuber詳細ページのStatus Radar Chart
 */

export class  VtuberDetailRadar extends React.Component {

    state = {
      width: 400,
      height: 400,
      hovered: null
    }

    getRank = (label, ranks) =>{
      if(label === 'Subs')  return ranks.subs;
      if(label === 'Videos')  return ranks.videoCount;
      if(label === 'Created At')  return ranks.createdAt;
      if(label === 'Follows')  return ranks.followCount;
      if(label === 'Followers')  return ranks.followerCount;
      if(label === 'Tweets')  return ranks.tweetCount;
    }

    render(){
        const [subs, videoCount, createdAt, followCount, followerCount, tweetCount] = calcOrder(this.props.vtubers, this.props.targetVtuber)

        const DOMAIN = [
          {name: 'Subs', domain: [0, 5]},
          {name: 'Videos', domain: [0, 5]},
          {name: 'Created At', domain: [0, 5]},
          {name: 'Follows', domain: [0, 5]},
          {name: 'Followers', domain: [0, 5]},
          {name: 'Tweets', domain: [0, 5]}
        ];        
        const ranks = {
          subs: subs[1],
          videoCount: videoCount[1],
          createdAt: createdAt[1],
          followCount: followCount[1],
          followerCount: followerCount[1],
          tweetCount: tweetCount[1]
        }
        const data = [{
            Subs: subs[0],
            Videos: videoCount[0],
            'Created At': createdAt[0],
            Follows: followCount[0],
            Followers: followerCount[0],
            Tweets: tweetCount[0],
            fill: 'rgba(114,172,240,0.5)',
            stroke: 'rgba(114,172,240,.3)'
        }]

        return (
          <div className="graph__container">
            <ReactResizeDetector 
                handleWidth 
                handleHeight 
                onResize={(width, height) => {
                    this.setState({width, height})
                }}
            />
            <div className="container__label">
                Status
            </div>
            <RadarChart
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
                  textAnchor: 'middle',
                  fontFamily: 'Trebuchet'
                }
              }}
              margin={{
                left: 50,
                top: 45,
                bottom: 60,
                right: 50
              }}
              tickFormat={t => ''}
              width={this.state.width}    //どうやらFlexibleRadarはwidth/heightの指定が無いと警告を吐くようなので
              height={this.state.height}  //わざわざReactResizeDetectorを使用
              onValueMouseOut={() => {
                this.setState({hovered: false})
              }}
              onValueMouseOver={v => {
                this.setState({hovered: v});
              }}
            >
                <CircularGridLines
                  tickValues={[...new Array(11)].map((v, i) => i / 10 - 1)}
                />

                {
                  this.state.hovered && 
                    <Hint style={{zIndex:'20000'}}
                        value={this.state.hovered}
                    >
                      <div className="hint__status">
                        <span className="hint__status--rank">{numeral(this.getRank(this.state.hovered.domain,ranks)).format('0 o')}</span>
                        <span className="hint__status--among">Among DB</span>
                      </div>
                  </Hint>
                }
            </RadarChart>
        </div>

        )
    }
    

    };
    
export default VtuberDetailRadar;