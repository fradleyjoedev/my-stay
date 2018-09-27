import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './components/app';
import reducers from './reducers';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>  
  </Provider>
  , document.querySelector('.app'));
