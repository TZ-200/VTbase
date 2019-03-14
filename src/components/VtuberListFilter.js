import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortBySubs,
  sortByVideoCount, 
  sortByCreatedAt, 
  sortByTweetCount, 
  sortByFollowCount, 
  sortByFollowerCount,
  setStartRange,
  setEndRange,
  setOrder } from '../actions/filterAction'
import { Range, getTrackBackground } from 'react-range';
import calcFilterRange from '../utils/calcFilterRange';
import moment from 'moment';

const STEP = 100;

export class VtuberListFilter extends React.Component{
  
  state = {
    text: '',
    values: [0, 100],
    min: 0,
    max: 100
  };

  updatePicker(startRange, endRange){
    this.setState({min: startRange});
    this.setState({max: endRange});
    this.setState({values: [startRange, endRange]});
  }

  componentDidMount(){
    const [min, max] = calcFilterRange(this.props.vtubers, this.props.filter.sortBy);
    this.updatePicker(min, max);
    this.setState({values:[this.props.filter.startRange, this.props.filter.endRange]})
    this.setState({text: this.props.filter.text});
  }

  onSortChange = (e) => {
    const sortBy = e.target.value;
    if(sortBy === 'subs'){
      this.props.sortBySubs();
    } else if (sortBy === 'videoCount') {
      this.props.sortByVideoCount();
    } else if (sortBy === 'createdAt'){
      this.props.sortByCreatedAt(); 
    } else if(sortBy === 'tweetCount') {
      this.props.sortByTweetCount(); 
    } else if (sortBy === 'followCount') {
      this.props.sortByFollowCount(); 
    } else if (sortBy === 'followerCount') {
      this.props.sortByFollowerCount(); 
    }
    
    const [min, max] = calcFilterRange(this.props.vtubers, sortBy);

    this.props.setStartRange(min);
    this.props.setEndRange(max);
    this.updatePicker(min, max);
  };
  
  onValueChange(values){    
    this.props.setStartRange(values[0]);
    this.props.setEndRange(values[1]);
    this.setState({values})
  }
  onOrderChange = (e) => {
    const order = e.target.value;
    this.props.setOrder(order);
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
    this.setState({text: e.target.value});
  }
  onReset = () => {
    this.props.setTextFilter('');
    this.setState({text: ''});
    const [min, max] = calcFilterRange(this.props.vtubers, this.props.filter.sortBy);
    this.props.setStartRange(min);
    this.props.setEndRange(max);
    this.updatePicker(min, max);
  }
  render(){
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.onTextChange}
        />
        <select 
            onChange={this.onOrderChange} 
            style={{display:'inline-block'}}
            defaultValue={this.props.filter.order}  
          >
            <option value="descend">降順</option>
            <option value="ascend">昇順</option>
        </select>
        <select 
          onChange={this.onSortChange} 
          style={{display:'inline-block'}}
          defaultValue={this.props.filter.sortBy}  
        >
          <option value="subs">Subs</option>
          <option value="videoCount">VideoCount</option>
          <option value="createdAt">CreatedAt</option>
          <option value="tweetCount">TweetCount</option>
          <option value="followCount">FollowCount</option>
          <option value="followerCount">FollowerCount</option>
      </select>
      <button onClick={this.onReset}>Reset</button>
      <Range
          values={this.state.values}
          step={STEP}
          min={this.state.min}
          max={this.state.max}
          onChange={values => this.onValueChange(values)}

          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '50%',
                display: 'inline-block',
                marginTop: '1rem'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ['#ccc', '#548BF4', '#ccc'],
                    min: this.state.min,
                    max: this.state.max
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
            </div>
          )}

          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '35px',
                width: '35px',
                borderRadius: '30px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA'
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC'
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: '30px' }} id="output">
          { this.props.filter.sortBy !== 'createdAt'
                ? <div>{this.state.values[0]} - {this.state.values[1]}</div>
                : <div>{moment.unix(parseInt(this.state.values[0])).format("YYYY-M-D")} - {moment.unix(parseInt(this.state.values[1])).format("YYYY-M-D")}</div>
          }
        </output>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  filter: state.filter,
  vtubers: state.vtubers[0]
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortBySubs: () => dispatch(sortBySubs()),
  sortByVideoCount: () => dispatch(sortByVideoCount()),
  sortByCreatedAt: () => dispatch(sortByCreatedAt()),
  sortByTweetCount: () => dispatch(sortByTweetCount()),
  sortByFollowCount: () => dispatch(sortByFollowCount()),
  sortByFollowerCount: () => dispatch(sortByFollowerCount()),
  setOrder: (order) => dispatch(setOrder(order)),
  setStartRange: (startRange) => dispatch(setStartRange(startRange)),
  setEndRange: (endRange) => dispatch(setEndRange(endRange)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VtuberListFilter);