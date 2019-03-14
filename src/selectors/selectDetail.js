export default (vtubers, channelId) => {

    const vtuber = vtubers.filter(vtuber => vtuber.channelId === channelId)[0];
    if(!vtuber) return undefined;

    const detail = require(`../temp/vtuberDetails/${vtuber.channelId}.json`);
    return detail;

}