import React from 'react';
import { connect } from 'react-redux';
import selectDetail from '../selectors/selectDetail';
import DetailHeader from './DetailHeader';
import DetailNavigation from './DetailNavigation';
import extractParams from '../utils/extractParams';
import DetailNotFound from './DetailNotFound';
import '../../node_modules/react-vis/dist/style.css';
import Detail from './Detail';
import rn from 'random-number';
import Timeline from './Timeline'

const gen = rn.generator({min:0, max:5, integer: true});
const comments = [
  '応援よろしくお願いします！！',
  'ユーザーが登録できるコメントかなにかです',
  'アイコンをクリックするとコメントが出たり消えたり',
  'このVtuberの名言とか一言とか登録したり',
  '自己紹介とかユーザーへのフックみたいなもの',
  'クリックするたびに登録された一言メッセージがランダムで表示されます'
]


export class DetailPage extends React.Component{

  state = {
    videoId : '',
    basicInfo: 'isSelected',
    timeline: '',
    commentIsVisible: false,
    comment: ''
  }

  dispComment = () => {
    this.setState({comment: comments[gen()]})
    this.setState({commentIsVisible:true})
  }
  hideComment = () => {this.setState({commentIsVisible:false})}

  componentDidMount(){
    if(this.props.vtuberDetail && this.props.vtuberDetail.heatmap[0]){
      this.setState({videoId: this.props.vtuberDetail.heatmap[0].videoId})
    } else {
      this.setState({videoId: undefined})
    }
  }

  // Heatmap reshape a bit
  componentDidUpdate(){
    document.querySelectorAll('.react-calendar-heatmap rect')
    .forEach(rect => {rect.setAttribute('rx','2'); rect.setAttribute('ry','2');});
    document.querySelectorAll('.react-calendar-heatmap text')
    .forEach(text => text.setAttribute('style',"font-size:0.8rem; font-family:Trebuchet"));
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
                twitterId={targetVtuberDetail.twitterId}
                title={targetVtuber.title} 
                description={targetVtuberDetail.channelDescription}
                onClick={this.dispComment}
                onMouseOut={this.hideComment}
                commentIsVisible={this.state.commentIsVisible}
                comment={this.state.comment}
            />
            <DetailNavigation 
                toggleBasic={this.dispBasicInfo}
                toggleTimeline={this.dispTimeline}
                basicInfo={this.state.basicInfo}
                timeline={this.state.timeline}
            />
            <div className="detail__navigation--border"></div>

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

            {
              this.state.timeline && (
                <Timeline/>
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
