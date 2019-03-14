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

export class DetailPage extends React.Component{

  state = {
    videoId : ""
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
            <DetailHeader targetVtuber={targetVtuber}/>
            <DetailNavigation />
            <DetailParams paramSet={paramSet.slice(0,3)} />
            <DetailParams paramSet={paramSet.slice(3,6)} />
            <GrapgContainer>
                <Graph ratio={'ratio_1-1'} Graph={AreaChart}/>
                <Graph ratio={'ratio_1-1'} Graph={VtuberDetailRadar} data={{vtubers:this.props.vtubers, targetVtuber,targetVtuber}}/>
            </GrapgContainer>
            <GrapgContainer>
                <Graph ratio={'ratio_4-3'} Graph={GainLossChart}/>
                <Graph ratio={'ratio_4-3'} Graph={EmbedVideo} data={{videoId:this.state.videoId}} iframe={true}/>
            </GrapgContainer>
            <VideoHeatmap 
              targetVtuberDetail={targetVtuberDetail} 
              onClick={this.changeVideoId}
              hasVideo={!!this.state.videoId}  
            />
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
