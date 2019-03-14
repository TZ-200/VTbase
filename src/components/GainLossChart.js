import React from 'react';
import { 
    FlexibleXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
} from 'react-vis';

const timestamp = new Date('February 22 2019').getTime();
const ONE_DAY = 86400000;

const DATA = [
    {x: ONE_DAY, y0: 0, y: 1},
    {x: ONE_DAY * 3, y0: 0, y: 1 },
    {x: ONE_DAY * 4, y0: 0, y: 1 },
    {x: ONE_DAY * 5, y0: 0, y: 1 },
    {x: ONE_DAY * 6, y0: -1, y:0 },
    {x: ONE_DAY * 7, y0: 0, y: 1 },
    {x: ONE_DAY * 8, y0: 0, y: 1 },
    {x: ONE_DAY * 9, y0: 0, y: 1 },
    {x: ONE_DAY * 10, y0: 0, y: 1 },
    { x: ONE_DAY * 11, y0: 0, y: 1 }
  ].map(el => ({x: el.x + timestamp, y0: el.y0, y: el.y}));




export default class GainLossChart extends React.Component {

  render() {
    //   console.log(myDATA);
    //   myDATA.push({x: 0, y0: 0, y: 3});
      
    return (
            <FlexibleXYPlot
                
                xDomain={[timestamp , timestamp + 12 * ONE_DAY]}
                yDomain={[-3, 3]}
                xType="time"
            >
                <VerticalBarSeries
                    className="difference-example"
                    data={DATA}
                    colorType="literal"
                    getColor={d => {
                        return d.y0 < 0 ? '#EF5D28' : '#1A3177';
                    }}/>
                <VerticalGridLines />
                <HorizontalGridLines style={{stroke: 'black'}}/>
                <XAxis 
                    style={{stroke: 'black'}}
                    tickValues={[
                        timestamp + 2 * ONE_DAY,
                        timestamp + 4 * ONE_DAY,
                        timestamp + 6 * ONE_DAY,
                        timestamp + 8 * ONE_DAY,
                        timestamp + 10 * ONE_DAY
                    ]}
                />
                <YAxis />
            </FlexibleXYPlot>
    );
  }
}