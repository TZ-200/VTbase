export default (vtubers, targetVtuber) => {
    
    const targetSubs = targetVtuber.subs;
    const targetVideoCount = targetVtuber.videoCount;
    const targetCreatedAt = targetVtuber.createdAt;
    const targetFollowCount = targetVtuber.followCount;
    const targetFollowerCount = targetVtuber.followerCount;
    const targetTweetCount = targetVtuber.tweetCount;

    const subsArr = [], videoCountArr = [], createdAtArr = [],
            followCountArr = [], followerCountArr =[], tweetCountArr = [];
    vtubers.forEach(vtuber => {
        subsArr.push(vtuber.subs);
        videoCountArr.push(vtuber.videoCount);
        createdAtArr.push(vtuber.createdAt);
        followCountArr.push(vtuber.followCount);
        followerCountArr.push(vtuber.followerCount);
        tweetCountArr.push(vtuber.tweetCount);
    });

    const arrs = [subsArr, videoCountArr, createdAtArr, followCountArr, followerCountArr, tweetCountArr];
    arrs.forEach(arr => arr.sort((a,b) => parseInt(a) > parseInt(b) ? 1 : -1));
    createdAtArr.sort((a,b) => parseInt(a) > parseInt(b) ? -1 : 1)

    const targetSubsIndex = subsArr.findIndex(subs => subs === targetSubs);
    const targetVideoCountIndex = videoCountArr.findIndex(videoCount => videoCount === targetVideoCount);
    const targetCreatedAtIndex = createdAtArr.findIndex(createdAt => createdAt === targetCreatedAt);
    const targetFollowCountIndex = followCountArr.findIndex(followCount => followCount === targetFollowCount);
    const targetFollowerCountIndex = followerCountArr.findIndex(followerCount => followerCount === targetFollowerCount);
    const targetTweetCountIndex = tweetCountArr.findIndex(tweetCount => tweetCount === targetTweetCount);

    const arrLength = subsArr.length;

    return [
        (targetSubsIndex + 1) * 5 / arrLength,
        (targetVideoCountIndex + 1) * 5 / arrLength,
        (targetCreatedAtIndex + 1) * 5 / arrLength,
        (targetFollowCountIndex + 1) * 5 / arrLength,
        (targetFollowerCountIndex + 1) * 5 / arrLength,
        (targetTweetCountIndex + 1) * 5 / arrLength
    ];
}