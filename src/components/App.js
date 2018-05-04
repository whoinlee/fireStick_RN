/* @flow */
import React, { Component } from 'react';
// import 'expo';

import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from '../Router';


class App extends Component<void, void, void> {
  navigator: any;

  render() {
    console.log("INFO App :: render")
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('feeds')} />
      </NavigationProvider>
    );
  }
}

export default App;
