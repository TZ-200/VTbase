export default (vtubers, { text, sortBy, order, startRange, endRange }) => {
   
    return vtubers.filter((vtuber) => {
        let filterFlag;
        switch(sortBy){
            case 'subs':
                vtuber.subs >= startRange && vtuber.subs <= endRange 
                ?   filterFlag = true : filterFlag = false;
                break;
            case 'videoCount':
                vtuber.videoCount >= startRange && vtuber.videoCount <= endRange 
                ?   filterFlag = true : filterFlag = false;
                break;
            case 'createdAt':
                vtuber.createdAt >= startRange && vtuber.createdAt <= endRange 
                ?   filterFlag = true : filterFlag = false;
                break;
            case 'followCount':
                vtuber.followCount >= startRange && vtuber.followCount <= endRange 
                ?   filterFlag = true : filterFlag = false;
                break;
            case 'followerCount':
                vtuber.followerCount >= startRange && vtuber.followerCount <= endRange 
                ?   filterFlag = true : filterFlag = false;
                break;
            case 'tweetCount':
                vtuber.tweetCount >= startRange && vtuber.tweetCount <= endRange 
                ?   filterFlag = true : filterFlag = false;
                break;
        }
        const textMatch = text ? vtuber.title.toLowerCase().includes(text.toLowerCase()) : true;

        return filterFlag && textMatch;

    }).sort((a, b) => {
        
        const border = order === 'descend' ? 1 : -1;
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
        }
    });
  };