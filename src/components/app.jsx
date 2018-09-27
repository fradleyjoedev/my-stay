import React, { Component } from 'react';
import { storeHotelData } from '../actions/hotelActions';
import { connect } from 'react-redux';
import Header from './header/header';
import HotelList from './hotelList/hotelList';
import SideFilter from './filters/sideFilter';
import TopFilter from './filters/topFilter';

import './styles/styles.scss'

class App extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount(){
		this.props.dispatch(storeHotelData())
	}

  render() {
    return (
      <div>
        <Header/>
        <div className="col-container">
          <div className="col-xs-12 col-sm-4">
            <SideFilter/>
          </div>
          <div className="col-xs-12 col-sm-8">
            <TopFilter />
            <HotelList/>
          </div>
        </div>       
      </div>
      
    );
  }
}

export default connect(null)(App);
