/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';

import Header from './common/Header';
import AboutPage from './about/AboutPage';
import AlbumPage from './album/AlbumPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/album" component={AlbumPage} />
          <Route path="/about" component={AboutPage} />
          {/*<Route component={NotFoundPage} />*/}
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
