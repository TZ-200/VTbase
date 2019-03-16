import React from 'react';
import rn from 'random-number';
import { 
    FlexibleXYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeries,
    Hint
} from 'react-vis';
import moment from 'moment';

const timestamp = new Date('February 22 2019').getTime();
const ONE_DAY = 86400000;

const plusGen = rn.generator({min:400, max:600, integer: true});
const minusGen = rn.generator({min:-100, max:-5, integer: true});


const DATA = [];
for(let i = 0; i <= 9; i++){
    DATA.push({
        x: ONE_DAY * i + timestamp,
        y0: 0,
        y: plusGen()
    })
}
for(let i = 0; i <= 9; i++){
    DATA.push({
        x: ONE_DAY * i + timestamp,
        y0: minusGen(),
        y: 0
    })
}

export default class GainLossChart extends React.Component {

    state = {
        onSeries: false,
        hovered: null,
    };

    getHint = (DATA, x) => {
        const data = DATA.filter(d => d.x === x)
        return (
            <div className="hint__gainLoss">
                <span className="hint__gainLoss--date">{moment(x).format("YYYY-M-D")}</span>
                <div className="hint__gainLoss--plus">
                    <span className="hint__gainLoss--plus--label">Gain:</span>
                    <span className="hint__gainLoss--plus--data">+{data[0].y}</span>
                </div>
                <div className="hint__gainLoss--minus">
                    <span className="hint__gainLoss--minus--label">Lost:</span>
                    <span className="hint__gainLoss--minus--data">{data[1].y0}</span>
                </div>
            </div>
        )
    }

  render() {
      
    return (
        <div className="graph__container">
            <div className="container__label">
                Gained & Lost Followeres
            </div>
            <FlexibleXYPlot
                xDomain={[timestamp - ONE_DAY /2, timestamp + 9.5 * ONE_DAY]}
                yDomain={[-150, 650]}
                xType="time"
                margin={{bottom:60}}
            >
            <VerticalBarSeries
                data={DATA}
                colorType="literal"
                getColor={d => {
                    return d.y0 < 0 ? 'rgb(255, 172, 172)' : 'rgb(87, 165, 255)';
                }}
                barWidth={0.4}
                onNearestX={d => this.state.onSeries && this.setState({hovered: d})}
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
                        {this.getHint(DATA, this.state.hovered.x)}
                    </Hint>
                }
            </FlexibleXYPlot>
        </div>
    );
  }
}