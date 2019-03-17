import React from 'react';
import Pagination from "react-js-pagination";

export class VtuberListFilter extends React.Component {

  // buttonクリックから検索をしたい場合はstateを持たせる
  // state = { input : ''}
  // handleInput = (e) => {this.setState({ input: e.target.value })}
  // handleButton = () => {this.props.onTextChange(this.state.input)}
  // <button onClick={this.handleButton}>search</button>
  
  render(){
    return (
      <div className='vtuberListFilter__wrapper'>
        <div className='vtuberListFilter__container'>
            <input
              type="text"
              className='searchbox__input'
              value={this.props.text}
              placeholder='search vtubers...'
              onChange={this.props.onTextChange}
            />
            <select 
              onChange={this.props.onSortChange} 
              style={{display:'inline-block'}}
              defaultValue={this.props.sortBy}  
            >
                <option value="subs">Subs</option>
                <option value="videoCount">VideoCount</option>
                <option value="createdAt">CreatedAt</option>
                <option value="tweetCount">TweetCount</option>
                <option value="followCount">FollowCount</option>
                <option value="followerCount">FollowerCount</option>
            </select>
            <select 
                onChange={this.props.onOrderChange} 
                style={{display:'inline-block'}}
                defaultValue={this.props.order}  
              >
                <option value="descend">降順</option>
                <option value="ascend">昇順</option>
            </select>
        </div>
        
        <Pagination
          activePage={this.props.activePage}
          itemsCountPerPage={100}
          totalItemsCount={this.props.totalVtuber}
          pageRangeDisplayed={5}
          onChange={this.props.handlePageChange}
        />
        </div>
    );
  }
}
export default VtuberListFilter;
