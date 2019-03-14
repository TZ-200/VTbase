export default ( vtubers, label ) => {
    switch(label){
        case 'subs':
            return vtubers.map(vtuber => vtuber.subs);
        case 'videoCount':
            return vtubers.map(vtuber => vtuber.videoCount);
        case 'tweetCount':
            return vtubers.map(vtuber => vtuber.tweetCount);
        case 'followCount':
            return vtubers.map(vtuber => vtuber.followCount);
        case 'followerCount':
            return vtubers.map(vtuber => vtuber.followerCount);
    }
}
