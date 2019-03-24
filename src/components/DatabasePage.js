import React from 'react';
import { connect } from 'react-redux';
import DatabaseListFilter from './DatabaseListFilter';
import DatabaseScroll from './DatabaseScroll';
import DatabaseList from './DatabaseList';
import selectVtubers from '../selectors/vtubers';

/**
 * Vtuber一覧を表示
 * 表示するVtuberの条件をstateで管理して、表示するデータをrender()内でSelectorで取得
 */

export class DatabasePage extends React.Component{

  state = {
    text: '',
    sortBy: 'subs',
    order: 'descend',
    activePage: 1,
  };

  // Sortの種類を決定
  onSortChange = (e) => {
    const sortBy = e.target.value;
    if(sortBy === 'subs'){
      this.setState({sortBy: 'subs'});
    } else if (sortBy === 'videoCount') {
      this.setState({sortBy: 'videoCount'});
    } else if (sortBy === 'createdAt'){
      this.setState({sortBy: 'createdAt'}); 
    } else if(sortBy === 'tweetCount') {
      this.setState({sortBy: 'tweetCount'}); 
    } else if (sortBy === 'followCount') {
      this.setState({sortBy: 'followCount'}); 
    } else if (sortBy === 'followerCount') {
      this.setState({sortBy: 'follwerCount'}); 
    }
    this.setState({activePage: 0, activePage: 1});
  }

  // Sortの降順昇順を決定
  onOrderChange = (e) => { this.setState({order:e.target.value, activePage: 1}) }

  // Text検索
  onTextChange = (e) => { this.setState({text: e.target.value, activePage: 1}) }

  // Pagination
  handlePageChange = (pageNumber) => { this.setState({activePage: pageNumber}) }

  render(){
    // 表示するVtuberを取得
    const [dispVtubers, totalVtuber] = selectVtubers(
                                            this.props.vtubers, 
                                            this.state.text, 
                                            this.state.sortBy, 
                                            this.state.order, 
                                            this.state.activePage
                                      );
    return (
      <div className="databasePage__wrapper">
        <DatabaseListFilter
            text={this.state.text}
            activePage={this.state.activePage}
            totalVtuber={totalVtuber}
            handlePageChange={this.handlePageChange}
            onSortChange={this.onSortChange}
            onOrderChange={this.onOrderChange}
            onTextChange={this.onTextChange}
        />
        <DatabaseScroll>
          <DatabaseList
              text={this.state.text}
              sortBy={this.state.sortBy}
              order={this.state.order}
              activePage={this.state.activePage}
              dispVtubers={dispVtubers}
          />
        </DatabaseScroll>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vtubers: state.vtubers[0]
});

export default connect(mapStateToProps)(DatabasePage);