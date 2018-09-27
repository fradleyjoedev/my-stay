import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterList, clearFilters } from '../../actions/hotelActions';

import './filter.scss'

class SideFilter extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
			selected: -1
		}

    this.clearFilters = this.clearFilters.bind(this);
  }

  filter(filterName, filterValue, key) {
    this.props.dispatch(filterList(this.props.data, this.props.selectedFilters, filterName, filterValue))

    this.setState({
      selected: key
    });
  };

  clearFilters(filterValue){
    this.props.dispatch(clearFilters())

    this.setState({
      selected: -1
    });
  };

  render() {
    const { data, filters, filteredData } = this.props;
    return (
      <div>
        {
          filteredData != null ?
            <p className="filter-reset" onClick={this.clearFilters}>Reset filters</p>
          : null
        }
        <div className="filter">
          {
            filters != null ?
              <div>
                <h2>Filter by:</h2>
                <div className="filter__section">
                  <h3>Facilities</h3>
                  {
                    filters.facilities.map((facility, i) => 
                      <a key={i} className={`filter__section-item ${i === this.state.selected ? 'filter__section-item-selected' : ''}`} onClick={() => this.filter("facilities", facility, i)} >
                        {facility}
                      </a>
                    )
                  }
                </div>
                <div className="filter__section">
                  <h3>Star rating</h3>
                  {
                    filters.stars.map((star, i) => 
                      <a key={i} className="filter__section-item" onClick={() => this.filter("starRating", star)}>
                        Stars {star}
                      </a>
                    )
                  }
                </div>
              </div>
            : null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { HotelReducer } = state;

  const {
      filters,
      data,
      filteredData,
      selectedFilters
  } = HotelReducer || {
      filters: null,
      data : null,
      filteredData : null,
      selectedFilters: []
  }

  return {
      filters,
      data,
      filteredData,
      selectedFilters
  };
}

export default connect(mapStateToProps)(SideFilter);
