import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateOnChange from 'react-animate-on-change'
import Loading from '../loading/loading';

import './hotelList.scss'

class HotelList extends Component {
  constructor (props) {
    super(props);
  }

  stars(count) {
    var stars = [];
    for (var i = 0; i < count; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;  
  }

  render() {
    const { data, filteredData, sorting } = this.props;

    let hoteldata = filteredData != null ? filteredData : data;

    switch(sorting){
      case "asc":
          hoteldata = hoteldata.sort((a, b) => a.starRating - b.starRating)
          break;
      case "desc":
          hoteldata = hoteldata.sort((a, b) => b.starRating - a.starRating)
          break;
      default:
          break;
    }

    return (
      <div className="hotel__list">
        {
          hoteldata != null ?
            hoteldata.map((hotel, i) =>
              <AnimateOnChange 
              key={i}
              baseClassName="hotel__list-item" 
              animationClassName="hotel__list-item-animate" 
              animate={filteredData != null}>
                <div key={i}>
                    <h2>{hotel.name}</h2>
                    <div className="hotel__list-item-stars">
                      {this.stars(hotel.starRating)}
                    </div>
                    <p>{hotel.description}</p>
                    <div className="hotel__list-item-facilities">
                      <p>Facilities:</p>
                      {
                        hotel.facilities.map((facility, i) => 
                          <span key={i}>{facility}</span>
                        )
                      }
                    </div>
                  </div>
              </AnimateOnChange>
            )
          : <Loading/>
        }
        
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { HotelReducer } = state;

  const {
      data,
      filteredData,
      sorting
  } = HotelReducer || {
      data: null,
      filteredData : null,
      sorting: ''
  }

  return {
      data,
      filteredData,
      sorting
  };
}

export default connect(mapStateToProps)(HotelList);
