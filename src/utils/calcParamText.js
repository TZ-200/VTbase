import React from 'react';
import rn from 'random-number';

const genP = rn.generator({min:0.1, max:2});
const genIS = rn.generator({min:1, max:14, integer:true});
const genIL = rn.generator({min:10, max:3000, integer:true});

const moreGrowth = 'more than usual';
const lessGrowth = 'less than usual';
const moreFollow = 'more than usual';
const lessFollow = 'less than usual';
const upload = ' ago, new upload';
const active = ' keep active';
const moreTweets = 'more than usual';
const lessTweets = 'less than usual';

export default (label) => {
    const percent = genP();
    const IntegerS = genIS();
    const IntegerL = genIL();
    let colorClassName = "detail__param--change--quantity"
    let text, change;

    if(label === 'Total Subs'){
        change = '+ ' + percent.toFixed(2) + '%';
        if(percent < 1.0){
            colorClassName += ' red';
            text = lessGrowth;
        } else {
            colorClassName += ' blue';
            text = moreGrowth;
        }
    }

    if(label === 'Total Videos'){
        text = upload;
        change = IntegerS.toString() + ' days';
        if(IntegerS <= 7){
            colorClassName += ' blue';
        } else {
            colorClassName += ' red';
        }
    }

    if(label === 'Channel Created At') {
        text = active;
        change = IntegerL.toString() + ' days';
        colorClassName += ' blue';
    }

    if(label === 'Total Tweets') {
        change = '+ ' +  IntegerS;
        if(IntegerS < 7){
            colorClassName += ' red';
            text = lessTweets;
        } else {
            colorClassName += ' blue';
            text = moreTweets;
        }
    }

    if(label === 'Total Follows') {
        change = '+ ' + percent.toFixed(2) + '%';
        if(percent < 1){
            colorClassName += ' red';
            text = lessFollow
        } else {
            colorClassName += ' blue';
            text = moreFollow
        }
    }

    if(label === 'Total Followeres') {
        change = '+ ' + percent.toFixed(2) + '%';
        if(percent < 1){
            colorClassName += ' red';
            text = lessGrowth;
        } else {
            colorClassName += ' blue';
            text = moreGrowth;
        }
    }   

    return (
        <div className="detail__param--change--container">
            <span className={colorClassName}>{change}</span>
            <span className="detail__param--change--text">{text}</span>
        </div>
    )
}
