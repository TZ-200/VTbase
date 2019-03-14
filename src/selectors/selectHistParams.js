import stats from 'stats-lite';

export default (selectedData) => {
    
    const data = []
    let xDomain = undefined, yDomain = undefined;

    if(stats.histogram(selectedData,10)){
        const { binLimits, binWidth, values} = stats.histogram(selectedData,10);
        values.forEach((value, index) => {
            data.push({
                x0: binLimits[0] + binWidth * index,
                x: binLimits[0]  + binWidth * (index+1),
                y: value
            })
        })
    } else {
        data.push({x0: 0,x: 0,y: 0});
        xDomain = [0,10];
        yDomain = [0,10];
    }
    return [data, xDomain, yDomain];
}