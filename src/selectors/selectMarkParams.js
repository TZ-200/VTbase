export default (selectedDataOne, selectedDataTwo) => {

    const data = selectedDataOne.map((data, index) => {
        
        // log scale の場合 0 の値はエラーにつながるので対処しておく
        if(parseInt(data) === 0 || parseInt(selectedDataTwo[index]) === 0) return {x:5,y:5,opacity:0};
        
        return {
            x: data,
            y: selectedDataTwo[index]
        }
    })

    let xDomain, yDomain; 
    if(data.length===0){　// データ点 0 だとグラフそのものが消えるので対処
        data.push({x:5,y:5,opacity:0}); 
        xDomain = [1,10];
        yDomain = [1,10];
    } else　{
        xDomain = [Math.min(...selectedDataOne), Math.max(...selectedDataOne)];
        yDomain = [Math.min(...selectedDataTwo), Math.max(...selectedDataTwo)];
    }

    if(xDomain[0] === 0) xDomain[0] = 1;
    if(xDomain[0] === xDomain[1]){
        xDomain[0] = 1;
        xDomain[1] = xDomain[1] * 2;
    }

    if(yDomain[0] === 0) yDomain[0] = 1;
    if(yDomain[0] === yDomain[1]){
        yDomain[0] = 1;
        yDomain[1] = yDomain[1] * 2;
    }

    let xtickTotal = Math.floor(xDomain[1]/xDomain[0]).toString(10).length - 1;
    if(xtickTotal<=1) xtickTotal=1;
    let ytickTotal = Math.floor(yDomain[1]/yDomain[0]).toString(10).length - 1;
    if(ytickTotal<=1) ytickTotal=1;

    return [data, xDomain, yDomain, xtickTotal, ytickTotal]
}