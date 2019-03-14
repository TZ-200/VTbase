import React from 'react';
import { connect } from 'react-redux';
import VtuberListFilter from './VtuberListFilter';
import Scroll from './Scroll';
import VtuberList from './VtuberList';

export class DatabasePage extends React.Component{



  render(){

    return (
      <div className="databasePage__wrapper">
        <VtuberListFilter/>
        <Scroll>
          <VtuberList/>
        </Scroll>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DatabasePage);