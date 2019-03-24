import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

/**
 * Vtuberの詳細ページのTimeline画面
 */

export default () => (
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-03-02"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<i className="fas fa-tv timeline__icon"></i>}
        >
            <h3 className="vertical-timeline-element-title">アニメ「バーチャルさんはみている」出演</h3>
            <div className='timeline__button'>VISIT WEBSITE</div>

        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-01-21"
            iconStyle={{ background: 'rgb(255, 53, 117)', color: '#fff' }}
            icon={<i className="fab fa-youtube timeline__icon"></i>}    
        >
            <h3 className="vertical-timeline-element-title">Youtubeチャンネル開設○周年！</h3>
            
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018-10-16"
            iconStyle={{ background: 'rgb(255, 53, 117)', color: '#fff' }}
            icon={<i className="fab fa-youtube timeline__icon"></i>}
        >
            <h3 className="vertical-timeline-element-title">「○○○○」 ○○○○再生を達成</h3>
            <div className='timeline__button'>VIEW VIDEO</div>

        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018-07-02"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<i className="fas fa-tv timeline__icon"></i>}
        >
            <h3>
            ○○メディア観光大使に就任
            </h3>
            <div className='timeline__button'>VIEW ARTICLE</div>


        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018-04-21"
            iconStyle={{ background: 'rgb(255, 53, 117)', color: '#fff' }}
            icon={<i className="fab fa-youtube timeline__icon"></i>}        
        >
        <h3 className="vertical-timeline-element-title">Youtubeチャンネル登録者数○○人達成</h3>

        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017-05-16"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fab fa-twitter timeline__icon"></i>}
        >
            <h3>
            Twitter「○○」が○○RTを達成
            </h3>
            <div className='timeline__button'>VIEW TWEET</div>

        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017-05-12"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<i className="fas fa-tv timeline__icon"></i>}
        >
            <h3>
            ○○と○○○○コラボ
            </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016-02-03"
            iconStyle={{ background: 'rgb(255, 202, 0)', color: '#fff' }}
            icon={<i className="fas fa-birthday-cake timeline__icon"></i>}
        >
            <h3 className="vertical-timeline-element-title">Youtubeチャンネル開設</h3>
        </VerticalTimelineElement>
    </VerticalTimeline>
)
