import React from 'react';
import rn from 'random-number';

const genP = rn.generator({min:0.1, max:2});
const genIS = rn.generator({min:1, max:14, integer:true});
const genIL = rn.generator({min:10, max:3000, integer:true});

const moreGrowth = 'more growth than usual';
const lessGrowth = 'less growth than usual';
const moreFollow = 'more following than usual';
const lessFollow = 'less following than usual';
const upload = ' ago, new upload';
const active = ' active';
const moreTweets = 'more tweets than usual';
const lessTweets = 'less tweets than usual';

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
            text = moreGrowth;
        } else {
            colorClassName += ' blue';
            text = lessGrowth;
        }
    }

    if(label === 'Total Videos'){
        text = upload;
        change = IntegerS.toString() + ' days';
        if(IntegerS <= 7){
            colorClassName += ' red';
        } else {
            colorClassName += ' blue';
        }
    }

    if(label === 'Channel Created At') {
        text = active;
        change = IntegerL.toString() + ' days';
        if(IntegerL < 365){
            colorClassName += ' red';
        } else {
            colorClassName += ' blue';
        }
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
            text = moreFollow
        } else {
            colorClassName += ' blue';
            text = lessFollow
        }
    }

    if(label === 'Total Followeres') {
        change = '+ ' + percent.toFixed(2) + '%';
        if(percent < 1){
            colorClassName += ' red';
            text = moreGrowth;
        } else {
            colorClassName += ' blue';
            text = lessGrowth;
        }
    }

    console.log(change);
    console.log(text);
    

    return (
        <div className="detail__param--change--container">
            <span className={colorClassName}>{change}</span>
            <span className="detail__param--change--text">{text}</span>
        </div>
    )
}
