import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortData } from '../../actions/hotelActions';

import './filter.scss'

class TopFilter extends Component {
  constructor (props) {
    super(props);

    this.sortData = this.sortData.bind(this);
  }

  sortData(descending) {
    this.props.dispatch(sortData(descending))
  }

  render() {
    return (
      <div className="filter__top">
        <a onClick={() => this.sortData(false)}>Sort by Stars Ascending</a>
        <a onClick={() => this.sortData(true)}>Sort by Stars Descending</a>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { HotelReducer } = state;

  const {
      data,
      filteredData
  } = HotelReducer || {
      data: null,
      filteredData: null
  }

  return {
      data,
      filteredData
  };
}

export default connect(mapStateToProps)(TopFilter);
