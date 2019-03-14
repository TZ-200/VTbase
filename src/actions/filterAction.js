export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });
export const sortBySubs = () => ({
    type: 'SORT_BY_SUBS'
});
export const sortByVideoCount = () => ({
    type: 'SORT_BY_VIDEOCOUNT'
});
export const sortByCreatedAt = () => ({
    type: 'SORT_BY_CREATEDAT'
});
export const sortByFollowCount = () => ({
    type: 'SORT_BY_FOLLOWCOUNT'
});
export const sortByFollowerCount = () => ({
    type: 'SORT_BY_FOLLOWERCOUNT'
});
export const sortByTweetCount = () => ({
    type: 'SORT_BY_TWEETCOUNT'
});
export const setOrder = (order) => ({
    type: 'SET_ORDER',
    order
});
export const setStartRange = (startRange) => ({
    type: 'SET_START_RANGE',
    startRange
});
export const setEndRange = (endRange) => ({
    type: 'SET_END_RANGE',
    endRange
});
export const startSetStartRange = (vtubers) => {
    const subsArray = vtubers.map(vtuber => vtuber.subs);
    return (dispatch) => {
        return new Promise(function(resolve, reject) {
            resolve(dispatch(setStartRange(Math.min(...subsArray))));
        })
}}
export const startSetEndRange = (vtubers) => {
    const subsArray = vtubers.map(vtuber => vtuber.subs);
    return (dispatch) => {
        return new Promise(function(resolve, reject) {
            resolve(dispatch(setEndRange(Math.max(...subsArray))));
        })
}}