import moment from 'moment';

export default (vtuber) => {
    return [
        { label: 'Total Subs', param: vtuber.subs },
        { label: 'Total Videos', param: vtuber.videoCount },
        { label: 'Channel Created At', param: moment.unix(parseInt(vtuber.createdAt)).format("YYYY-M-D") },
        { label: 'Total Tweets', param: vtuber.tweetCount },
        { label: 'Total Follows', param: vtuber.followCount },
        { label: 'Total Followeres', param: vtuber.followerCount },
    ]
}
