import React, {Component} from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import ReactResizeDetector from 'react-resize-detector';

export default class VideoHeatmap extends Component {
  
    state = {
        width: 400,
      }

    getClass = (value) => {
        if(!value){
            return 'color-empty';    
        } else if (value.count > 1000000) {
            return 'color-4';
        } else if (value.count > 100000) {
            return 'color-3';
        } else if (value.count > 10000) {
            return 'color-2';
        } else if (value.count >= 0) {
            return 'color-1';                         
        }
    }
    


    render () {
        const values = this.props.targetVtuberDetail.heatmap.map(detail => {
            return {
                date: detail.publishedAt,
                count: detail.viewCount,
                videoId: detail.videoId,
                title: detail.title
            }
        })
        const endDate = new Date('2019-03-09');
        const startDate = this.state.width <= 650 
        ? new Date('2018-12-15') : new Date('2018-09-15')

      return (
          
        <div className="detail__heatmap--container">
            <ReactResizeDetector 
                handleWidth 
                onResize={(width) => {
                    this.setState({width})
                }}
            />
            <div className="container__label">
                Video Views
            </div>
            <div className="detail__heatmap">
                <CalendarHeatmap
                    startDate={startDate}
                    gutterSize={6}
                    endDate={endDate}
                    values={values}
                    classForValue={value => this.getClass(value)}
                    tooltipDataAttrs={value => {
                        if(value.date){
                            return { 'data-tip': `${value.title}hoge${value.date}hoge${value.count}` }
                        }
                    }}
                    showWeekdayLabels={true}
                    onClick={value => {
                        if(value) this.props.onClick(value.videoId)
                    }}
                    style={{
                        text:{
                            fontSize: '2rem'
                        }
                    }}
                />
                <ReactTooltip 
                    effect='solid'
                    getContent={(dataTip) => {
                        if(dataTip){
                            const [title, date, viewCount] = dataTip.split('hoge');
                            return(
                                <div>
                                <h3>{title}</h3>
                                <p>動画投稿日: {date}</p>
                                <p>動画再生数: {viewCount}</p>
                                </div>           
                            )
                        }
                    }}
                />
            </div>
        </div>
      );
    }
  }