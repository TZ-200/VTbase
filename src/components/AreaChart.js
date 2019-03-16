import React from 'react';
import rn from 'random-number';
import moment from 'moment';
import { 
    GradientDefs,
    AreaSeries,
    FlexibleXYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineSeries,
    Hint
} from 'react-vis';

const timestamp = new Date('February 22 2019').getTime();
const ONE_DAY = 86400000;
let gen = rn.generator({min:800, max:1200, integer: true});


export default class AreaChart extends React.Component {
    
    state = {
        onSeries: false,
        hovered: null,
        DATA: []
    };

    componentDidMount(){
        const DATA = [];
        for(let i = 0; i <= 9; i++){
            DATA.push({
                x: ONE_DAY * i + timestamp,
                y: gen()
            })
        }
        this.setState({DATA});
    }

    render() {
          return (  
              <div className="graph__container">
                    <div className="container__label">
                        Channel Growth
                    </div>
                    <FlexibleXYPlot 
                        xDomain={[timestamp - ONE_DAY /2, timestamp + 9.5 * ONE_DAY]}
                        yDomain={[0,1700]}    
                        xType="time"
                        margin={{bottom:60}}
                    >
                    <GradientDefs>
                        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="20%" stopColor="blue" stopOpacity={0.1}/>
                        <stop offset="100%" stopColor="blue" stopOpacity={0} />
                        </linearGradient>
                    </GradientDefs>
                    <AreaSeries 
                        data={this.state.DATA}  
                        curve={'curveMonotoneX'}
                        color={'url(#areaGradient)'}
                        onNearestXY={d => this.state.onSeries && this.setState({hovered: d})}
                        onSeriesMouseOut={d => {
                            this.setState({onSeries: false})
                            this.setState({hovered: null})
                        }}
                        onSeriesMouseOver={d => this.setState({onSeries: true})}
                    />
                    <LineSeries
                        data={this.state.DATA}
                        color="blue"  
                        curve={'curveMonotoneX'}
                        lineStyle={{stroke:"blue"}}
                        opacity={0.2}
                        onNearestXY={d => this.state.onSeries && this.setState({hovered: d})}
                        onSeriesMouseOut={d => {
                            this.setState({onSeries: false})
                            this.setState({hovered: null})
                        }}
                        onSeriesMouseOver={d => this.setState({onSeries: true})}
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
                        tickTotal={5}     
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
                    {this.state.hovered && 
                        <Hint style={{zIndex:'20000'}}
                            value={this.state.hovered}
                        >
                            <div className="hint__area">
                                <span>{moment(this.state.hovered.x).format("YYYY-M-D")}: +Subs {this.state.hovered.y}</span>

                            </div>
                        </Hint>
                      }
                    </FlexibleXYPlot>
              </div>

            )
    }

}