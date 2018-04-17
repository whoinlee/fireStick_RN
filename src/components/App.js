/* @flow */

import React, { Component } from 'react';

import {Scene, Router} from 'react-native-router-flux';
import Feeds from './Feeds';
import Articles from './Articles';

class App extends Component<void, void, void> {
  navigator: any;

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="feeds" component={Feeds} hideNavBar />
          <Scene key="articles" component={Articles} hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default App;
