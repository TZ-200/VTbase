import React from 'react';
import { connect } from 'react-redux';
import VtuberListFilter from './VtuberListFilter';
import Scroll from './Scroll';
import VtuberList from './VtuberList';
import selectVtubers from '../selectors/vtubers';


export class DatabasePage extends React.Component{

  state = {
    text: '',
    sortBy: 'subs',
    order: 'descend',
    activePage: 1,
  };


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
  onOrderChange = (e) => { this.setState({order:e.target.value, activePage: 1}) }
  onTextChange = (e) => { this.setState({text: e.target.value, activePage: 1}) }
  handlePageChange = (pageNumber) => { this.setState({activePage: pageNumber}) }

  render(){
    const [dispVtubers, totalVtuber] = selectVtubers(
                                            this.props.vtubers, 
                                            this.state.text, 
                                            this.state.sortBy, 
                                            this.state.order, 
                                            this.state.activePage
                                      );
    return (
      <div className="databasePage__wrapper">
        <VtuberListFilter
            text={this.state.text}
            activePage={this.state.activePage}
            totalVtuber={totalVtuber}
            handlePageChange={this.handlePageChange}
            onSortChange={this.onSortChange}
            onOrderChange={this.onOrderChange}
            onTextChange={this.onTextChange}
        />
        <Scroll>
          <VtuberList
              text={this.state.text}
              sortBy={this.state.sortBy}
              order={this.state.order}
              activePage={this.state.activePage}
              dispVtubers={dispVtubers}
          />
        </Scroll>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
  vtubers: state.vtubers[0]
});

export default connect(mapStateToProps, mapDispatchToProps)(DatabasePage);