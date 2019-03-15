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
import rn from 'random-number';

const timestamp = new Date('February 22 2019').getTime();
const ONE_DAY = 86400000;
const gen = rn.generator({min:800, max:1200, integer: true});


export default class AreaChart extends React.Component {

    render() {
        const DATA = [];
        for(let i = 0; i <= 9; i++){
            DATA.push({
                x: ONE_DAY * i + timestamp,
                y: gen()
            })
        }
          return (  
              <div className="graph__container">
                    <div className="graph__label">
                        Channel Growth
                    </div>
                    <FlexibleXYPlot 
                        xDomain={[timestamp - ONE_DAY /2, timestamp + 9.5 * ONE_DAY]}
                        yDomain={[0,1700]}    
                        xType="time"
                        margin={{bottom:60}}
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
                        color="blue"  
                        curve={'curveMonotoneX'}
                        lineStyle={{stroke:"blue"}}
                        opacity={0.2}
                    />
                    <XAxis 
                        tickSize={0}
                        tickValues={[
                            timestamp + 1 * ONE_DAY,
                            timestamp + 3 * ONE_DAY,
                            timestamp + 5 * ONE_DAY,
                            timestamp + 7 * ONE_DAY,
                            timestamp + 9 * ONE_DAY
                        ]}
                        style={{
                            text: {
                                fontSize:'1.5rem'
                            }
                        }}
                    />
                    <YAxis 
                        tickSize={0}             
                        tickPadding={4}           
                        style={{
                            line: {
                                stroke: 'none'
                            },
                            text: {
                                fontSize:'1.5rem'
                            }
                        }}
                    />
                    <HorizontalGridLines
                        style={{
                            strokeDasharray: '2,2',
                            strokeWidth: '2px'
                        }}
                    />
                    </FlexibleXYPlot>
              </div>

            )
    }

}