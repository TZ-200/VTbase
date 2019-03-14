export default (vtubers, sortBy) => {
    let filteredArr;
    if(sortBy === 'subs'){
        filteredArr = vtubers.map(vtuber => vtuber.subs);
      } else if (sortBy === 'videoCount') {
        filteredArr = vtubers.map(vtuber => vtuber.videoCount);
      } else if (sortBy === 'createdAt'){
        filteredArr = vtubers.map(vtuber => vtuber.createdAt);
      } else if(sortBy === 'tweetCount') {
        filteredArr = vtubers.map(vtuber => vtuber.tweetCount);
      } else if (sortBy === 'followCount') {
        filteredArr = vtubers.map(vtuber => vtuber.followCount);
      } else if (sortBy === 'followerCount') {
        filteredArr = vtubers.map(vtuber => vtuber.followerCount);
      }
    return [Math.min(...filteredArr), Math.max(...filteredArr)]
};