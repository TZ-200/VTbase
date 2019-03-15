import React from 'react';
import { connect } from 'react-redux';
import selectDetail from '../selectors/selectDetail';
import DetailHeader from './DetailHeader';
import VtuberDetailRadar from './VtuberDetailRadar';
import VideoHeatmap from './VideoHeatmap';
import EmbedVideo from './EmbedVideo';
import moment from 'moment';
import DetailNavigation from './DetailNavigation';
import DetailParams from './DetailParams';
import extractParams from '../utils/extractParams';
import GrapgContainer from './GraphContainer';
import GainLossChart from './GainLossChart';
import DetailNotFound from './DetailNotFound';
import AreaChart from './AreaChart';
import '../../node_modules/react-vis/dist/style.css';
import Graph from './Graph';
import { NavLink } from 'react-router-dom';
import Detail from './Detail';

export class DetailPage extends React.Component{

  state = {
    videoId : '',
    basicInfo: 'isSelected',
    timeline: ''
  }

  componentDidMount(){
    if(this.props.vtuberDetail && this.props.vtuberDetail.heatmap[0]){
      this.setState({videoId: this.props.vtuberDetail.heatmap[0].videoId})
    } else {
      this.setState({videoId: undefined})
    }
  }

  changeVideoId = (videoId) => {
    this.setState({videoId})
  }

  dispBasicInfo = () => {this.setState({basicInfo: 'isSelected', timeline: ''})}
  dispTimeline = () => {this.setState({basicInfo: '', timeline: 'isSelected'})}

  render(){

    const targetVtuberDetail = this.props.vtuberDetail;
    let targetVtuber, paramSet;
    if(targetVtuberDetail){
      targetVtuber = this.props.vtubers.filter(vtuber => vtuber.channelId === this.props.match.params.id)[0];
      paramSet = extractParams(targetVtuber)
    }

    return (
      <div>
      {
        targetVtuberDetail ? (

          <div className="detail" >
            <DetailHeader 
                channelId={targetVtuber.channelId}
                title={targetVtuber.title} 
                description={targetVtuberDetail.channelDescription}
            />
            <DetailNavigation 
                toggleBasic={this.dispBasicInfo}
                toggleTimeline={this.dispTimeline}
                basicInfo={this.state.basicInfo}
                timeline={this.state.timeline}
            />
            <div className="detail__wrapper"></div>

            {
              this.state.basicInfo && (
                  <Detail 
                    vtubers={this.props.vtubers}
                    paramSet={paramSet}
                    targetVtuberDetail={targetVtuberDetail} 
                    targetVtuber={targetVtuber}
                    videoId={this.state.videoId}
                    onClick={this.changeVideoId}
                  />
              )
            }
            

          </div>
        ) : (
          <DetailNotFound/>
        )
      }
      </div>
    );
  }
};
//<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
const mapStateToProps = (state, props) => ({
  vtubers: state.vtubers[0],
  vtuberDetail: selectDetail(state.vtubers[0], props.match.params.id)
});

export default connect(mapStateToProps)(DetailPage);
