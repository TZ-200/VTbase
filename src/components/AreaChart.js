import React from 'react';
import { 
    GradientDefs,
    AreaSeries,
    linearGradient,
    FlexibleXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    LineSeries
} from 'react-vis';

const timestamp = new Date('February 22 2019').getTime();
const ONE_DAY = 86400000;



export default class AreaChart extends React.Component {

    render() {
        const DATA = [];
        for(let i = 0; i <= 9; i++){
            DATA.push({
                x: ONE_DAY * i + timestamp,
                y: Math.random() * 10 + 50
            })
        }
          return (
                    <FlexibleXYPlot 
                        xDomain={[timestamp - ONE_DAY , timestamp + 10 * ONE_DAY]}
                        yDomain={[40,65]}    
                        xType="time"
                    >
                    <GradientDefs>
                    <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="20%" stopColor="blue" stopOpacity={0.1}/>
                      <stop offset="100%" stopColor="blue" stopOpacity={0} />
                    </linearGradient>
                  </GradientDefs>
                    <AreaSeries 
                        data={DATA}  
                        curve={'curveMonotoneX'}
                        color={'url(#CoolGradient)'}
                    />
                    <LineSeries
                        data={DATA}
                        color="red"  
                        curve={'curveMonotoneX'}
                        lineStyle={{stroke:"red"}}
                        opacity={0.5}
                    />
                    <XAxis 
                        style={{stroke: 'black'}}
                        tickValues={[
                            timestamp + 1 * ONE_DAY,
                            timestamp + 3 * ONE_DAY,
                            timestamp + 5 * ONE_DAY,
                            timestamp + 7 * ONE_DAY,
                            timestamp + 9 * ONE_DAY
                        ]}
                    />
                    <YAxis />
                    </FlexibleXYPlot>
            )
    }

}