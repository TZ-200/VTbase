import React from 'react';
import VtuberDetailRadar from './VtuberDetailRadar';
import VideoHeatmap from './VideoHeatmap';
import EmbedVideo from './EmbedVideo';
import DetailParams from './DetailParams';
import GainLossChart from './GainLossChart';
import AreaChart from './AreaChart';

export default (props) => (
    <div className="detail__wrapper">
        <DetailParams 
            paramSet={props.paramSet} 
            icon={['fas fa-rss', 'fas fa-video', 'fas fa-birthday-cake','fab fa-twitter', 'fas fa-walking', 'fas fa-users']}
        />
        <div className="detail__large-container">
            <AreaChart />
            <VtuberDetailRadar 
                vtubers={props.vtubers} 
                targetVtuber={props.targetVtuber}
            />
            <GainLossChart />
            <EmbedVideo 
                videoId={props.videoId}
                iframe={true}
            />
            {
                props.videoId && (
                    <VideoHeatmap 
                        targetVtuberDetail={props.targetVtuberDetail} 
                        onClick={props.onClick}
                    />
                )
            }

        </div>
    </div>
)
