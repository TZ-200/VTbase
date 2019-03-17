export default (vtubers, text, sortBy, order, activePage) => {

    const border = order === 'descend' ? 1 : -1;
    const vtubersSorted = vtubers
    .filter(vtuber => text ? vtuber.title.toLowerCase().includes(text.toLowerCase()) : true)
    .sort((a, b) => {
        switch(sortBy){
            case 'subs':
                return parseInt(a.subs) < parseInt(b.subs) ? border : -border;
            case 'videoCount':
                return parseInt(a.videoCount) < parseInt(b.videoCount) ? border : -border;
            case 'createdAt':
                return parseInt(a.createdAt) < parseInt(b.createdAt) ? border : -border;
            case 'followCount':
                return parseInt(a.followCount) < parseInt(b.followCount) ? border : -border;
            case 'followerCount':
                return parseInt(a.followerCount) < parseInt(b.followerCount) ? border : -border;
            case 'tweetCount':
                return parseInt(a.tweetCount) < parseInt(b.tweetCount) ? border : -border;
        };
    })
    
    return [
        vtubersSorted.slice( (activePage - 1) * 100, (activePage - 1) * 100 + 99 ),
        vtubersSorted.length
    ]

};