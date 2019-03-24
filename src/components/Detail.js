import React from 'react';
import DetailRadarChart from './DetailRadarChart';
import DetailVideoHeatmap from './DetailVideoHeatmap';
import DetailEmbedVideo from './DetailEmbedVideo';
import DetailParams from './DetailParams';
import DetailGainLossChart from './DetailGainLossChart';
import DetailAreaChart from './DetailAreaChart';

/**
 * Vtuberの詳細ページのデータ画面
 */

export default (props) => (
    <div className="detail__wrapper">
        <DetailParams 
            paramSet={props.paramSet} 
            icon={['fas fa-rss', 'fas fa-video', 'fas fa-birthday-cake','fab fa-twitter', 'fas fa-walking', 'fas fa-users']}
        />
        <div className="detail__large-container">
            <DetailAreaChart />
            <DetailRadarChart 
                vtubers={props.vtubers} 
                targetVtuber={props.targetVtuber}
            />
            <DetailGainLossChart />
            <DetailEmbedVideo 
                videoId={props.videoId}
                iframe={true}
            />
            {
                props.videoId && (
                    <DetailVideoHeatmap 
                        targetVtuberDetail={props.targetVtuberDetail} 
                        onClick={props.onClick}
                    />
                )
            }

        </div>
    </div>
)
