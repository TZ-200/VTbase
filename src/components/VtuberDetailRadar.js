import React from 'react';
import {RadarChart,makeVisFlexible} from 'react-vis';
import calcOrder from '../utils/calcOrder';

export class  VtuberDetailRadar extends React.Component {

    render(){
        console.log(this.props.data);
        const DATA = [
            {
              name: 'Spider5',
              subs: 5,
              videoCount: 5,
              createdAt: 5,
              followCount: 5,
              followerCount: 5,
            tweetCount: 5,
              fill: '#f8f8f8',
              stroke: '#cccccc'
            },
            {
              name: 'Spider4',
              subs: 4,
              videoCount: 4,
              createdAt: 4,
              followCount: 4,
              followerCount: 4,
            tweetCount: 4,
              fill: 'white',
              stroke: '#cccccc'
            },
            {
              name: 'Spider3',
              subs: 3,
              videoCount: 3,
              createdAt: 3,
              followCount: 3,
              followerCount: 3,
            tweetCount: 3,
              fill: '#f8f8f8',
              stroke: '#cccccc'
            },
            {
              name: 'Spider2',
              subs: 2,
              videoCount: 2,
              createdAt: 2,
              followCount: 2,
              followerCount: 2,
            tweetCount: 2,
              fill: 'white',
              stroke: '#cccccc'
            },
            {
              name: 'Spider1',
              subs: 1,
              videoCount: 1,
              createdAt: 1,
              followCount: 1,
              followerCount: 1,
            tweetCount: 1,
              fill: '#f8f8f8',
              stroke: '#cccccc'
            },
            {
              name: 'Spider0',
              subs: 0.1,
              videoCount: 0.1,
              createdAt: 0.1,
              followCount: 0.1,
              followerCount: 0.1,
              tweetCount: 0.1,
              fill: '#f8f8f8',
              stroke: '#cccccc'
            }
          ];
          
        const [subs, videoCount, createdAt, followCount, followerCount, tweetCount] = calcOrder(this.props.data.vtubers, this.props.data.targetVtuber)
        
        DATA.push({
            name: 'Mercedes',
            subs,
            videoCount,
            createdAt,
            followCount,
            followerCount,
            tweetCount,
            fill: 'rgba(114,172,240,0.5)',
            stroke: 'rgba(114,172,240,0.2)'
        })
        console.log(DATA);

        const Test = makeVisFlexible(RadarChart);

        return (
            <Test
                data={DATA}
                tickFormat={t => {return '';}}
                domains={[
                {name: 'subs', domain: [0.1, 5], getValue: d => d.subs},
                {name: 'videoCount', domain: [0.1, 5], getValue: d => d.videoCount},
                {name: 'createdAt', domain: [0.1, 5], getValue: d => d.createdAt},
                {name: 'followCount', domain: [0.1, 5], getValue: d => d.followCount},
                {name: 'followerCount', domain: [0.1, 5], getValue: d => d.followerCount},
                {name: 'tweetCount', domain: [0.1, 5], getValue: d => d.tweetCount}
                ]}
                style={{
                    polygons: {
                        strokeWidth: 1,
                        strokeOpacity: 0.8,
                        fillOpacity: 0.8
                    },
                    labels: {
                        textAnchor: 'middle'
                    },
                    axes: {
                        line: {
                        fillOpacity: 0.8,
                        strokeWidth: 0.5,
                        strokeOpacity: 0.8
                        },
                        ticks: {
                        fillOpacity: 0,
                        strokeOpacity: 0
                        },
                        text: {}
                    }
                }}
                colorRange={['transparent']}
                hideInnerMostValues={false}
                renderAxesOverPolygons={true}
            />
        )
    }
    

    };
    
export default VtuberDetailRadar;
