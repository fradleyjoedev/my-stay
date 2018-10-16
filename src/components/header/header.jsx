import React from 'react';

import './header.scss'

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <h1>My Stay.</h1>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { HotelReducer } = state;

  const {
      data
  } = HotelReducer || {
      data: null
  }

  return {
      data
  };
}

export default Header;
