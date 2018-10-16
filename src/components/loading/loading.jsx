import React from 'react';
import './loading.scss'

class Loading extends React.PureComponent {
  render() {
    return (
      <div className="loading">
        <div className="loading__loader"></div>
      </div>
    );
  }
}

export default Loading;
